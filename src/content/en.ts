import type { SiteContent } from './types';

/**
 * English (en-GB) — the reference edition.
 * Voice: understated, concrete, sensory. No exclamation marks, no stock
 * hospitality adjectives ("dreamy", "paradise"), no promises the house cannot keep.
 */
export const en: SiteContent = {
  locale: 'en',
  htmlLang: 'en-GB',
  ogLocale: 'en_GB',

  meta: {
    home: {
      title: 'Leandros Apartments — beachfront apartments in Platys Gialos, Sifnos',
      description:
        'Three whitewashed, family-run apartments directly on Platys Gialos beach in Sifnos. A stone courtyard, sea views and the Aegean a few steps from your door. From €60 a night.',
    },
    apartments: {
      title: 'The apartments — Leandros Apartments, Sifnos',
      description:
        'A maisonette, a family apartment for up to six and a balcony apartment, all on the sand at Platys Gialos, Sifnos. Air conditioning, Wi-Fi and fully equipped kitchens.',
    },
    location: {
      title: 'Platys Gialos & Sifnos — Leandros Apartments',
      description:
        'On the long Blue Flag beach of Platys Gialos: 30 m from the bus stop and free parking, 10 km from Apollonia and 15 km from the port of Kamares.',
    },
    rates: {
      title: 'Rates & booking — Leandros Apartments, Sifnos',
      description:
        'Nightly rates from €60 to €135 depending on season and party size. Special prices in May, June, September and October. Deposit, payment and cancellation terms.',
    },
    contact: {
      title: 'Contact — Leandros Apartments, Platys Gialos, Sifnos',
      description:
        'Telephone, WhatsApp and enquiry form for Leandros Apartments in Platys Gialos, Sifnos. Every request is answered personally.',
    },
    privacy: {
      title: 'Privacy — Leandros Apartments',
      description: 'How Leandros Apartments handles the personal data you send through this website.',
    },
    notFound: {
      title: 'Page not found — Leandros Apartments',
      description: 'The page you were looking for does not exist.',
    },
  },

  brand: {
    name: 'Leandros',
    suffix: 'Apartments',
    place: 'Platys Gialos · Sifnos',
    tagline: 'Beachfront apartments on the island of Sifnos',
  },

  nav: {
    home: 'Home',
    apartments: 'The apartments',
    location: 'Location',
    rates: 'Rates & booking',
    contact: 'Contact',
  },

  actions: {
    book: 'Check availability',
    viewApartments: 'See the apartments',
    viewAll: 'All three apartments',
    details: 'View apartment',
    readMore: 'Read more',
    backHome: 'Back to the house',
    call: 'Call',
    whatsapp: 'WhatsApp',
    email: 'Email',
    seeLocation: 'Explore Platys Gialos',
    seeRates: 'Rates & availability',
    askOffers: 'Ask about offers',
    sendEnquiry: 'Send enquiry',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    gallery: 'Gallery',
    viewGallery: 'View the gallery',
    next: 'Next',
    previous: 'Previous',
    close: 'Close',
    loading: 'Loading',
  },

  common: {
    from: 'from',
    perNight: 'night',
    sleeps: 'Sleeps',
    guests: 'guests',
    upTo: 'up to',
    included: 'Included',
    goodToKnow: 'Good to know',
    translated: 'Translated from the original review',
    more: 'More',
    allApartments: 'All apartments',
    otherApartments: 'The other apartments',
    photo: 'Photo',
    photos: 'Photos',
  },

  home: {
    hero: {
      eyebrow: 'Platys Gialos · Sifnos · Cyclades',
      title: [{ text: 'The sea,' }, { text: 'at the end of' }, { text: 'the courtyard.', italic: true }],
      subtitle:
        'Three family-run apartments on the sand at Platys Gialos — whitewashed rooms, a stone courtyard, and the Aegean a few steps from your door.',
      primary: 'Check availability',
      secondary: 'See the apartments',
      badge: 'Blue Flag beach',
      imageCaption: 'The house, from the beach road',
      insetCaption: 'The courtyard & pergola',
    },
    facts: [
      { value: '0 m', label: 'to the sand' },
      { value: '30 m', label: 'bus stop & free parking' },
      { value: '10 km', label: 'to Apollonia' },
    ],
    intro: {
      eyebrow: 'The house',
      title: 'A small house with a long horizon.',
      paragraphs: [
        'Leandros is not a hotel. It is a whitewashed house at the quiet end of Platys Gialos, with three apartments, a paved courtyard and a garden that opens straight onto the beach. There is no lobby and no timetable — only the shade of the pergola, the smell of thyme, and the sea, always in sight.',
        'Mornings begin with a swim and end with a slow dinner under the pergola. The tavernas of Platys Gialos are a barefoot walk along the sand, and the rest of Sifnos — its villages, its paths, its potters — is a short drive or bus ride away.',
      ],
      signoff: 'Platys Gialos, Sifnos',
      imageCaption: 'The courtyard, looking through to the beach',
    },
    apartments: {
      eyebrow: 'The apartments',
      title: 'Three ways to wake up by the sea.',
      intro:
        'Each apartment has its own entrance, opens onto the courtyard and the beach, and comes with a fully equipped kitchen, air conditioning and Wi-Fi.',
    },
    courtyard: {
      eyebrow: 'The courtyard',
      title: 'Long lunches, stone benches, and a threshing floor.',
      paragraphs: [
        'The heart of the house is outside: a paved yard with stone tables and built benches, a garden, and an old threshing floor that now holds sunbeds and shade.',
        'Walk through the gate and your feet are in the sand. An outdoor shower waits for the way back, and the sunbeds are a few steps from the water’s edge.',
      ],
      list: [
        'Stone tables and built benches',
        'Garden, pergola and threshing floor',
        'Direct access to the beach',
        'Sunbeds by the sea',
        'Outdoor shower',
        'Baby cot and high chair',
        'Air conditioning in every room',
        'Free Wi-Fi',
        'Fully equipped kitchens',
        'Linen changed every three days',
      ],
      imageCaption: 'The paved yard, the garden and the sea',
    },
    band: {
      quote: 'You will not need shoes until dinner.',
      caption: 'Platys Gialos, looking east',
    },
    location: {
      eyebrow: 'The place',
      title: 'Platys Gialos: the long, sheltered beach of Sifnos.',
      paragraphs: [
        'Leandros stands on the sand at Platys Gialos, the best-known beach of Sifnos — a long curve of golden sand with a Blue Flag, shallow water, and tavernas and cafés a few steps away.',
        'The bus stop and the free municipal car park are 30 metres from the gate. Apollonia, the island’s capital, is 10 km away; the port of Kamares, 15 km.',
      ],
      distances: [
        { label: 'The beach', value: 'at the gate' },
        { label: 'Tavernas & cafés', value: 'along the sand' },
        { label: 'Bus stop & parking', value: '30 m' },
        { label: 'Apollonia', value: '10 km' },
        { label: 'Port of Kamares', value: '15 km' },
      ],
      cta: 'Explore the island',
    },
    reviews: {
      eyebrow: 'Guests',
      title: 'What people remember.',
      note: 'Translated from the original review',
    },
    offers: {
      eyebrow: 'Offers',
      title: 'May, June, September & October.',
      body: 'Shoulder-season stays come with special prices. Tell us the dates you have in mind and we will send our best offer for that period.',
      cta: 'Ask about offers',
    },
    closing: {
      eyebrow: 'Reservations',
      title: 'The sea is already here. Shall we keep a week for you?',
      body: 'Write to us in English, Greek or French. Every request is answered personally.',
      primary: 'Check availability',
      secondary: 'Call us',
    },
  },

  units: [
    {
      slug: 'maisonette',
      number: 'No. 1',
      name: 'The Maisonette',
      tagline: 'Two floors, two bathrooms, one long view of the sea.',
      intro:
        'A double-storey apartment with the living space on the ground floor and a private bedroom above. It is the quietest corner of the house, with a balcony that catches the morning light and a view straight down the beach.',
      sleeps: '4',
      fromPrice: '60',
      layout: [
        { label: 'Ground floor', value: 'Open-plan kitchen and dining area, bathroom.' },
        { label: 'Upper floor', value: 'Bedroom with a second bathroom.' },
        { label: 'Outside', value: 'Balcony, pergola, stone table and bench.' },
        { label: 'Access', value: 'Direct to the courtyard and the beach.' },
      ],
      beds: [
        'Bedroom upstairs: two single beds',
        'Living area: two single beds',
        'En-suite bathroom on the upper floor',
      ],
      features: [
        'Air conditioning',
        'LCD television',
        'Free Wi-Fi',
        'Fully equipped kitchen',
        'Sea view and balcony',
        'Linen changed every three days',
      ],
    },
    {
      slug: 'family-apartment',
      number: 'No. 2',
      name: 'The Family Apartment',
      tagline: 'Two bedrooms and room for six, a few steps from the water.',
      intro:
        'The largest of the three, with two separate bedrooms and a generous open-plan kitchen and dining room. Made for two families travelling together, or for grandparents who want the children close.',
      sleeps: '4–6',
      fromPrice: '65',
      layout: [
        { label: 'Bedrooms', value: 'Two separate bedrooms.' },
        { label: 'Living', value: 'Open-plan kitchen and dining area, bathroom.' },
        { label: 'Outside', value: 'Pergola, stone table and built bench.' },
        { label: 'Access', value: 'Direct to the courtyard and the beach.' },
      ],
      beds: ['Bedroom one: double bed', 'Bedroom two: two single beds', 'Living area: two single beds'],
      features: [
        'Air conditioning',
        'LCD television',
        'Free Wi-Fi',
        'Fully equipped kitchen',
        'Room for six guests',
        'Linen changed every three days',
      ],
    },
    {
      slug: 'balcony-apartment',
      number: 'No. 3',
      name: 'The Balcony Apartment',
      tagline: 'A private balcony above the courtyard, with the beach beyond.',
      intro:
        'A first-floor apartment with its own balcony over the courtyard — the best seat in the house at sunset. One bedroom, an open-plan kitchen and dining room, and the beach a few steps away.',
      sleeps: '4',
      fromPrice: '60',
      layout: [
        { label: 'Bedroom', value: 'One bedroom with two single beds.' },
        { label: 'Living', value: 'Open-plan kitchen and dining area, bathroom.' },
        { label: 'Outside', value: 'Private balcony, stone table and bench.' },
        { label: 'Access', value: 'Direct to the courtyard and the beach.' },
      ],
      beds: ['Bedroom: two single beds', 'Living area: two single beds'],
      features: [
        'Air conditioning',
        'LCD television',
        'Free Wi-Fi',
        'Fully equipped kitchen',
        'Private balcony and sea view',
        'Linen changed every three days',
      ],
    },
  ],

  apartmentsPage: {
    eyebrow: 'Stay',
    title: 'Choose your corner of the house.',
    intro:
      'Three apartments share the courtyard and the beach. Each has its own entrance, a fully equipped kitchen, air conditioning and Wi-Fi; linen and towels are changed every three days.',
    outro: 'Not sure which one suits you? Tell us who is travelling and we will suggest the right apartment.',
    specsTitle: 'The layout',
    bedsTitle: 'Where you sleep',
    featuresTitle: 'In every apartment',
    galleryTitle: 'Inside the apartment',
  },

  locationPage: {
    eyebrow: 'The island',
    title: 'An island of potters, paths and long beaches.',
    intro:
      'Sifnos is the quiet one: a Cycladic island of white villages, stone paths and more than seventy beaches, known across Greece for its food and its ceramics. It rewards slow travel.',
    sections: [
      {
        id: 'beach',
        eyebrow: 'The beach',
        title: 'Platys Gialos, step by step.',
        paragraphs: [
          'Platys Gialos is the longest and best-known beach on Sifnos, and it has held the Blue Flag for years. The sand is fine and golden, the water shallow and calm, and the beach is organised without being crowded: sunbeds, umbrellas, a lifeguard in season, and tavernas that serve lunch with your feet in the sand.',
          'The village behind the beach has mini markets, a bakery, cafés and a handful of shops selling the island’s pottery. Everything you need for a week is within a short walk.',
        ],
      },
      {
        id: 'getting-here',
        eyebrow: 'Getting here',
        title: 'Two boats and a short drive.',
        paragraphs: [
          'Sifnos has no airport. You arrive by sea: frequent ferries and high-speed catamarans run from Piraeus (roughly two and a half to four hours, depending on the vessel), and there are connections from Milos, Serifos, Folegandros and Santorini in season.',
          'The port is Kamares, 15 km from the house. Take a taxi or the local bus to Platys Gialos; by car the drive is about twenty minutes. The bus stop is 30 metres from the gate, and summer services run until about 00:30.',
        ],
      },
      {
        id: 'island',
        eyebrow: 'The island',
        title: 'What to do in Sifnos.',
        paragraphs: [
          'Apollonia and Artemonas, the island’s capital, are 10 km inland: whitewashed alleys, small bars, excellent restaurants and the best people-watching in the Cyclades. Kastro, the medieval village on the east coast, is worth a whole afternoon, and the monastery of Chrysopigi is the island’s most photographed sight.',
          'Vathi and Faros are two more beaches worth the drive. Hikers can follow the old stone paths between villages — and anyone who likes their lunch earned should climb to the chapel of Panagia Vouno above Platys Gialos.',
          'At the table, order revithada (chickpeas baked overnight), mastelo (lamb with wine and dill) and anything with the island’s capers. The pottery here is made to be used, not just admired.',
        ],
      },
      {
        id: 'practical',
        eyebrow: 'Practical',
        title: 'Small things worth knowing.',
        paragraphs: [
          'There are ATMs, pharmacies and larger supermarkets in Apollonia; cash is still useful in the village. Cars and scooters can be rented in Apollonia or at the port, and in high season it is worth booking ahead.',
          'The courtyard is shared by three apartments, so we ask guests to keep it peaceful after midnight.',
        ],
      },
    ],
    distancesTitle: 'From the gate',
    distances: [
      { label: 'The beach', value: '0 m' },
      { label: 'Tavernas & cafés', value: 'along the sand' },
      { label: 'Bus stop & free parking', value: '30 m' },
      { label: 'Apollonia', value: '10 km' },
      { label: 'Port of Kamares', value: '15 km' },
      { label: 'Nearest airport', value: 'Athens or Milos, then ferry' },
    ],
    mapTitle: 'Where you will be',
    mapNote: 'The map loads from OpenStreetMap only when you choose to open it.',
    mapCta: 'Open the map',
    cta: 'See rates & availability',
  },

  ratesPage: {
    eyebrow: 'Rates',
    title: 'Honest prices, quoted for your dates.',
    intro:
      'Nightly rates depend on the season, the length of your stay and the number of guests. The ranges below are a guide; write to us and we will send an exact quote for your dates.',
    tableTitle: 'Nightly rates',
    tableNote:
      'Rates are per apartment, per night, for the number of guests shown. They include linen, towels, air conditioning, Wi-Fi and the use of the courtyard and sunbeds.',
    priceHeader: 'Per night',
    guestsHeader: 'Guests',
    apartmentHeader: 'Apartment',
    includedTitle: 'Included in every stay',
    included: [
      'Bed linen and towels, changed every three days',
      'Air conditioning and LCD television',
      'Free Wi-Fi throughout',
      'Fully equipped kitchen',
      'Sunbeds by the sea and outdoor shower',
      'Baby cot and high chair on request',
      'Use of the courtyard, garden and threshing floor',
    ],
    offersTitle: 'Shoulder-season prices',
    offersBody:
      'Special prices apply to reservations in May, June, September and October. They vary by apartment and length of stay, so ask us about the period you have in mind.',
    offersNote: 'The best value is usually a week in early June or late September.',
    paymentTitle: 'Booking & payment',
    paymentBody: [
      'Send us a request with your dates and the number of guests. We will reply with availability and the total price, including any offer for your period.',
      'A reservation is confirmed once the advance payment has been received in the Leandros Apartments bank account. Payment by IRIS online transfer is also accepted.',
      'The balance is settled on arrival.',
    ],
    cancellationTitle: 'Cancellation policy',
    cancellation: [
      'Notice at least 21 days before arrival: the deposit is refunded in full.',
      'Notice up to 10 days before arrival: 50% of the deposit is refunded.',
      'Notice less than 10 days before arrival, or no-show: the deposit is not refundable.',
      'Early departure: 50% of the remaining booking is charged.',
      'Where a refund is due, transaction costs are deducted.',
    ],
    checkTitle: 'Check-in & check-out',
    checkBody:
      'Check-out is by 12:00. A later stay until 18:00 is charged at half the nightly rate; after 18:00, a full night is charged.',
    faqTitle: 'Questions guests ask',
    faq: [
      {
        question: 'Is the beach really in front of the house?',
        answer:
          'Yes. The courtyard opens directly onto the sand at Platys Gialos; there is no road to cross. Sunbeds are set out by the sea for guests.',
      },
      {
        question: 'How do we get there from Athens?',
        answer:
          'Take a ferry or high-speed catamaran from Piraeus to Kamares, then a taxi (about twenty minutes) or the bus to Platys Gialos. The crossing takes roughly two and a half to four hours.',
      },
      {
        question: 'Do the apartments have sea views?',
        answer:
          'All three open towards the beach and the courtyard. The maisonette and the balcony apartment each have their own balcony facing the water.',
      },
      {
        question: 'Is it suitable for families with small children?',
        answer:
          'Yes. Two apartments sleep up to four and the family apartment up to six. A baby cot and high chair are available on request, and the water at Platys Gialos is shallow and calm.',
      },
      {
        question: 'Where can we park?',
        answer: 'The free municipal car park is 30 metres from the gate, beside the bus stop.',
      },
      {
        question: 'When is the best time to come?',
        answer:
          'May, June, September and October are quieter and carry our best prices, with warm sea and open tavernas. July and August are the busiest months.',
      },
      {
        question: 'Do you speak English or French?',
        answer: 'We answer enquiries in Greek, English and French.',
      },
    ],
    cta: 'Request your dates',
  },

  contactPage: {
    eyebrow: 'Contact',
    title: 'Tell us your dates. We will do the rest.',
    intro:
      'Send us a message with the apartment you like, your arrival and departure dates, and who is travelling. We will reply with availability and an exact price.',
    phoneTitle: 'By telephone',
    phoneNote: 'The quickest way to reach us, from morning until late evening.',
    whatsappTitle: 'On WhatsApp',
    whatsappBody: 'Send a message and we will reply as soon as we can — often within the hour.',
    formTitle: 'Send an enquiry',
    formNote: 'Fields marked * are required. We use your details only to answer your request.',
    response: 'Every request is read and answered personally, in Greek, English or French.',
    addressTitle: 'The house',
    directionsTitle: 'Finding us',
    directions: [
      'Ferry to Kamares port, then 15 km by taxi or bus.',
      'By bus: Platys Gialos stop, 30 m from the gate.',
      'By car: free municipal parking 30 m away.',
      'On foot: follow the beach road; the house is on the sand.',
    ],
    mapTitle: 'Platys Gialos, Sifnos',
    mapNote: 'The map loads from OpenStreetMap only when you choose to open it.',
    mapCta: 'Open in Google Maps',
  },

  form: {
    apartment: 'Apartment',
    anyApartment: 'No preference',
    arrival: 'Arrival',
    departure: 'Departure',
    adults: 'Adults',
    children: 'Children',
    childrenNone: 'None',
    name: 'Your name',
    email: 'Email',
    phone: 'Telephone',
    message: 'Message',
    messagePlaceholder: 'Anything we should know — a cot, a late arrival, a longer stay…',
    consent: 'I agree that my details may be used to answer this enquiry.',
    consentLink: 'Privacy policy',
    submit: 'Send enquiry',
    submitting: 'Sending…',
    required: 'Please fill in this field.',
    invalidEmail: 'Please check your email address.',
    invalidDates: 'Please choose both dates.',
    invalidDateOrder: 'Departure must be after arrival.',
    successTitle: 'Thank you — your request is with us.',
    successBody:
      'We will reply to your email with availability and a price, usually within a day. If it is urgent, call or message us on WhatsApp.',
    successWhatsapp: 'Message us on WhatsApp',
    errorTitle: 'That did not go through.',
    errorBody:
      'Something went wrong while sending your request. Send it directly by WhatsApp or email instead — we will answer just as quickly.',
    errorWhatsapp: 'Send on WhatsApp',
    orWrite: 'Prefer to write directly?',
    optional: 'optional',
  },

  reviews: [
    {
      quote:
        'The location is perfect. Real holidays, right beside the sea: whenever we felt like it, we walked down for a swim. No distance, no carrying things — just swimsuits. In the evenings we had our drinks in the beautiful paved courtyard while the children played.',
      author: 'Mania Papadopoulou',
      origin: 'Kavala, Greece',
    },
    {
      quote:
        'An excellent place. Very cared for and clean, with warm hospitality — the family looks after their guests with real attention. I recommend it without hesitation.',
      author: 'Kalliopi N.',
      origin: 'Athens, Greece',
    },
    {
      quote:
        'Excellent accommodation! We had the best stay in your apartments. Thank you — next year we are coming back.',
      author: 'Mark John',
      origin: 'Austria',
    },
    {
      quote:
        'Wonderful apartments — exactly what you want for a holiday with children. We leave with the best memories. You are such warm people that we will be glad to stay in touch over the winter.',
      author: 'Mary S.',
      origin: 'Patras, Greece',
    },
    {
      quote:
        'Everything was faultless. Very clean apartments with every comfort, and staff who are helpful and always discreet. Thank you — keep it up.',
      author: 'George Stavropoulos',
      origin: 'Lamia, Greece',
    },
    {
      quote:
        'We are back in Paris, which means the holidays are over… As every year, we were touched by your welcome, and grateful for all the gifts and kindnesses. We start the new season with our batteries fully charged, thanks to the energy of Sifnos.',
      author: 'Florence C.',
      origin: 'France',
    },
    {
      quote: 'Definitely would go back — couldn’t fault it, everything perfect. Thank you!',
      author: 'George T.',
      origin: 'United Kingdom',
    },
  ],

  footer: {
    tagline: 'Three apartments on the sand at Platys Gialos, Sifnos.',
    addressTitle: 'Find us',
    address: ['Leandros Apartments', 'Platys Gialos 840 03', 'Sifnos, Cyclades, Greece'],
    contactTitle: 'Contact',
    phones: ['+30 210 682 9583', '+30 6977 906 409', '+30 6983 678 087'],
    navigateTitle: 'Navigate',
    legalTitle: 'Information',
    privacy: 'Privacy policy',
    mteLabel: 'M.H.T.E. registration',
    mte: '1026599',
    rights: '© 2026 Leandros Apartments. All rights reserved.',
    photography: 'Photography from the Leandros archive.',
    backToTop: 'Back to top',
  },

  privacyPage: {
    eyebrow: 'Privacy',
    title: 'Your data, simply handled.',
    updated: 'Last updated: October 2026',
    intro:
      'This website belongs to Leandros Apartments in Platys Gialos, Sifnos. This page explains, in plain language, what happens to the information you send us.',
    sections: [
      {
        title: 'What we collect',
        paragraphs: [
          'When you send an enquiry we receive the name, email address, telephone number, dates and message you choose to give us. We never ask for payment details through this site.',
          'We do not use advertising cookies. If analytics are enabled, it is only after you accept them, and they record anonymous statistics about the pages visited.',
        ],
      },
      {
        title: 'Why we use it',
        paragraphs: [
          'Your details are used only to answer your enquiry and, if you book, to manage your stay. The legal basis is our legitimate interest in responding to you and, where a booking follows, the performance of our agreement.',
        ],
      },
      {
        title: 'Who sees it',
        paragraphs: [
          'Enquiries are stored with Google Firebase, which acts as our hosting and database provider, and are read by the family who runs the apartments. We never sell your data or share it for marketing.',
        ],
      },
      {
        title: 'How long we keep it',
        paragraphs: [
          'Enquiry correspondence is kept for up to two years, or for as long as tax and accounting rules require after a stay.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'You can ask to see, correct or delete the information we hold about you, or object to its use. Write to us at the details below and we will respond within one month. You may also complain to the Hellenic Data Protection Authority (dpa.gr).',
        ],
      },
      {
        title: 'Cookies and preferences',
        paragraphs: [
          'This site needs no cookies to work. A small preference is stored in your browser to remember your chosen language. Analytics cookies are optional and refusing them does not affect the site.',
        ],
      },
    ],
    contactTitle: 'Questions about privacy',
    contactBody:
      'Write to Leandros Apartments, Platys Gialos 840 03, Sifnos, Greece, or call +30 210 682 9583.',
  },

  notFound: {
    eyebrow: '404',
    title: 'This page has drifted out to sea.',
    body: 'The page you were looking for does not exist — but the beach is still where you left it.',
    cta: 'Back to the house',
  },
};
