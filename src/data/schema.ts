import type { Locale, SiteContent } from '../content/types';
import { siteUrl, property } from '../data/property';
import { absoluteUrl, localizePath } from '../i18n/routing';

/**
 * Structured data, kept deliberately conservative:
 *  - one LodgingBusiness entity with a stable @id
 *  - Apartment entities that point back to it
 *  - BreadcrumbList on inner pages
 * Review and FAQ markup are intentionally absent: Google does not award rich
 * results for self-hosted property reviews, and FAQ rich results were retired
 * in 2026. The visible HTML still carries both, for readers.
 */

export function lodgingBusiness(t: SiteContent, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${siteUrl}/#lodging`,
    name: 'Leandros Apartments',
    alternateName: 'Διαμερίσματα Λέανδρος',
    description: t.meta.home.description,
    url: absoluteUrl(localizePath(locale, '')),
    image: [`${siteUrl}/og/home.jpg`],
    logo: `${siteUrl}/logo.svg`,
    telephone: property.phones.landline,
    priceRange: property.priceRange,
    hasMap: property.geoUrl,
    sameAs: [property.geoUrl],
    currenciesAccepted: 'EUR',
    checkinTime: property.checkIn,
    checkoutTime: property.checkOut,
    identifier: {
      '@type': 'PropertyValue',
      name: 'M.H.T.E.',
      value: property.mte,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.street,
      addressLocality: property.locality,
      addressRegion: 'South Aegean',
      postalCode: property.postalCode,
      addressCountry: 'GR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: property.geo.lat,
      longitude: property.geo.lng,
    },
    amenityFeature: t.ratesPage.included.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    containsPlace: t.units.map((unit) => ({
      '@type': 'Apartment',
      name: unit.name,
      numberOfRooms: unit.layout.filter((row) => row.label.toLowerCase().includes('bedroom')).length || 1,
      occupancy: { '@type': 'QuantitativeValue', maxValue: Number(unit.sleeps.split(/[^\d]/)[0]) },
    })),
  };
}

export function apartmentSchema(t: SiteContent, locale: Locale, slug: string) {
  const unit = t.units.find((item) => item.slug === slug);
  if (!unit) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Apartment',
    name: unit.name,
    description: unit.intro,
    url: absoluteUrl(localizePath(locale, `apartments/${slug}/`)),
    containedInPlace: { '@id': `${siteUrl}/#lodging` },
    occupancy: { '@type': 'QuantitativeValue', maxValue: Number(unit.sleeps.split(/[^\d]/)[0]) },
    floorSize: undefined,
    amenityFeature: unit.features.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    image: [`${siteUrl}/og/${slug}.jpg`],
  };
}

export function breadcrumbs(items: { name: string; path: string }[], locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localizePath(locale, item.path)),
    })),
  };
}
