#!/usr/bin/env node
/**
 * Builds the static map preview for the location card.
 *
 * Uses OpenStreetMap tiles (attribution shown in the UI) centred on the
 * property, because a Google Maps iframe is only loaded after the visitor asks
 * for it. The interactive map is the property's own Google Maps listing.
 *
 * Run: node scripts/build-map-preview.mjs
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = join(root, 'public', 'map');
const outFile = join(outDir, 'platys-gialos.jpg');

const LAT = 36.93063;
const LON = 24.72456;
const ZOOM = 15;
const TILE = 256;
const COLS = 6;
const ROWS = 4;

const n = 2 ** ZOOM;
const x = ((LON + 180) / 360) * n;
const latRad = (LAT * Math.PI) / 180;
const y = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n;

const centerX = Math.floor(x);
const centerY = Math.floor(y);
const left = centerX - Math.floor(COLS / 2);
const top = centerY - Math.floor(ROWS / 2);

// Pixel position of the property inside the tile mosaic, used to crop so the
// pin lands exactly in the centre of the final image.
const propertyPixelX = x * TILE - left * TILE;
const propertyPixelY = y * TILE - top * TILE;

const UA = 'LeandrosApartmentsWebsite/1.0 (https://leandros-apartments.web.app)';
const cacheDir = join(root, '.staging', 'map-tiles');
await mkdir(cacheDir, { recursive: true });
await mkdir(outDir, { recursive: true });

async function tile(col, row) {
  const file = join(cacheDir, `${ZOOM}-${col}-${row}.png`);
  try {
    await access(file);
    return file;
  } catch {
    // not cached
  }

  const url = `https://tile.openstreetmap.org/${ZOOM}/${col}/${row}.png`;
  const response = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!response.ok) throw new Error(`Tile ${col}/${row} failed: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(file, buffer);
  return file;
}

const composites = [];
for (let row = 0; row < ROWS; row += 1) {
  for (let col = 0; col < COLS; col += 1) {
    const file = await tile(left + col, top + row);
    composites.push({
      input: file,
      left: col * TILE,
      top: row * TILE,
    });
    await new Promise((resolve) => setTimeout(resolve, 120));
  }
}

const width = COLS * TILE;
const height = ROWS * TILE;

const mosaic = await sharp({
  create: { width, height, channels: 3, background: '#e9e2d4' },
})
  .composite(composites)
  .png()
  .toBuffer();

// Centre crop to 3:2, then a restrained warm/desaturated grade so the map sits
// inside the site's palette instead of shouting.
const targetWidth = 1200;
const targetHeight = 800;
const cropLeft = Math.min(Math.max(0, Math.round(propertyPixelX - targetWidth / 2)), width - targetWidth);
const cropTop = Math.min(Math.max(0, Math.round(propertyPixelY - targetHeight / 2)), height - targetHeight);

await sharp(mosaic)
  .extract({ left: cropLeft, top: cropTop, width: targetWidth, height: targetHeight })
  .modulate({ saturation: 0.62, brightness: 1.03 })
  .linear(1.03, -4)
  .sharpen({ sigma: 0.5, m1: 0.3, m2: 0.5 })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(outFile);

console.log(
  `map  ${outFile} (${targetWidth}x${targetHeight}) centre ${LAT}, ${LON} • tiles ${left}-${left + COLS - 1}/${top}-${top + ROWS - 1} @ z${ZOOM}`,
);
