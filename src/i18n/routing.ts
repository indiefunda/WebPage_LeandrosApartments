import type { Locale } from '../content/types';
import { siteUrl } from '../data/property';

export const locales: Locale[] = ['en', 'el', 'fr'];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<
  Locale,
  { label: string; short: string; htmlLang: string; ogLocale: string }
> = {
  en: { label: 'English', short: 'EN', htmlLang: 'en-GB', ogLocale: 'en_GB' },
  el: { label: 'Ελληνικά', short: 'ΕΛ', htmlLang: 'el-GR', ogLocale: 'el_GR' },
  fr: { label: 'Français', short: 'FR', htmlLang: 'fr-FR', ogLocale: 'fr_FR' },
};

/** `/` for English, `/el/` and `/fr/` for the others. */
export function localeHome(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

/**
 * Turns an unlocalised, slash-terminated path (`''`, `'apartments/'`,
 * `'apartments/maisonette/'`) into the URL for a given locale.
 */
export function localizePath(locale: Locale, path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  if (!clean) return `${prefix}/`;
  return `${prefix}/${clean}/`;
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

export interface AlternateLink {
  hrefLang: string;
  href: string;
}

/**
 * The full hreflang cluster for a page: every locale plus x-default pointing at
 * the English edition. Each page in the cluster lists the identical set, which
 * is what Google requires for reciprocal annotations.
 */
export function alternateLinks(path: string): AlternateLink[] {
  const links: AlternateLink[] = locales.map((locale) => ({
    hrefLang: localeMeta[locale].htmlLang,
    href: absoluteUrl(localizePath(locale, path)),
  }));
  links.push({ hrefLang: 'x-default', href: absoluteUrl(localizePath(defaultLocale, path)) });
  return links;
}

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}
