#!/usr/bin/env node
/**
 * Generates the icon set from one geometric Λ mark. Keeping the mark in code
 * (rather than exporting a raster logo) means it stays sharp everywhere and the
 * brand cannot drift between favicon, social card and app icon.
 *
 * Run: node scripts/build-icons.mjs
 */
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const pub = join(root, 'public');

const SEA = '#123f45';
const PAPER = '#f7f2e9';

const mark = (size, padding = 0.16, background = SEA, stroke = PAPER) => {
  const s = 64;
  const inset = s * padding;
  const r = (s - inset * 2) / 2;
  const cx = s / 2;
  const cy = s / 2;
  const scale = (s - inset * 2) / 40;
  const apex = 20 + 12 * scale;
  const base = 20 + 22 * scale;
  const left = 32 - 11 * scale;
  const right = 32 + 11 * scale;

  return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${s} ${s}">
  <rect width="${s}" height="${s}" fill="${background}"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${stroke}" stroke-width="${0.8 * scale}" opacity="0.5"/>
  <path d="M${left} ${base} L${cx} ${apex} L${right} ${base}" fill="none" stroke="${stroke}" stroke-width="${2.2 * scale}" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M${cx - 4.6 * scale} ${base - 7 * scale} h${9.2 * scale}" stroke="${stroke}" stroke-width="${1.4 * scale}" stroke-linecap="round"/>
</svg>`);
};

const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Leandros Apartments">
  <rect width="64" height="64" fill="${SEA}"/>
  <circle cx="32" cy="32" r="23" fill="none" stroke="${PAPER}" stroke-width="1.1" opacity="0.55"/>
  <path d="M20 43 L32 19 L44 43" fill="none" stroke="${PAPER}" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M26.5 37.5 h11" stroke="${PAPER}" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;

const logoSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Leandros Apartments">
  <rect width="64" height="64" fill="${SEA}"/>
  <circle cx="32" cy="32" r="23" fill="none" stroke="${PAPER}" stroke-width="1.1" opacity="0.55"/>
  <path d="M20 43 L32 19 L44 43" fill="none" stroke="${PAPER}" stroke-width="2.3" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M26.5 37.5 h11" stroke="${PAPER}" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;

await mkdir(pub, { recursive: true });

const { writeFile } = await import('node:fs/promises');
await writeFile(join(pub, 'favicon.svg'), faviconSvg);
await writeFile(join(pub, 'logo.svg'), logoSvg);

const targets = [
  { file: 'apple-touch-icon.png', size: 180, padding: 0.16 },
  { file: 'icon-192.png', size: 192, padding: 0.16 },
  { file: 'icon-512.png', size: 512, padding: 0.16 },
  { file: 'icon-maskable-512.png', size: 512, padding: 0.26 },
];

for (const target of targets) {
  await sharp(mark(target.size, target.padding)).png({ compressionLevel: 9 }).toFile(join(pub, target.file));
  console.log(`icon  ${target.file}`);
}

console.log('icon  favicon.svg, logo.svg');
