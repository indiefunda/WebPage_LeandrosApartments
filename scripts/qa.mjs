#!/usr/bin/env node
/**
 * Visual and behavioural QA against the preview server.
 * Requires Microsoft Edge (channel: 'msedge') — no browser download needed.
 *
 * Run: node scripts/qa.mjs [baseUrl]
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const base = process.argv[2] ?? 'http://localhost:4322';
const out = join(root, '.shots');
await mkdir(out, { recursive: true });

const browser = await chromium.launch({ channel: 'msedge' });
const report = { pages: [], consoleErrors: [], failures: [] };

const pages = [
  { path: '/', name: 'home', desktop: true, mobile: true },
  { path: '/apartments/', name: 'apartments', desktop: true },
  { path: '/apartments/maisonette/', name: 'unit', desktop: true, mobile: true },
  { path: '/location/', name: 'location', desktop: true },
  { path: '/rates/', name: 'rates', desktop: true, mobile: true },
  { path: '/contact/', name: 'contact', desktop: true },
  { path: '/privacy/', name: 'privacy', desktop: false },
  { path: '/el/', name: 'el-home', desktop: true },
  { path: '/el/rates/', name: 'el-rates', desktop: false },
  { path: '/fr/', name: 'fr-home', desktop: true },
  { path: '/fr/contact/', name: 'fr-contact', desktop: false },
];

const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await context.newPage();

page.on('console', (message) => {
  if (message.type() === 'error') report.consoleErrors.push(`${page.url()} :: ${message.text()}`);
});
page.on('pageerror', (error) => {
  report.consoleErrors.push(`${page.url()} :: PAGEERROR ${error.message}`);
});

const settle = async () => {
  // Walk the page so lazy images load and scroll-reveals fire, then normalise
  // the reveal state for a stable full-page capture.
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = () => {
        y += Math.round(window.innerHeight * 0.75);
        window.scrollTo(0, y);
        if (y < document.documentElement.scrollHeight) {
          setTimeout(step, 45);
        } else {
          window.scrollTo(0, 0);
          setTimeout(resolve, 350);
        }
      };
      step();
    });
  });
  await page.addStyleTag({
    content: '[data-reveal]{opacity:1!important;transform:none!important}',
  });
  await page.evaluate(async () => {
    const imgs = Array.from(document.images);
    imgs.forEach((img) => {
      img.loading = 'eager';
    });
    await Promise.all(imgs.map((img) => img.decode?.().catch(() => {})));
  });
  await page.evaluate(
    () =>
      new Promise((resolve) => {
        const pending = Array.from(document.images).filter((img) => !img.complete);
        if (!pending.length) return resolve(null);
        let done = 0;
        const settleOne = () => {
          done += 1;
          if (done >= pending.length) resolve(null);
        };
        pending.forEach((img) => {
          img.addEventListener('load', settleOne, { once: true });
          img.addEventListener('error', settleOne, { once: true });
        });
        setTimeout(() => resolve(null), 2500);
      }),
  );
  await page.waitForTimeout(450);
};

const inspect = async () => {
  return page.evaluate(() => {
    const vw = window.innerWidth;
    const overflow = [];
    document.querySelectorAll('body *').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      if (rect.right > vw + 1 || rect.left < -1) {
        const style = getComputedStyle(el);
        if (style.position === 'fixed' || style.position === 'absolute') return;
        overflow.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || '').toString().slice(0, 60),
          right: Math.round(rect.right),
          left: Math.round(rect.left),
        });
      }
    });

    const brokenImages = Array.from(document.images)
      .filter((img) => img.complete && img.naturalWidth === 0)
      .map((img) => img.currentSrc || img.src);

    return {
      scrollWidth: document.documentElement.scrollWidth,
      viewport: vw,
      overflow: overflow.slice(0, 8),
      brokenImages,
      fonts: {
        garamond: document.fonts.check('16px "EB Garamond Variable"'),
        inter: document.fonts.check('16px "Inter Variable"'),
      },
      h1: document.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim().slice(0, 80) ?? '',
      title: document.title,
    };
  });
};

for (const target of pages) {
  await page.setViewportSize({ width: 1440, height: 1000 });
  const response = await page.goto(base + target.path, { waitUntil: 'networkidle' });
  await settle();
  const info = await inspect();
  report.pages.push({ ...target, status: response?.status(), ...info });

  if (info.scrollWidth > info.viewport + 1) {
    report.failures.push(`${target.path} overflows horizontally (${info.scrollWidth} > ${info.viewport})`);
  }
  if (info.brokenImages.length) {
    report.failures.push(`${target.path} has ${info.brokenImages.length} broken image(s)`);
  }

  if (target.desktop) {
    await page.screenshot({ path: join(out, `${target.name}-full.png`), fullPage: true });
  }

  if (target.mobile) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: 'networkidle' });
    await settle();
    const mobileInfo = await inspect();
    if (mobileInfo.scrollWidth > mobileInfo.viewport + 1) {
      report.failures.push(
        `${target.path} overflows on mobile (${mobileInfo.scrollWidth} > ${mobileInfo.viewport})`,
      );
    }
    await page.screenshot({ path: join(out, `${target.name}-mobile-full.png`), fullPage: true });
    report.pages.push({ ...target, name: `${target.name}-mobile`, ...mobileInfo });
  }
}

/* Mobile menu ------------------------------------------------------------ */
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(base + '/', { waitUntil: 'networkidle' });
await page.click('[data-menu-open]');
await page.waitForTimeout(500);
const menuOpen = await page.evaluate(() => {
  const dialog = document.querySelector('[data-menu]');
  return dialog instanceof HTMLDialogElement ? dialog.open : false;
});
if (!menuOpen) report.failures.push('Mobile menu did not open');
await page.screenshot({ path: join(out, 'mobile-menu.png') });
await page.click('[data-menu-close]');
await page.waitForTimeout(300);

/* Lightbox --------------------------------------------------------------- */
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto(base + '/apartments/maisonette/', { waitUntil: 'networkidle' });
const galleryButton = page.locator('[data-lb-open]').first();
if (await galleryButton.count()) {
  await galleryButton.click();
  await page.waitForTimeout(600);
  const lightboxOpen = await page.evaluate(() => {
    const dialog = document.querySelector('[data-lb-dialog]');
    return dialog instanceof HTMLDialogElement ? dialog.open : false;
  });
  if (!lightboxOpen) report.failures.push('Lightbox did not open');
  await page.screenshot({ path: join(out, 'lightbox.png') });
  await page.keyboard.press('Escape');
}

/* Availability prefill --------------------------------------------------- */
await page.goto(base + '/contact/?arrival=2027-06-12&departure=2027-06-19&guests=4', {
  waitUntil: 'networkidle',
});
const prefill = await page.evaluate(() => {
  const get = (name) => document.querySelector(`[name="${name}"]`);
  return {
    arrival: get('arrival')?.value,
    departure: get('departure')?.value,
    adults: get('adults')?.value,
  };
});
if (prefill.arrival !== '2027-06-12') {
  report.failures.push(`Contact form did not prefill arrival (got "${prefill.arrival}")`);
}

/* Form validation -------------------------------------------------------- */
await page.click('[data-enquiry-form] [type="submit"]');
await page.waitForTimeout(400);
const errorsShown = await page.evaluate(() => document.querySelectorAll('[data-error]:not([hidden])').length);
if (errorsShown < 2) report.failures.push('Form validation did not surface inline errors');

await browser.close();

console.log(JSON.stringify(report, null, 2));
console.log(`\nScreenshots: ${out}`);
if (report.failures.length) {
  console.log(`\nFAILURES (${report.failures.length}):`);
  report.failures.forEach((failure) => console.log(` - ${failure}`));
}
