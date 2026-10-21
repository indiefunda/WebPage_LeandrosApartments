# Leandros Apartments — website

The official website for **Leandros Apartments**, three family-run, beachfront
apartments on the sand at **Platys Gialos, Sifnos, Greece**.

Fully trilingual (English, Greek, French), statically generated, and deployed to
Firebase Hosting.

- **Live:** https://leandros-apartments.web.app
- **Repository:** https://github.com/indiefunda/WebPage_LeandrosApartments
- **Firebase project:** `leandros-apartments` (Hosting + Firestore `enquiries` in `europe-west1`)

---

## What this is

A premium, editorial reimagining of the property's 2017 website. The old site
was a Bootstrap/jQuery template with a 3D-icon aesthetic, broken mobile layout,
missing structured data and no French edition (despite a French menu link).

This build keeps every factual detail from the original — the three apartments,
the amphitheatre-style courtyard, the amenities, the rate card, the deposit and
cancellation terms, the phone numbers and the ΜΗ.Τ.Ε. registration — and
replaces the presentation with a performant, accessible, SEO-complete static
site.

### Stack (2026)

| Concern       | Choice                                                                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework     | [Astro 7](https://astro.build) — static output, Rust compiler, zero client framework                                                                 |
| Styling       | [Tailwind CSS 4](https://tailwindcss.com) via the Vite plugin, plus a small design-token layer                                                       |
| Type safety   | TypeScript (`astro/tsconfigs/strict`) + a content model that makes the three languages structurally identical                                        |
| Images        | `astro:assets` + Sharp: AVIF → WebP → JPEG, responsive `srcset`, and a consistent editorial grade applied to the original photography                |
| Fonts         | Self-hosted **EB Garamond** (display, Greek-complete) and **Inter** (UI, Greek-complete) via Fontsource — no Google Fonts request, no consent banner |
| Interactivity | ~15 KB of vanilla JS: native `<dialog>` menu and lightbox, form validation, scroll reveals, carousel                                                 |
| Hosting       | Firebase Hosting, Firestore for enquiries, security rules in `firestore.rules`                                                                       |
| SEO           | hreflang cluster with `x-default`, canonical URLs, JSON-LD (`LodgingBusiness`, `Apartment`, `BreadcrumbList`), sitemap with alternates, OG cards     |

No tracking scripts are loaded. Analytics can be added deliberately (see below)
without changing the design.

---

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static output in dist/
npm run preview      # serve dist/ locally
npm run check        # Astro + TypeScript diagnostics
```

Node **22+** is required (Astro 7).

### Useful maintenance scripts

```bash
node scripts/prepare-images.mjs   # regrade + normalise .staging/images → src/assets/photos
node scripts/build-icons.mjs      # regenerate favicon + app icons
node scripts/build-og.mjs         # regenerate social cards in public/og
node scripts/qa.mjs               # browser QA: overflow, broken images, console errors, screenshots
```

`qa.mjs` needs Microsoft Edge installed (it launches `channel: 'msedge'`, so no
browser download) and a preview server on `http://localhost:4322`:

```bash
npm run preview -- --port 4322
node scripts/qa.mjs
```

Screenshots land in `.shots/` (git-ignored).

---

## Content: three languages, one shape

All copy lives in `src/content/`:

```
src/content/
  types.ts   ← the SiteContent interface (the contract)
  en.ts      ← English reference edition
  el.ts      ← Greek edition
  fr.ts      ← French edition
  index.ts   ← locale → content lookup
```

Each file exports an object typed as `SiteContent`. Because every field is
required, **TypeScript fails the build if a language is missing a string or an
array item** — the three editions cannot drift structurally.

To change a price, a phone number or a date, edit `src/data/property.ts` rather
than the translations. Those values are single-sourced on purpose.

### Editing copy

1. Edit the string in `src/content/en.ts` (and `el.ts` / `fr.ts`).
2. Keep the same array lengths and object keys.
3. Run `npm run check` before committing.

### Photography

The original archive was downloaded from the legacy site at 1200 px and graded
once, consistently:

```bash
node scripts/prepare-images.mjs
```

Sources live in `.staging/images/` (git-ignored); graded output in
`src/assets/photos/` is committed so a fresh clone can build. Alt text for every
photo is translated in `src/data/photos.ts`.

To add a photo: drop the original into `.staging/images/`, run the script, then
register it in `src/data/photos.ts` with alt text for all three languages.

---

## Routing and internationalisation

English is the default locale and lives at the root; Greek and French are
prefixed:

| Page       | English                   | Greek                        | French                       |
| ---------- | ------------------------- | ---------------------------- | ---------------------------- |
| Home       | `/`                       | `/el/`                       | `/fr/`                       |
| Apartments | `/apartments/`            | `/el/apartments/`            | `/fr/apartments/`            |
| Unit       | `/apartments/maisonette/` | `/el/apartments/maisonette/` | `/fr/apartments/maisonette/` |
| Location   | `/location/`              | `/el/location/`              | `/fr/location/`              |
| Rates      | `/rates/`                 | `/el/rates/`                 | `/fr/rates/`                 |
| Contact    | `/contact/`               | `/el/contact/`               | `/fr/contact/`               |
| Privacy    | `/privacy/`               | `/el/privacy/`               | `/fr/privacy/`               |

Slugs and section IDs are intentionally identical across languages so the
hreflang cluster is exact and sitemap alternates work.

Every page emits a reciprocal hreflang set (`en-GB`, `el-GR`, `fr-FR`) plus
`x-default` pointing at the English edition. The language switcher links to the
**same page in the other language**, never to the homepage, and never rewrites
the URL by cookie.

A dismissible chip suggests Greek or French when the browser language matches,
but the content is never auto-redirected — Googlebot must be able to reach every
edition.

---

## SEO and structured data

- Self-referencing canonical per locale.
- hreflang + x-default in `<head>` and `<xhtml:link>` alternates in the sitemap.
- JSON-LD: `LodgingBusiness` (with `identifier` = ΜΗ.Τ.Ε. 1026599, address, geo,
  amenities, check-in/out, price range), `Apartment` per unit with
  `containedInPlace`, and `BreadcrumbList` on inner pages.
- Deliberately **no** `aggregateRating` or `Review` markup: Google does not award
  stars for self-hosted property reviews. Guest quotes remain in the HTML for
  readers.
- Deliberately **no** `FAQPage` markup: FAQ rich results were retired in May 2026.
  The FAQ content still exists on the rates page because it helps people.
- `robots.txt` → `sitemap-index.xml`; the sitemap is generated at build time.

### After deploying

1. Submit `https://leandros-apartments.web.app/sitemap-index.xml` in Google
   Search Console and Bing Webmaster Tools.
2. Set the custom domain (see below) and re-verify, so canonicals point at the
   final hostname.
3. Create a Google Business Profile only if the property qualifies as staffed
   lodging; Greek law also requires the ΜΗ.Τ.Ε. number to be visible, which the
   footer and contact page already do.

---

## Enquiries

The contact form posts directly to the Firestore REST API with the public web
API key. Security rules (`firestore.rules`) allow **anonymous create only** — no
reads, updates or deletes through the public API:

```bash
firebase deploy --only firestore:rules --project leandros-apartments
```

Read the inbox at:
https://console.firebase.google.com/project/leandros-apartments/firestore/databases/default/data/enquiries

If the database is unreachable, the form degrades to a pre-filled WhatsApp
message, so an enquiry is never lost to a network error.

**Caveat:** enquiries are stored, not emailed. To get an email notification,
either check the console regularly or add a Firebase Extension
(“Trigger Email from Firestore”) and point it at the owner's address.

---

## Deployment

```bash
npm run build
firebase deploy --only hosting --project leandros-apartments
```

Or simply:

```bash
npm run deploy
```

`firebase.json` sets:

- immutable, one-year caching for hashed `/_astro/**` assets;
- `must-revalidate` for HTML so content updates are immediate;
- security headers (`nosniff`, `Referrer-Policy`, `X-Frame-Options`,
  `Permissions-Policy`, HSTS);
- 301 redirects from every legacy URL (`/en/index.html`, `/booking.php`,
  `/apartments.html`, …) to its new equivalent;
- `trailingSlash: true` to match Astro's directory build format.

### Custom domain (`sifnosapartments.com`)

1. Firebase Console → Hosting → **Add custom domain**.
2. Add `sifnosapartments.com` and `www.sifnosapartments.com`; make the apex
   primary and `www` a redirect.
3. At the registrar, add the `A` records Firebase shows for the apex and the
   `TXT` verification record; point `www` at the Firebase target.
4. Wait for the managed certificate (up to 24 h) and enable HSTS.
5. Update the three places that hardcode the hostname:
   `src/data/property.ts` (`siteUrl`), `astro.config.mjs` (`site`), and
   `public/robots.txt` (sitemap URL). Rebuild and redeploy.

---

## Analytics and consent

The site ships with **no analytics**, which is why there is no cookie banner.
Fonts are self-hosted and the map only loads after a click.

If traffic data is needed, prefer a cookieless, EU-hosted tool (Plausible,
Umami, Cloudflare Web Analytics) — no consent banner required. If GA4 is
required, add Consent Mode v2 defaults _denied_ for `ad_storage`,
`ad_user_data`, `ad_personalization` and `analytics_storage`, and only update
them after an explicit choice. In that case, extend the privacy page.

---

## Accessibility

- Semantic landmarks, one `<h1>` per page, logical heading order.
- Skip link, visible focus rings, 24 px+ targets.
- `prefers-reduced-motion` disables all reveals and transitions.
- Scroll reveals are progressive enhancement: content is visible without
  JavaScript (the `js` class on `<html>` gates the hidden state).
- Native `<dialog>` for the mobile menu and lightbox, with keyboard arrows and
  Escape.
- Alt text for every photo, translated per locale.
- Form errors are announced inline and tied to their fields with
  `aria-describedby`; the honeypot is invisible to assistive tech.

Known limitation: the Google/OpenStreetMap embed is loaded on demand and is not
keyboard-trapped — it is a third-party map, not core content.

---

## Project structure

```
.
├── astro.config.mjs
├── firebase.json            # hosting headers, redirects, firestore rules target
├── firestore.rules          # create-only enquiries, everything else closed
├── public/                  # favicon, icons, manifest, robots, OG cards
├── scripts/
│   ├── prepare-images.mjs   # grade + normalise the photo archive
│   ├── build-icons.mjs      # Λ monogram → favicon & app icons
│   ├── build-og.mjs         # 1200×630 social cards
│   └── qa.mjs               # browser QA harness
├── src/
│   ├── assets/photos/       # graded photography (committed)
│   ├── components/          # Header, Footer, Gallery, BookingForm, …
│   │   └── pages/           # one component per page type, locale-agnostic
│   ├── content/             # en.ts / el.ts / fr.ts + types.ts
│   ├── data/                # property facts, photos + alt text, schema, firebase
│   ├── i18n/routing.ts      # URL helpers, hreflang cluster
│   ├── layouts/BaseLayout.astro
│   ├── pages/               # thin per-locale route wrappers
│   └── styles/global.css    # design tokens + component layer
└── .github/workflows/ci.yml # type-check + build on push/PR
```

---

## Design notes

The art direction is **“barefoot Cycladic”, not fake luxury**. The property is
three simple, immaculate apartments on a Blue Flag beach; the site sells the
sand, the courtyard and the light, not marble bathrooms.

- **Palette:** limewash paper `#F7F2E9`, deep aegean ink `#123F45`, Sifnian clay
  `#9D4B32`, olive `#59684A`. No gradients except photographic scrims.
- **Type:** EB Garamond at display sizes with a high contrast ratio, Inter for
  labels and body, generous tracking on small caps. Greek headlines are set in
  sentence case with neutral tracking — all-caps drops the tonos.
- **Layout:** framed images rather than full-bleed, generous vertical rhythm,
  hairline rules and numbered sections.
- **Motion:** 0.5–1.2 s, `cubic-bezier(.16,1,.3,1)`, small rises, no
  scroll-jacking, everything off under `prefers-reduced-motion`.

The 1200 px photo archive is a hard constraint: the hero is a composed 60/40
split at ≤ 480 CSS px, not a 100vw background, so nothing is upscaled.

---

## Licence and content ownership

The code is © 2026 the site author. All photography, copy and the **Leandros
Apartments** name are the property of Leandros Apartments, Platys Gialos,
Sifnos. ΜΗ.Τ.Ε. registration **1026599**.
