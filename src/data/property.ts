/**
 * Single source of truth for property facts that never change per language.
 * Keeping these here means phone numbers, coordinates and prices cannot drift
 * between the three language versions.
 */

export const property = {
  name: 'Leandros Apartments',
  shortName: 'Leandros',
  legalName: 'Leandros Apartments',
  street: 'Platys Gialos',
  postalCode: '840 03',
  locality: 'Platys Gialos',
  region: 'Sifnos, Cyclades',
  country: 'GR',
  countryName: 'Greece',
  /** Approximate coordinates of Platys Gialos beach, Sifnos. */
  geo: { lat: 36.9367, lng: 24.7069 },
  mte: '1026599',
  phones: {
    landline: '+302106829583',
    landlineDisplay: '+30 210 682 9583',
    mobile1: '+306977906409',
    mobile1Display: '+30 6977 906 409',
    mobile2: '+306983678087',
    mobile2Display: '+30 6983 678 087',
  },
  /** WhatsApp uses the mobile number without punctuation. */
  whatsapp: '306977906409',
  email: '',
  geoUrl: 'https://www.google.com/maps?q=Leandros+Apartments,+Platys+Gialos,+Sifnos,+Greece',
  mapEmbed:
    'https://www.google.com/maps?q=Leandros%20Apartments%2C%20Platys%20Gialos%2C%20Sifnos%2C%20Greece&z=15&output=embed',
  priceRange: '€60–€135',
  checkIn: '14:00',
  checkOut: '12:00',
  founded: '2026',
} as const;

export const siteUrl = 'https://leandros-apartments.web.app';

/** Prices in EUR per night, from the property's published rate card. */
export const rates = [
  { slug: 'maisonette', range: '€60–€120' },
  { slug: 'family-apartment', range: '€65–€135' },
  { slug: 'balcony-apartment', range: '€60–€120' },
] as const;

export const unitOrder = ['maisonette', 'family-apartment', 'balcony-apartment'] as const;
