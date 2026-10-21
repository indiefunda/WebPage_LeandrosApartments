import type { SiteContent } from './types';

/**
 * Édition française (fr-FR) — traduction et adaptation de l’édition anglaise.
 * Même voix, sobre et concrète, même retenue. Pas de points d’exclamation,
 * pas d’adjectifs d’hôtellerie passe-partout, aucune promesse que la maison
 * ne peut pas tenir.
 */
export const fr: SiteContent = {
  locale: 'fr',
  htmlLang: 'fr-FR',
  ogLocale: 'fr_FR',

  meta: {
    home: {
      title: 'Appartements bord de mer à Platys Gialos, Sifnos — Leandros',
      description:
        'Location d’appartements à Sifnos, les pieds dans le sable de Platys Gialos : trois logements blanchis à la chaux, une cour de pierre, la mer à quelques pas. À partir de 60 € la nuit.',
    },
    apartments: {
      title: 'Les appartements — Leandros, Platys Gialos, Sifnos',
      description:
        'Une maisonnette, un appartement familial jusqu’à six personnes et un appartement avec balcon, sur le sable de Platys Gialos, à Sifnos. Climatisation, Wi-Fi et cuisines équipées.',
    },
    location: {
      title: 'Platys Gialos et Sifnos — Leandros',
      description:
        'Où loger à Sifnos : la longue plage de Platys Gialos, son Pavillon Bleu, l’arrêt de bus et le parking gratuit à 30 m, Apollonia à 10 km, le port de Kamares à 15 km.',
    },
    rates: {
      title: 'Tarifs et réservation — Leandros, Sifnos',
      description:
        'Des tarifs de 60 € à 135 € la nuit selon la saison et le nombre de personnes. Prix spéciaux en mai, juin, septembre et octobre. Acompte, paiement et conditions d’annulation.',
    },
    contact: {
      title: 'Contact — Leandros, Platys Gialos, Sifnos',
      description:
        'Téléphone, WhatsApp et formulaire de demande pour Leandros, à Platys Gialos, Sifnos. Chaque demande reçoit une réponse personnelle.',
    },
    privacy: {
      title: 'Confidentialité — Leandros',
      description: 'Comment Leandros traite les données personnelles que vous transmettez par ce site.',
    },
    notFound: {
      title: 'Page introuvable — Leandros',
      description: 'La page que vous cherchez n’existe pas.',
    },
  },

  brand: {
    name: 'Leandros',
    suffix: 'Appartements',
    place: 'Platys Gialos · Sifnos',
    tagline: 'Appartements bord de mer sur l’île de Sifnos',
  },

  nav: {
    home: 'Accueil',
    apartments: 'Les appartements',
    location: 'Situation',
    rates: 'Tarifs et réservation',
    contact: 'Contact',
  },

  actions: {
    book: 'Vérifier les disponibilités',
    viewApartments: 'Voir les appartements',
    viewAll: 'Les trois appartements',
    details: 'Voir l’appartement',
    readMore: 'En savoir plus',
    backHome: 'Retour à la maison',
    call: 'Appeler',
    whatsapp: 'WhatsApp',
    email: 'E-mail',
    seeLocation: 'Découvrir Platys Gialos',
    seeRates: 'Tarifs et disponibilités',
    askOffers: 'Demander nos offres',
    sendEnquiry: 'Envoyer la demande',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
    gallery: 'Galerie',
    viewGallery: 'Voir la galerie',
    next: 'Suivant',
    previous: 'Précédent',
    close: 'Fermer',
    loading: 'Chargement',
  },

  common: {
    from: 'à partir de',
    perNight: 'la nuit',
    sleeps: 'Capacité',
    guests: 'personnes',
    upTo: 'jusqu’à',
    included: 'Compris',
    goodToKnow: 'Bon à savoir',
    translated: 'Traduit de l’avis d’origine',
    more: 'Voir plus',
    allApartments: 'Tous les appartements',
    otherApartments: 'Les autres appartements',
    photo: 'Photo',
    photos: 'Photos',
  },

  home: {
    hero: {
      eyebrow: 'Platys Gialos · Sifnos · Cyclades',
      title: [{ text: 'La mer,' }, { text: 'au bout de' }, { text: 'la cour.', italic: true }],
      subtitle:
        'Trois appartements familiaux, les pieds dans le sable à Platys Gialos — des chambres blanchies à la chaux, une cour de pierre, et l’Égée à quelques pas de votre porte.',
      primary: 'Vérifier les disponibilités',
      secondary: 'Voir les appartements',
      badge: 'Plage Pavillon Bleu',
      imageCaption: 'La maison, depuis la route de la plage',
      insetCaption: 'La cour et la pergola',
    },
    facts: [
      { value: '0 m', label: 'jusqu’au sable' },
      { value: '30 m', label: 'arrêt de bus et parking gratuit' },
      { value: '10 km', label: 'jusqu’à Apollonia' },
    ],
    intro: {
      eyebrow: 'La maison',
      title: 'Une petite maison, un long horizon.',
      paragraphs: [
        'Leandros n’est pas un hôtel. C’est une maison blanche à la chaux, à l’extrémité tranquille de Platys Gialos, avec trois appartements, une cour pavée et un jardin qui s’ouvre directement sur la plage. Pas de hall, pas d’horaires — seulement l’ombre de la pergola, l’odeur du thym et la mer, toujours en vue.',
        'Les matins commencent par une baignade et finissent par un dîner sans hâte sous la pergola. Les tavernes de Platys Gialos sont à quelques pas, pieds nus sur le sable, et le reste de Sifnos — ses villages, ses sentiers, ses potiers — est à quelques minutes de voiture ou de bus.',
      ],
      signoff: 'Platys Gialos, Sifnos',
      imageCaption: 'La cour, ouverte sur la plage',
    },
    apartments: {
      eyebrow: 'Les appartements',
      title: 'Trois façons de se réveiller au bord de la mer.',
      intro:
        'Chaque appartement a son entrée et s’ouvre sur la cour et sur la plage ; il comprend une cuisine entièrement équipée, la climatisation et le Wi-Fi.',
    },
    courtyard: {
      eyebrow: 'La cour',
      title: 'De longs déjeuners, des bancs de pierre, une aire de battage.',
      paragraphs: [
        'Le cœur de la maison est dehors : une cour pavée avec des tables de pierre et des bancs maçonnés, un jardin, et une ancienne aire de battage où l’on a installé des transats et de l’ombre.',
        'Passez le portail et vos pieds sont dans le sable. Une douche extérieure vous attend au retour, et les transats sont à quelques pas du bord de l’eau.',
      ],
      list: [
        'Tables de pierre et bancs maçonnés',
        'Jardin, pergola et aire de battage',
        'Accès direct à la plage',
        'Transats au bord de la mer',
        'Douche extérieure',
        'Lit bébé et chaise haute',
        'Climatisation dans chaque pièce',
        'Wi-Fi gratuit',
        'Cuisines entièrement équipées',
        'Linge de maison changé tous les trois jours',
      ],
      imageCaption: 'La cour pavée, le jardin et la mer',
    },
    band: {
      quote: 'Vous ne remettrez pas de chaussures avant le dîner.',
      caption: 'Platys Gialos, vers l’est',
    },
    location: {
      eyebrow: 'Le lieu',
      title: 'Platys Gialos : la longue plage abritée de Sifnos.',
      paragraphs: [
        'Leandros se tient sur le sable de Platys Gialos, la plage la plus connue de Sifnos : une longue courbe de sable doré distinguée par le Pavillon Bleu, une eau peu profonde, des tavernes et des cafés à quelques pas.',
        'L’arrêt de bus et le parking municipal gratuit se trouvent à 30 mètres du portail. Apollonia, la capitale de l’île, est à 10 km ; le port de Kamares, à 15 km.',
      ],
      distances: [
        { label: 'La plage', value: 'au portail' },
        { label: 'Tavernes et cafés', value: 'le long du sable' },
        { label: 'Arrêt de bus et parking', value: '30 m' },
        { label: 'Apollonia', value: '10 km' },
        { label: 'Port de Kamares', value: '15 km' },
      ],
      cta: 'Découvrir l’île',
    },
    reviews: {
      eyebrow: 'Nos hôtes',
      title: 'Ce dont on se souvient.',
      note: 'Traduit de l’avis d’origine',
    },
    offers: {
      eyebrow: 'Offres',
      title: 'Mai, juin, septembre et octobre.',
      body: 'Les séjours hors haute saison bénéficient de tarifs spéciaux. Indiquez-nous les dates qui vous intéressent et nous vous enverrons notre meilleure offre pour cette période.',
      cta: 'Demander nos offres',
    },
    closing: {
      eyebrow: 'Réservations',
      title: 'La mer est déjà là. Nous vous gardons une semaine ?',
      body: 'Écrivez-nous en français, en anglais ou en grec. Chaque demande reçoit une réponse personnelle.',
      primary: 'Vérifier les disponibilités',
      secondary: 'Nous appeler',
    },
  },

  units: [
    {
      slug: 'maisonette',
      number: 'N° 1',
      name: 'La Maisonnette',
      tagline: 'Deux niveaux, deux salles de bain, une longue vue sur la mer.',
      intro:
        'Un appartement sur deux niveaux, avec l’espace de vie au rez-de-chaussée et une chambre privative à l’étage. C’est le coin le plus calme de la maison, avec un balcon qui capte la lumière du matin et une vue qui file le long de la plage.',
      sleeps: '4',
      fromPrice: '60',
      layout: [
        { label: 'Rez-de-chaussée', value: 'Cuisine et salle à manger ouvertes, salle de bain.' },
        { label: 'Étage', value: 'Chambre avec une seconde salle de bain.' },
        { label: 'Extérieur', value: 'Balcon, pergola, table et banc de pierre.' },
        { label: 'Accès', value: 'Direct sur la cour et la plage.' },
      ],
      beds: [
        'Chambre à l’étage : deux lits simples',
        'Séjour : deux lits simples',
        'Salle de bain attenante à l’étage',
      ],
      features: [
        'Climatisation',
        'Téléviseur LCD',
        'Wi-Fi gratuit',
        'Cuisine entièrement équipée',
        'Vue sur la mer et balcon',
        'Linge de maison changé tous les trois jours',
      ],
    },
    {
      slug: 'family-apartment',
      number: 'N° 2',
      name: 'L’Appartement familial',
      tagline: 'Deux chambres et de la place pour six, à quelques pas de l’eau.',
      intro:
        'Le plus grand des trois, avec deux chambres séparées et une belle pièce de vie ouverte réunissant cuisine et salle à manger. Pensé pour deux familles qui voyagent ensemble, ou pour des grands-parents qui aiment avoir les enfants tout près.',
      sleeps: '4–6',
      fromPrice: '65',
      layout: [
        { label: 'Chambres', value: 'Deux chambres séparées.' },
        { label: 'Séjour', value: 'Cuisine et salle à manger ouvertes, salle de bain.' },
        { label: 'Extérieur', value: 'Pergola, table de pierre et banc maçonné.' },
        { label: 'Accès', value: 'Direct sur la cour et la plage.' },
      ],
      beds: [
        'Première chambre : lit double',
        'Deuxième chambre : deux lits simples',
        'Séjour : deux lits simples',
      ],
      features: [
        'Climatisation',
        'Téléviseur LCD',
        'Wi-Fi gratuit',
        'Cuisine entièrement équipée',
        'Capacité de six personnes',
        'Linge de maison changé tous les trois jours',
      ],
    },
    {
      slug: 'balcony-apartment',
      number: 'N° 3',
      name: 'L’Appartement avec balcon',
      tagline: 'Un balcon privé au-dessus de la cour, la plage plus loin.',
      intro:
        'Un appartement au premier étage, avec son balcon privé qui surplombe la cour — la meilleure place de la maison au coucher du soleil. Une chambre, une cuisine et une salle à manger ouvertes, et la plage à quelques pas.',
      sleeps: '4',
      fromPrice: '60',
      layout: [
        { label: 'Chambre', value: 'Une chambre avec deux lits simples.' },
        { label: 'Séjour', value: 'Cuisine et salle à manger ouvertes, salle de bain.' },
        { label: 'Extérieur', value: 'Balcon privé, table et banc de pierre.' },
        { label: 'Accès', value: 'Direct sur la cour et la plage.' },
      ],
      beds: ['Chambre : deux lits simples', 'Séjour : deux lits simples'],
      features: [
        'Climatisation',
        'Téléviseur LCD',
        'Wi-Fi gratuit',
        'Cuisine entièrement équipée',
        'Balcon privé et vue sur la mer',
        'Linge de maison changé tous les trois jours',
      ],
    },
  ],

  apartmentsPage: {
    eyebrow: 'Séjour',
    title: 'Choisissez votre coin de la maison.',
    intro:
      'Trois appartements se partagent la cour et la plage. Chacun a son entrée, une cuisine entièrement équipée, la climatisation et le Wi-Fi ; le linge de lit et les serviettes sont changés tous les trois jours.',
    outro:
      'Vous hésitez encore ? Dites-nous qui voyage et nous vous indiquerons l’appartement qui vous convient.',
    specsTitle: 'L’agencement',
    bedsTitle: 'Où vous dormez',
    featuresTitle: 'Dans chaque appartement',
    galleryTitle: 'À l’intérieur de l’appartement',
  },

  locationPage: {
    eyebrow: 'L’île',
    title: 'Une île de potiers, de sentiers et de longues plages.',
    intro:
      'Sifnos est l’île tranquille : villages blancs, sentiers de pierre et plus de soixante-dix plages, une île des Cyclades réputée dans toute la Grèce pour sa table et sa céramique. Elle se découvre lentement.',
    sections: [
      {
        id: 'beach',
        eyebrow: 'La plage',
        title: 'Platys Gialos, pas à pas.',
        paragraphs: [
          'Platys Gialos est la plus longue et la plus connue des plages de Sifnos, et elle arbore le Pavillon Bleu depuis des années. Le sable est fin et doré, l’eau peu profonde et calme, et la plage est aménagée sans être envahie : transats, parasols, un maître-nageur en saison, et des tavernes qui servent le déjeuner les pieds dans le sable.',
          'Derrière la plage, le village compte des supérettes, une boulangerie, des cafés et quelques boutiques qui vendent la poterie de l’île. Tout ce qu’il faut pour une semaine se trouve à quelques minutes à pied.',
        ],
      },
      {
        id: 'getting-here',
        eyebrow: 'Venir',
        title: 'Deux bateaux, puis un peu de route.',
        paragraphs: [
          'Sifnos n’a pas d’aéroport. On arrive par la mer : des ferries réguliers et des catamarans rapides partent du Pirée (environ deux heures et demie à quatre heures, selon le navire), et, en saison, des liaisons depuis Milos, Sérifos, Folégandros et Santorin.',
          'Le port est celui de Kamares, à 15 km de la maison. Prenez un taxi ou le bus local jusqu’à Platys Gialos ; en voiture, comptez une vingtaine de minutes. L’arrêt de bus est à 30 mètres du portail, et les liaisons d’été circulent jusqu’à environ 00:30.',
        ],
      },
      {
        id: 'island',
        eyebrow: 'L’île',
        title: 'Que faire à Sifnos.',
        paragraphs: [
          'Apollonia et Artémonas, la capitale de l’île, sont à 10 km dans les terres : ruelles chaulées, petits bars, excellentes tables et le meilleur poste d’observation des Cyclades. Kastro, le village médiéval de la côte est, mérite une après-midi entière, et le monastère de Chrysopigi est le site le plus photographié de l’île.',
          'Vathi et Faros sont deux autres plages qui valent le détour. Les marcheurs peuvent suivre les anciens sentiers de pierre entre les villages — et qui aime mériter son déjeuner montera jusqu’à la chapelle de Panagia Vouno, au-dessus de Platys Gialos.',
          'À table, demandez la revithada (pois chiches cuits toute une nuit), le mastelo (agneau au vin et à l’aneth) et tout ce qui contient des câpres de l’île. Ici, la poterie est faite pour servir, pas seulement pour être admirée.',
        ],
      },
      {
        id: 'practical',
        eyebrow: 'Pratique',
        title: 'Quelques détails à savoir.',
        paragraphs: [
          'Apollonia compte des distributeurs automatiques, des pharmacies et des supermarchés plus grands ; les espèces restent utiles au village. On peut louer voitures et scooters à Apollonia ou au port, et en haute saison mieux vaut réserver à l’avance.',
          'La cour est partagée par trois appartements : nous demandons à nos hôtes d’y rester discrets après minuit.',
        ],
      },
    ],
    distancesTitle: 'Depuis le portail',
    distances: [
      { label: 'La plage', value: '0 m' },
      { label: 'Tavernes et cafés', value: 'le long du sable' },
      { label: 'Arrêt de bus et parking gratuit', value: '30 m' },
      { label: 'Apollonia', value: '10 km' },
      { label: 'Port de Kamares', value: '15 km' },
      { label: 'Aéroport le plus proche', value: 'Athènes ou Milos, puis ferry' },
    ],
    mapTitle: 'Là où vous serez',
    mapNote: 'La carte ne se charge depuis OpenStreetMap que si vous choisissez de l’ouvrir.',
    mapCta: 'Ouvrir la carte',
    cta: 'Voir les tarifs et les disponibilités',
  },

  ratesPage: {
    eyebrow: 'Tarifs',
    title: 'Des prix justes, établis pour vos dates.',
    intro:
      'Le tarif à la nuit dépend de la saison, de la durée du séjour et du nombre de personnes. Les fourchettes ci-dessous sont indicatives : écrivez-nous et nous vous enverrons un devis exact pour vos dates.',
    tableTitle: 'Tarifs à la nuit',
    tableNote:
      'Tarifs par appartement et par nuit, pour le nombre de personnes indiqué. Ils comprennent le linge de lit, les serviettes, la climatisation, le Wi-Fi ainsi que l’accès à la cour et aux transats.',
    priceHeader: 'Par nuit',
    guestsHeader: 'Personnes',
    apartmentHeader: 'Appartement',
    includedTitle: 'Compris dans chaque séjour',
    included: [
      'Linge de lit et serviettes, changés tous les trois jours',
      'Climatisation et téléviseur LCD',
      'Wi-Fi gratuit dans toute la maison',
      'Cuisine entièrement équipée',
      'Transats au bord de la mer et douche extérieure',
      'Lit bébé et chaise haute sur demande',
      'Accès à la cour, au jardin et à l’aire de battage',
    ],
    offersTitle: 'Tarifs d’intersaison',
    offersBody:
      'Des tarifs spéciaux s’appliquent aux réservations de mai, juin, septembre et octobre. Ils varient selon l’appartement et la durée du séjour : interrogez-nous sur la période qui vous intéresse.',
    offersNote:
      'Le meilleur rapport qualité-prix reste généralement une semaine début juin ou fin septembre.',
    paymentTitle: 'Réservation et paiement',
    paymentBody: [
      'Envoyez-nous une demande avec vos dates et le nombre de personnes. Nous vous répondrons avec les disponibilités et le prix total, offre éventuelle pour votre période comprise.',
      'Une réservation est confirmée dès réception de l’acompte sur le compte bancaire de Leandros Apartments. Le paiement par virement IRIS est également accepté.',
      'Le solde est réglé à l’arrivée.',
    ],
    cancellationTitle: 'Conditions d’annulation',
    cancellation: [
      'Annulation au moins 21 jours avant l’arrivée : l’acompte est remboursé intégralement.',
      'Annulation jusqu’à 10 jours avant l’arrivée : 50 % de l’acompte est remboursé.',
      'Annulation moins de 10 jours avant l’arrivée, ou non-présentation : l’acompte n’est pas remboursable.',
      'Départ anticipé : 50 % du séjour restant est facturé.',
      'En cas de remboursement, les frais de transaction sont déduits.',
    ],
    checkTitle: 'Arrivée et départ',
    checkBody:
      'Le départ se fait avant 12:00. Un départ différé jusqu’à 18:00 est facturé à la moitié du tarif de la nuit ; au-delà de 18:00, une nuit entière est facturée.',
    faqTitle: 'Les questions que l’on nous pose',
    faq: [
      {
        question: 'La plage est-elle vraiment devant la maison ?',
        answer:
          'Oui. La cour s’ouvre directement sur le sable de Platys Gialos, sans route à traverser. Des transats sont installés au bord de la mer pour nos hôtes.',
      },
      {
        question: 'Comment venir depuis Athènes ?',
        answer:
          'Prenez un ferry ou un catamaran rapide du Pirée jusqu’à Kamares, puis un taxi (une vingtaine de minutes) ou le bus jusqu’à Platys Gialos. La traversée dure environ deux heures et demie à quatre heures.',
      },
      {
        question: 'Les appartements ont-ils vue sur la mer ?',
        answer:
          'Tous les trois s’ouvrent vers la plage et la cour. La maisonnette et l’appartement avec balcon disposent chacun d’un balcon face à l’eau.',
      },
      {
        question: 'L’endroit convient-il aux familles avec de jeunes enfants ?',
        answer:
          'Oui. Deux appartements accueillent jusqu’à quatre personnes, l’appartement familial jusqu’à six. Un lit bébé et une chaise haute sont disponibles sur demande, et l’eau de Platys Gialos est peu profonde et calme.',
      },
      {
        question: 'Où peut-on se garer ?',
        answer: 'Le parking municipal gratuit se trouve à 30 mètres du portail, à côté de l’arrêt de bus.',
      },
      {
        question: 'Quelle est la meilleure période pour venir ?',
        answer:
          'Mai, juin, septembre et octobre sont plus calmes et bénéficient de nos meilleurs tarifs, avec une mer chaude et des tavernes ouvertes. Juillet et août sont les mois les plus fréquentés.',
      },
      {
        question: 'Parlez-vous français ?',
        answer: 'Nous répondons en français, en anglais et en grec.',
      },
    ],
    cta: 'Indiquez vos dates',
  },

  contactPage: {
    eyebrow: 'Contact',
    title: 'Dites-nous vos dates. Nous nous occupons du reste.',
    intro:
      'Envoyez-nous un message en précisant l’appartement qui vous plaît, vos dates d’arrivée et de départ, et les personnes qui voyagent. Nous vous répondrons avec les disponibilités et un prix exact.',
    phoneTitle: 'Par téléphone',
    phoneNote: 'Le moyen le plus direct de nous joindre, du matin jusqu’à tard le soir.',
    whatsappTitle: 'Sur WhatsApp',
    whatsappBody: 'Envoyez-nous un message : nous répondons dès que possible, souvent dans l’heure.',
    formTitle: 'Envoyer une demande',
    formNote:
      'Les champs marqués * sont obligatoires. Vos informations servent uniquement à répondre à votre demande.',
    response: 'Chaque demande est lue et traitée personnellement, en français, en anglais ou en grec.',
    addressTitle: 'La maison',
    directionsTitle: 'Nous trouver',
    directions: [
      'Ferry jusqu’au port de Kamares, puis 15 km en taxi ou en bus.',
      'En bus : arrêt Platys Gialos, à 30 m du portail.',
      'En voiture : parking municipal gratuit à 30 m.',
      'À pied : suivez la route de la plage ; la maison est sur le sable.',
    ],
    mapTitle: 'Platys Gialos, Sifnos',
    mapNote: 'La carte ne se charge depuis OpenStreetMap que si vous choisissez de l’ouvrir.',
    mapCta: 'Ouvrir dans Google Maps',
  },

  form: {
    apartment: 'Appartement',
    anyApartment: 'Sans préférence',
    arrival: 'Arrivée',
    departure: 'Départ',
    adults: 'Adultes',
    children: 'Enfants',
    childrenNone: 'Aucun',
    name: 'Votre nom',
    email: 'E-mail',
    phone: 'Téléphone',
    message: 'Message',
    messagePlaceholder:
      'Tout ce que nous devrions savoir — un lit bébé, une arrivée tardive, un séjour plus long…',
    consent: 'J’accepte que mes informations soient utilisées pour répondre à cette demande.',
    consentLink: 'Politique de confidentialité',
    submit: 'Envoyer la demande',
    submitting: 'Envoi en cours…',
    required: 'Merci de renseigner ce champ.',
    invalidEmail: 'Vérifiez votre adresse e-mail.',
    invalidDates: 'Merci de choisir les deux dates.',
    invalidDateOrder: 'La date de départ doit suivre la date d’arrivée.',
    successTitle: 'Merci — votre demande nous est parvenue.',
    successBody:
      'Nous vous répondrons par e-mail avec les disponibilités et un prix, généralement sous vingt-quatre heures. Si votre demande est urgente, appelez-nous ou écrivez-nous sur WhatsApp.',
    successWhatsapp: 'Nous écrire sur WhatsApp',
    errorTitle: 'L’envoi n’a pas abouti.',
    errorBody:
      'Une erreur est survenue lors de l’envoi de votre demande. Passez plutôt par WhatsApp ou par e-mail : nous répondrons tout aussi vite.',
    errorWhatsapp: 'Envoyer sur WhatsApp',
    orWrite: 'Vous préférez écrire directement ?',
    optional: 'facultatif',
  },

  reviews: [
    {
      quote:
        'L’emplacement est parfait. De vraies vacances, tout près de la mer : dès que l’envie nous prenait, nous descendions nous baigner. Aucune distance, rien à porter — juste le maillot. Le soir, nous prenions l’apéritif dans la belle cour pavée pendant que les enfants jouaient.',
      author: 'Mania Papadopoulou',
      origin: 'Kavala, Grèce',
    },
    {
      quote:
        'Un endroit excellent. Très soigné et propre, avec une hospitalité chaleureuse — la famille s’occupe de ses hôtes avec une véritable attention. Je le recommande sans hésiter.',
      author: 'Kalliopi N.',
      origin: 'Athènes, Grèce',
    },
    {
      quote:
        'Un excellent hébergement ! Nous avons passé le meilleur séjour dans vos appartements. Merci — l’an prochain, nous revenons.',
      author: 'Mark John',
      origin: 'Autriche',
    },
    {
      quote:
        'Des appartements magnifiques — exactement ce que l’on cherche pour des vacances avec des enfants. Nous partons avec les meilleurs souvenirs. Vous êtes des gens si chaleureux que nous serons heureux de garder le contact pendant l’hiver.',
      author: 'Mary S.',
      origin: 'Patras, Grèce',
    },
    {
      quote:
        'Tout était parfait. Des appartements très propres et tout confort, avec un personnel serviable et toujours discret. Merci — continuez ainsi.',
      author: 'George Stavropoulos',
      origin: 'Lamia, Grèce',
    },
    {
      quote:
        'Ça y est, nous sommes rentrés à Paris, ce qui signifie la fin des vacances… Nous reprenons le travail dès lundi et les enfants reprennent l’école mardi. Nous avons bien profité des joies de Sifnos avec beaucoup de belles ballades cette année que nous n’avons jamais faites auparavant. Comme chaque année nous avons été extrêmement sensibles à votre accueil et vous remercions pour tous les cadeaux et attentions. Nous attaquons donc cette rentrée avec les batteries chargées à bloc, grâce à l’énergie de Sifnos !',
      author: 'Florence C.',
      origin: 'France',
    },
    {
      quote: 'Nous y retournerions sans hésiter — rien à redire, tout était parfait. Merci !',
      author: 'George T.',
      origin: 'Royaume-Uni',
    },
  ],

  footer: {
    tagline: 'Trois appartements les pieds dans le sable à Platys Gialos, Sifnos.',
    addressTitle: 'Nous trouver',
    address: ['Leandros Apartments', 'Platys Gialos 840 03', 'Sifnos, Cyclades, Grèce'],
    contactTitle: 'Contact',
    phones: ['+30 210 682 9583', '+30 6977 906 409', '+30 6983 678 087'],
    navigateTitle: 'Navigation',
    legalTitle: 'Informations',
    privacy: 'Politique de confidentialité',
    mteLabel: 'Numéro ΜΗ.Τ.Ε.',
    mte: '1026599',
    rights: '© 2026 Leandros Apartments. Tous droits réservés.',
    photography: 'Photographies issues des archives Leandros.',
    backToTop: 'Haut de page',
  },

  privacyPage: {
    eyebrow: 'Confidentialité',
    title: 'Vos données, en toute simplicité.',
    updated: 'Dernière mise à jour : octobre 2026',
    intro:
      'Ce site appartient à Leandros Apartments, à Platys Gialos, Sifnos. Cette page explique simplement ce qu’il advient des informations que vous nous transmettez.',
    sections: [
      {
        title: 'Ce que nous collectons',
        paragraphs: [
          'Lorsque vous nous envoyez une demande, nous recevons le nom, l’adresse e-mail, le numéro de téléphone, les dates et le message que vous choisissez de nous communiquer. Nous ne demandons jamais de données bancaires par ce site.',
          'Nous n’utilisons pas de cookies publicitaires. Si des statistiques sont activées, ce n’est qu’après votre accord, et elles enregistrent des données anonymes sur les pages consultées.',
        ],
      },
      {
        title: 'Pourquoi nous les utilisons',
        paragraphs: [
          'Vos informations servent uniquement à répondre à votre demande et, si vous réservez, à organiser votre séjour. La base légale est notre intérêt légitime à vous répondre et, en cas de réservation, l’exécution de notre contrat.',
        ],
      },
      {
        title: 'Qui les consulte',
        paragraphs: [
          'Les demandes sont conservées chez Google Firebase, qui assure notre hébergement et notre base de données, et sont lues par la famille qui gère les appartements. Nous ne vendons pas vos données et ne les partageons pas à des fins commerciales.',
        ],
      },
      {
        title: 'Combien de temps nous les conservons',
        paragraphs: [
          'La correspondance liée aux demandes est conservée deux ans au maximum, ou aussi longtemps que les règles fiscales et comptables l’exigent après un séjour.',
        ],
      },
      {
        title: 'Vos droits',
        paragraphs: [
          'Vous pouvez demander à consulter, rectifier ou supprimer les informations que nous détenons sur vous, ou vous opposer à leur utilisation. Écrivez-nous aux coordonnées ci-dessous : nous répondrons dans un délai d’un mois. Vous pouvez également saisir l’Autorité hellénique de protection des données (dpa.gr).',
        ],
      },
      {
        title: 'Cookies et préférences',
        paragraphs: [
          'Ce site n’a besoin d’aucun cookie pour fonctionner. Une petite préférence est enregistrée dans votre navigateur pour mémoriser la langue choisie. Les cookies de mesure d’audience sont facultatifs et les refuser ne change rien à votre navigation.',
        ],
      },
    ],
    contactTitle: 'Questions sur la confidentialité',
    contactBody:
      'Écrivez à Leandros Apartments, Platys Gialos 840 03, Sifnos, Grèce, ou appelez le +30 210 682 9583.',
  },

  notFound: {
    eyebrow: '404',
    title: 'Cette page a pris le large.',
    body: 'La page que vous cherchez n’existe pas — mais la plage est toujours là où vous l’avez laissée.',
    cta: 'Retour à la maison',
  },
};
