#!/usr/bin/env node
/**
 * Accessibility audit (WCAG 2.2 A/AA) with axe-core, run against the preview
 * server. Exits non-zero if anything fails, so it can gate a release.
 *
 *   npm run preview -- --port 4322
 *   node scripts/a11y.mjs [baseUrl]
 *
 * Add `--perf` to also sample LCP/CLS from the live deployment.
 */
import { chromium } from 'playwright';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');

const base = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : 'http://localhost:4322';
const withPerf = process.argv.includes('--perf');

const pages = [
  '/',
  '/apartments/',
  '/apartments/maisonette/',
  '/apartments/family-apartment/',
  '/location/',
  '/rates/',
  '/contact/',
  '/privacy/',
  '/el/',
  '/el/apartments/',
  '/el/rates/',
  '/fr/',
  '/fr/apartments/balcony-apartment/',
  '/fr/contact/',
  '/does-not-exist/',
];

const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

let failures = 0;
const rows = [];

for (const path of pages) {
  await page.goto(base + path, { waitUntil: 'networkidle' });
  // Reveal everything and freeze motion so colour/contrast is measured in its
  // final state rather than mid-transition.
  await page.addStyleTag({
    content:
      '[data-reveal]{opacity:1!important;transform:none!important} *{transition:none!important;animation:none!important}',
  });
  await page.waitForTimeout(200);
  await page.addScriptTag({ content: axeSource });

  const result = await page.evaluate(async () =>
    window.axe.run(document, {
      runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
    }),
  );

  rows.push({
    path,
    violations: result.violations.length,
    detail: result.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      nodes: violation.nodes.length,
      targets: violation.nodes.slice(0, 4).map((node) => node.target.join(' ')),
    })),
  });

  failures += result.violations.length;
}

let perf = null;
if (withPerf) {
  const perfPage = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await perfPage.goto('https://leandros-apartments.web.app/', { waitUntil: 'load' });
  perf = await perfPage.evaluate(async () => {
    const lcp = await new Promise((resolve) => {
      let value = 0;
      new PerformanceObserver((list) => {
        const entry = list.getEntries().at(-1);
        value = entry.startTime;
      }).observe({ type: 'largest-contentful-paint', buffered: true });
      setTimeout(() => resolve(Math.round(value)), 2500);
    });
    const cls = await new Promise((resolve) => {
      let value = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) if (!entry.hadRecentInput) value += entry.value;
      }).observe({ type: 'layout-shift', buffered: true });
      setTimeout(() => resolve(Number(value.toFixed(4))), 2500);
    });
    const nav = performance.getEntriesByType('navigation')[0];
    const resources = performance.getEntriesByType('resource');
    const transfer =
      resources.reduce((total, resource) => total + (resource.transferSize || 0), 0) +
      (nav?.transferSize || 0);
    return {
      lcpMs: lcp,
      cls,
      requests: resources.length + 1,
      transferKB: Math.round(transfer / 1024),
    };
  });
}

await browser.close();

for (const row of rows) {
  const label = row.path.padEnd(40);
  console.log(`${label} ${row.violations === 0 ? 'PASS' : `${row.violations} violation(s)`}`);
  for (const item of row.detail) {
    console.log(`   - ${item.id} (${item.impact}, ${item.nodes} node(s)): ${item.targets.join(' | ')}`);
  }
}

if (perf) console.log('\nLive performance sample:', perf);
console.log(
  `\n${failures === 0 ? 'No WCAG 2.2 A/AA violations found.' : `${failures} violation group(s) found.`}`,
);

process.exitCode = failures === 0 ? 0 : 1;
