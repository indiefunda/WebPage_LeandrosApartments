import type { Locale, SiteContent } from './types';
import { en } from './en';
import { el } from './el';
import { fr } from './fr';

export const content: Record<Locale, SiteContent> = { en, el, fr };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export function getUnit(content: SiteContent, slug: string) {
  return content.units.find((unit) => unit.slug === slug);
}

export type { Locale, SiteContent } from './types';
