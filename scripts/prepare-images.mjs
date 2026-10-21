#!/usr/bin/env node
/**
 * Prepares the original photography for the site.
 *
 * Sources live in .staging/images (downloaded from the legacy site, 1200px max).
 * Output goes to src/assets/photos with:
 *   - EXIF orientation applied
 *   - a single, consistent editorial grade (slight desaturation, lifted contrast,
 *     gentle warm highlights) so the archive reads as one curated body of work
 *   - metadata stripped
 *   - high quality JPEG (Astro re-encodes to AVIF/WebP per viewport)
 *
 * Run: node scripts/prepare-images.mjs
 */
import { readdir, mkdir, access } from 'node:fs/promises';
import { join, relative, extname, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const source = join(root, '.staging', 'images');
const target = join(root, 'src', 'assets', 'photos');

/** Files that are decorative chrome rather than photography. */
const SKIP = new Set([
  'icons/ac.png',
  'icons/kitchen.png',
  'icons/tv.png',
  'icons/wifi.png',
  'testimonials/female.png',
  'testimonials/male.png',
  'header/sifnos-leandros-logo.png',
  'footer/logo.png',
  'accommodation/apartment-2.jpg',
  'accommodation/apartment-3.jpg',
  'accommodation/maisonette-1.jpg',
]);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

const files = await walk(source);
let processed = 0;
let skipped = 0;

for (const file of files) {
  const rel = relative(source, file).split('\\').join('/');
  if (SKIP.has(rel)) continue;

  const destDir = join(target, dirname(rel));
  const dest = join(destDir, basename(rel, extname(rel)) + '.jpg');
  await mkdir(destDir, { recursive: true });

  if (await exists(dest)) {
    skipped++;
    continue;
  }

  const image = sharp(file, { failOn: 'none' }).rotate();
  const meta = await image.metadata();

  await image
    .modulate({ saturation: 0.93, brightness: 1.015 })
    .linear(1.055, -8)
    .sharpen({ sigma: 0.6, m1: 0.4, m2: 0.7 })
    .jpeg({ quality: 90, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(dest);

  console.log(`graded  ${rel}  ${meta.width}x${meta.height}`);
  processed++;
}

console.log(`\nDone. ${processed} image(s) graded, ${skipped} already present.`);
