/**
 * Content model for the Leandros Apartments website.
 *
 * Every locale exports an object that satisfies `SiteContent`. Because all
 * fields are required, TypeScript guarantees that the English, Greek and
 * French versions stay structurally identical — no missing sections can ship.
 */

export type Locale = 'en' | 'el' | 'fr';

export interface TitleLine {
  text: string;
  italic?: boolean;
}

export interface Meta {
  title: string;
  description: string;
}

export interface Fact {
  value: string;
  label: string;
}

export interface Distance {
  label: string;
  value: string;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface ApartmentUnit {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  intro: string;
  sleeps: string;
  fromPrice: string;
  layout: SpecRow[];
  beds: string[];
  features: string[];
}

export interface Review {
  quote: string;
  author: string;
  origin: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  locale: Locale;
  /** BCP 47 tag used on <html lang>. */
  htmlLang: string;
  /** Open Graph locale, e.g. en_GB. */
  ogLocale: string;

  meta: {
    home: Meta;
    apartments: Meta;
    location: Meta;
    rates: Meta;
    contact: Meta;
    privacy: Meta;
    notFound: Meta;
  };

  brand: {
    name: string;
    suffix: string;
    place: string;
    tagline: string;
  };

  nav: {
    home: string;
    apartments: string;
    location: string;
    rates: string;
    contact: string;
  };

  actions: {
    book: string;
    viewApartments: string;
    viewAll: string;
    details: string;
    readMore: string;
    backHome: string;
    call: string;
    whatsapp: string;
    email: string;
    seeLocation: string;
    seeRates: string;
    askOffers: string;
    sendEnquiry: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    gallery: string;
    viewGallery: string;
    next: string;
    previous: string;
    close: string;
    loading: string;
  };

  common: {
    from: string;
    perNight: string;
    sleeps: string;
    guests: string;
    upTo: string;
    included: string;
    goodToKnow: string;
    translated: string;
    more: string;
    allApartments: string;
    otherApartments: string;
    photo: string;
    photos: string;
    directions: string;
    reviewsOnGoogle: string;
    mapAlt: string;
  };

  home: {
    hero: {
      eyebrow: string;
      title: TitleLine[];
      subtitle: string;
      primary: string;
      secondary: string;
      badge: string;
      imageCaption: string;
      insetCaption: string;
    };
    facts: Fact[];
    intro: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      signoff: string;
      imageCaption: string;
    };
    apartments: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    courtyard: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      list: string[];
      imageCaption: string;
    };
    band: {
      quote: string;
      caption: string;
    };
    location: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      distances: Distance[];
      cta: string;
    };
    reviews: {
      eyebrow: string;
      title: string;
      note: string;
    };
    offers: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
    };
    closing: {
      eyebrow: string;
      title: string;
      body: string;
      primary: string;
      secondary: string;
    };
  };

  units: ApartmentUnit[];

  apartmentsPage: {
    eyebrow: string;
    title: string;
    intro: string;
    meta: string;
    outro: string;
    specsTitle: string;
    bedsTitle: string;
    featuresTitle: string;
    galleryTitle: string;
  };

  locationPage: {
    eyebrow: string;
    title: string;
    intro: string;
    sections: {
      id: string;
      eyebrow: string;
      title: string;
      paragraphs: string[];
    }[];
    distancesTitle: string;
    distances: Distance[];
    mapTitle: string;
    mapNote: string;
    mapCta: string;
    cta: string;
  };

  ratesPage: {
    eyebrow: string;
    title: string;
    intro: string;
    tableTitle: string;
    tableNote: string;
    priceHeader: string;
    guestsHeader: string;
    apartmentHeader: string;
    includedTitle: string;
    included: string[];
    offersTitle: string;
    offersBody: string;
    offersNote: string;
    paymentTitle: string;
    paymentBody: string[];
    cancellationTitle: string;
    cancellation: string[];
    checkTitle: string;
    checkBody: string;
    faqTitle: string;
    faq: FaqItem[];
    cta: string;
  };

  contactPage: {
    eyebrow: string;
    title: string;
    intro: string;
    phoneTitle: string;
    phoneNote: string;
    whatsappTitle: string;
    whatsappBody: string;
    formTitle: string;
    formNote: string;
    response: string;
    addressTitle: string;
    directionsTitle: string;
    directions: string[];
    mapTitle: string;
    mapNote: string;
    mapCta: string;
  };

  form: {
    apartment: string;
    anyApartment: string;
    arrival: string;
    departure: string;
    adults: string;
    children: string;
    childrenNone: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    messagePlaceholder: string;
    consent: string;
    consentLink: string;
    submit: string;
    submitting: string;
    required: string;
    invalidEmail: string;
    invalidDates: string;
    invalidDateOrder: string;
    successTitle: string;
    successBody: string;
    successWhatsapp: string;
    errorTitle: string;
    errorBody: string;
    errorWhatsapp: string;
    orWrite: string;
    optional: string;
  };

  reviews: Review[];

  footer: {
    tagline: string;
    addressTitle: string;
    address: string[];
    contactTitle: string;
    phones: string[];
    navigateTitle: string;
    legalTitle: string;
    privacy: string;
    mteLabel: string;
    mte: string;
    rights: string;
    photography: string;
    backToTop: string;
  };

  privacyPage: {
    eyebrow: string;
    title: string;
    updated: string;
    intro: string;
    sections: {
      title: string;
      paragraphs: string[];
    }[];
    contactTitle: string;
    contactBody: string;
  };

  notFound: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
}
