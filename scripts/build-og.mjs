#!/usr/bin/env node
/**
 * Builds the social sharing cards. The 1200×630 crops are photographic, with a
 * soft sea-toned gradient and the Λ monogram — no font rendering involved, so
 * the output is identical on every machine.
 *
 * Run: node scripts/build-og.mjs
 */
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const photos = join(root, 'src', 'assets', 'photos');
const out = join(root, 'public', 'og');

const cards = [
  { name: 'home', source: 'gallery/apartments-leandros.jpg' },
  { name: 'apartments', source: 'accommodation/apartment1/balcony-sea-view.jpg' },
  { name: 'location', source: 'platis-gialos/beach-platis-gialos.jpg' },
  { name: 'rates', source: 'gallery/yards-at-leandros-apartments.jpg' },
  { name: 'contact', source: 'gallery/entrance-from-sea.jpg' },
  { name: 'privacy', source: 'gallery/accommodation-in-sifnos.jpg' },
  { name: 'maisonette', source: 'accommodation/apartment1/balcony-sea-view.jpg' },
  { name: 'family-apartment', source: 'accommodation/apartment2/sea-view-veranda.jpg' },
  { name: 'balcony-apartment', source: 'accommodation/apartment3/balcony-sea-view.jpg' },
];

const WIDTH = 1200;
const HEIGHT = 630;

const overlay = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a2a2f" stop-opacity="0.2"/>
      <stop offset="0.5" stop-color="#0a2a2f" stop-opacity="0.05"/>
      <stop offset="1" stop-color="#0a2a2f" stop-opacity="0.55"/>
    </linearGradient>
    <linearGradient id="band" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a2a2f" stop-opacity="0"/>
      <stop offset="0.45" stop-color="#0a2a2f" stop-opacity="0.72"/>
      <stop offset="1" stop-color="#0a2a2f" stop-opacity="0.92"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#scrim)"/>
  <rect y="${HEIGHT - 230}" width="${WIDTH}" height="230" fill="url(#band)"/>
  <g transform="translate(72 ${HEIGHT - 128})" fill="none" stroke="#f7f2e9" stroke-width="2">
    <circle cx="40" cy="40" r="38" opacity="0.9"/>
    <path d="M25 60 L40 22 L55 60" stroke-linejoin="round"/>
    <path d="M31 50 h18" stroke-width="1.6"/>
  </g>
  <g transform="translate(168 ${HEIGHT - 92})" fill="#f7f2e9" font-family="Georgia, 'Times New Roman', serif">
    <text x="0" y="0" font-size="46" letter-spacing="1">Leandros</text>
    <text x="2" y="30" font-size="15" letter-spacing="7" opacity="0.8">APARTMENTS</text>
  </g>
  <g transform="translate(${WIDTH - 72} ${HEIGHT - 86})" fill="#f7f2e9" opacity="0.85" text-anchor="end" font-family="Georgia, 'Times New Roman', serif">
    <text x="0" y="0" font-size="20" letter-spacing="6">PLATYS GIALOS · SIFNOS</text>
  </g>
</svg>`);

await mkdir(out, { recursive: true });

for (const card of cards) {
  const source = join(photos, card.source);
  const dest = join(out, `${card.name}.jpg`);

  const photo = await sharp(source)
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
    .modulate({ saturation: 0.95 })
    .toBuffer();

  await sharp(photo)
    .composite([{ input: overlay, top: 0, left: 0 }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dest);

  console.log(`og  ${card.name}.jpg`);
}

// A generic fallback used by the 404 page and any future route.
await sharp(join(out, 'home.jpg')).toFile(join(root, 'public', 'og-image.jpg'));
console.log('og  og-image.jpg');
