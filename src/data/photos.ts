import type { ImageMetadata } from 'astro';
import type { Locale } from '../content/types';

/**
 * The photography is the property's own archive, regraded by
 * `scripts/prepare-images.mjs`. Each photo carries a localised description
 * used both as alt text and (where shown) as a caption.
 */
export interface Photo {
  src: ImageMetadata;
  alt: Record<Locale, string>;
}

/* Exterior & place ------------------------------------------------------- */
import houseFront from '../assets/photos/gallery/apartments-leandros.jpg';
import houseEntrance from '../assets/photos/gallery/entrance-from-sea.jpg';
import courtyard from '../assets/photos/gallery/yards-at-leandros-apartments.jpg';
import terraceWide from '../assets/photos/gallery/accommodation-by-the-sea.jpg';
import veranda from '../assets/photos/accommodation/apartment2/sea-view-veranda.jpg';
import beachLong from '../assets/photos/platis-gialos/beach-platis-gialos.jpg';
import bayPanoramic from '../assets/photos/platis-gialos/panoramic.jpg';
import bayVouno from '../assets/photos/platis-gialos/platis-gialos-from-panagia-vouno.jpg';
import umbrellas from '../assets/photos/gallery/umbrellas-sunbeds.jpg';
import alley from '../assets/photos/gallery/alley-to-the-sea.jpg';
import pottery from '../assets/photos/gallery/ceramic-label.jpg';
import garden from '../assets/photos/gallery/accommodation-in-sifnos.jpg';
import seaDoor from '../assets/photos/gallery/sifnos-accommodation-sea.jpg';
import houseSide from '../assets/photos/gallery/platis-gialos-sifnos.jpg';

/* Maisonette — No. 1 ----------------------------------------------------- */
import m1Balcony from '../assets/photos/accommodation/apartment1/balcony-sea-view.jpg';
import m1Bedroom from '../assets/photos/accommodation/apartment1/master-bedroom.jpg';
import m1BedroomSea from '../assets/photos/accommodation/apartment1/bedroom-sea-view.jpg';
import m1Twin from '../assets/photos/accommodation/apartment1/bedroom-two-beds.jpg';
import m1Kitchen from '../assets/photos/accommodation/apartment1/kitchen.jpg';
import m1Living from '../assets/photos/accommodation/apartment1/apartment-with-kitchen.jpg';
import m1Exterior from '../assets/photos/accommodation/apartment1/maisonette.jpg';
import m1Detail from '../assets/photos/accommodation/apartment1/mirror.jpg';
import m1Yard from '../assets/photos/accommodation/apartment1/yard-sea-view.jpg';

/* Family apartment — No. 2 ----------------------------------------------- */
import f2Exterior from '../assets/photos/accommodation/apartment2/apartment-in-sifnos.jpg';
import f2Kitchen from '../assets/photos/accommodation/apartment2/apartment-with-kitchen.jpg';
import f2Twin from '../assets/photos/accommodation/apartment2/bedroom-two-beds.jpg';
import f2KitchenBath from '../assets/photos/accommodation/apartment2/kitchen-bathroom.jpg';
import f2Master from '../assets/photos/accommodation/apartment2/master-bedroom.jpg';
import f2Second from '../assets/photos/accommodation/apartment2/second-bedroom.jpg';
import f2Yard from '../assets/photos/accommodation/apartment2/spacious-yard.jpg';

/* Balcony apartment — No. 3 ---------------------------------------------- */
import b3Balcony from '../assets/photos/accommodation/apartment3/balcony-sea-view.jpg';
import b3Kitchen from '../assets/photos/accommodation/apartment3/apartment-kitchen.jpg';
import b3Twin from '../assets/photos/accommodation/apartment3/bedroom-two-beds.jpg';
import b3Table from '../assets/photos/accommodation/apartment3/kitchen-table.jpg';
import b3Living from '../assets/photos/accommodation/apartment3/living-room.jpg';
import b3Master from '../assets/photos/accommodation/apartment3/master-bedroom.jpg';

export const photos = {
  'house-front': {
    src: houseFront,
    alt: {
      en: 'The whitewashed house at Platys Gialos, seen from the beach road',
      el: 'Το ασπρισμένο σπίτι στον Πλατύ Γιαλό, από τον παραλιακό δρόμο',
      fr: 'La maison blanche de Platys Gialos, vue depuis la route de la plage',
    },
  },
  'house-entrance': {
    src: houseEntrance,
    alt: {
      en: 'The gate and garden of the house, a few steps from the sand',
      el: 'Η αυλόπορτα και ο κήπος του σπιτιού, λίγα βήματα από την άμμο',
      fr: 'Le portail et le jardin de la maison, à quelques pas du sable',
    },
  },
  courtyard: {
    src: courtyard,
    alt: {
      en: 'The paved courtyard under the pergola, with the sea beyond',
      el: 'Η πλακόστρωτη αυλή κάτω από την πέργκολα, με τη θάλασσα στο βάθος',
      fr: 'La cour pavée sous la pergola, avec la mer au loin',
    },
  },
  'terrace-wide': {
    src: terraceWide,
    alt: {
      en: 'The terrace looking over the courtyard to Platys Gialos beach',
      el: 'Η βεράντα με θέα στην αυλή και στην παραλία του Πλατύ Γιαλού',
      fr: 'La terrasse surplombant la cour et la plage de Platys Gialos',
    },
  },
  veranda: {
    src: veranda,
    alt: {
      en: 'A stone table under the pergola, looking out to the sea',
      el: 'Πέτρινο τραπέζι κάτω από την πέργκολα, με θέα στη θάλασσα',
      fr: 'Une table en pierre sous la pergola, face à la mer',
    },
  },
  'beach-long': {
    src: beachLong,
    alt: {
      en: 'The long curve of Platys Gialos beach and its turquoise water',
      el: 'Η μεγάλη αμμουδιά του Πλατύ Γιαλού και τα τιρκουάζ νερά',
      fr: 'La longue plage de Platys Gialos et son eau turquoise',
    },
  },
  'bay-panoramic': {
    src: bayPanoramic,
    alt: {
      en: 'The bay of Platys Gialos, seen from the hills above the beach',
      el: 'Ο κόλπος του Πλατύ Γιαλού από τους λόφους πάνω από την παραλία',
      fr: 'La baie de Platys Gialos vue depuis les collines',
    },
  },
  'bay-vouno': {
    src: bayVouno,
    alt: {
      en: 'Platys Gialos from the chapel of Panagia Vouno',
      el: 'Ο Πλατύς Γιαλός από το εκκλησάκι της Παναγιάς Βουνό',
      fr: 'Platys Gialos depuis la chapelle de Panagia Vouno',
    },
  },
  umbrellas: {
    src: umbrellas,
    alt: {
      en: 'Straw sunshades and sunbeds along the beach',
      el: 'Ψάθινες ομπρέλες και ξαπλώστρες κατά μήκος της παραλίας',
      fr: 'Pergolas de paille et transats le long de la plage',
    },
  },
  alley: {
    src: alley,
    alt: {
      en: 'The narrow alley that leads down to the water',
      el: 'Το στενό σοκάκι που κατεβαίνει στο νερό',
      fr: 'La ruelle étroite qui descend vers l’eau',
    },
  },
  pottery: {
    src: pottery,
    alt: {
      en: 'Hand-painted Sifnian ceramics at the house',
      el: 'Χειροποίητα κεραμικά της Σίφνου στο σπίτι',
      fr: 'Céramiques de Sifnos peintes à la main',
    },
  },
  garden: {
    src: garden,
    alt: {
      en: 'The garden and terrace beside the courtyard',
      el: 'Ο κήπος και η βεράντα δίπλα στην αυλή',
      fr: 'Le jardin et la terrasse à côté de la cour',
    },
  },
  'sea-door': {
    src: seaDoor,
    alt: {
      en: 'A doorway opening towards the sea',
      el: 'Μια πόρτα που ανοίγει προς τη θάλασσα',
      fr: 'Une porte ouverte vers la mer',
    },
  },
  'house-side': {
    src: houseSide,
    alt: {
      en: 'The house and the beach at Platys Gialos',
      el: 'Το σπίτι και η παραλία στον Πλατύ Γιαλό',
      fr: 'La maison et la plage de Platys Gialos',
    },
  },

  'm1-balcony': {
    src: m1Balcony,
    alt: {
      en: 'The Maisonette balcony, looking over the beach',
      el: 'Το μπαλκόνι της μεζονέτας, με θέα στην παραλία',
      fr: 'Le balcon de la maisonnette, face à la plage',
    },
  },
  'm1-bedroom': {
    src: m1Bedroom,
    alt: {
      en: 'The upstairs bedroom of the Maisonette',
      el: 'Η κρεβατοκάμαρα του επάνω ορόφου στη μεζονέτα',
      fr: 'La chambre à l’étage de la maisonnette',
    },
  },
  'm1-bedroom-sea': {
    src: m1BedroomSea,
    alt: {
      en: 'The bedroom window, with the sea beyond',
      el: 'Το παράθυρο της κρεβατοκάμαρας, με τη θάλασσα πέρα',
      fr: 'La fenêtre de la chambre, avec la mer au-delà',
    },
  },
  'm1-twin': {
    src: m1Twin,
    alt: {
      en: 'Two single beds in the Maisonette',
      el: 'Δύο μονά κρεβάτια στη μεζονέτα',
      fr: 'Deux lits simples dans la maisonnette',
    },
  },
  'm1-kitchen': {
    src: m1Kitchen,
    alt: {
      en: 'The kitchen of the Maisonette',
      el: 'Η κουζίνα της μεζονέτας',
      fr: 'La cuisine de la maisonnette',
    },
  },
  'm1-living': {
    src: m1Living,
    alt: {
      en: 'The open-plan kitchen and dining area',
      el: 'Η ενιαία κουζινοτραπεζαρία',
      fr: 'La cuisine ouverte et la salle à manger',
    },
  },
  'm1-exterior': {
    src: m1Exterior,
    alt: {
      en: 'The Maisonette seen from the courtyard',
      el: 'Η μεζονέτα από την αυλή',
      fr: 'La maisonnette vue depuis la cour',
    },
  },
  'm1-detail': {
    src: m1Detail,
    alt: {
      en: 'A quiet corner inside the Maisonette',
      el: 'Μια ήσυχη γωνιά μέσα στη μεζονέτα',
      fr: 'Un coin tranquille dans la maisonnette',
    },
  },
  'm1-yard': {
    src: m1Yard,
    alt: {
      en: 'The yard in front of the Maisonette, and the sea',
      el: 'Η αυλή μπροστά από τη μεζονέτα και η θάλασσα',
      fr: 'La cour devant la maisonnette, et la mer',
    },
  },

  'f2-exterior': {
    src: f2Exterior,
    alt: {
      en: 'The family apartment seen from the beach',
      el: 'Το οικογενειακό διαμέρισμα από την παραλία',
      fr: 'L’appartement familial vu depuis la plage',
    },
  },
  'f2-kitchen': {
    src: f2Kitchen,
    alt: {
      en: 'The kitchen and dining area of the family apartment',
      el: 'Η κουζίνα και η τραπεζαρία του οικογενειακού διαμερίσματος',
      fr: 'La cuisine et la salle à manger de l’appartement familial',
    },
  },
  'f2-twin': {
    src: f2Twin,
    alt: {
      en: 'The second bedroom, with two single beds',
      el: 'Η δεύτερη κρεβατοκάμαρα, με δύο μονά κρεβάτια',
      fr: 'La deuxième chambre, avec deux lits simples',
    },
  },
  'f2-kitchen-bath': {
    src: f2KitchenBath,
    alt: {
      en: 'The kitchen and bathroom of the family apartment',
      el: 'Η κουζίνα και το μπάνιο του οικογενειακού διαμερίσματος',
      fr: 'La cuisine et la salle de bain de l’appartement familial',
    },
  },
  'f2-master': {
    src: f2Master,
    alt: {
      en: 'The main bedroom of the family apartment',
      el: 'Η κύρια κρεβατοκάμαρα του οικογενειακού διαμερίσματος',
      fr: 'La chambre principale de l’appartement familial',
    },
  },
  'f2-veranda': {
    src: veranda,
    alt: {
      en: 'The veranda of the family apartment, looking to the sea',
      el: 'Η βεράντα του οικογενειακού διαμερίσματος, με θέα στη θάλασσα',
      fr: 'La véranda de l’appartement familial, face à la mer',
    },
  },
  'f2-second': {
    src: f2Second,
    alt: {
      en: 'The second bedroom of the family apartment',
      el: 'Η δεύτερη κρεβατοκάμαρα του οικογενειακού διαμερίσματος',
      fr: 'La deuxième chambre de l’appartement familial',
    },
  },
  'f2-yard': {
    src: f2Yard,
    alt: {
      en: 'The spacious yard in front of the family apartment',
      el: 'Η ευρύχωρη αυλή μπροστά από το οικογενειακό διαμέρισμα',
      fr: 'La grande cour devant l’appartement familial',
    },
  },

  'b3-balcony': {
    src: b3Balcony,
    alt: {
      en: 'The private balcony of the Balcony Apartment, with the beach below',
      el: 'Το ιδιωτικό μπαλκόνι του διαμερίσματος, με την παραλία από κάτω',
      fr: 'Le balcon privé de l’appartement, avec la plage en dessous',
    },
  },
  'b3-kitchen': {
    src: b3Kitchen,
    alt: {
      en: 'The kitchen of the Balcony Apartment',
      el: 'Η κουζίνα του διαμερίσματος με το μπαλκόνι',
      fr: 'La cuisine de l’appartement avec balcon',
    },
  },
  'b3-twin': {
    src: b3Twin,
    alt: {
      en: 'The bedroom, with two single beds',
      el: 'Η κρεβατοκάμαρα, με δύο μονά κρεβάτια',
      fr: 'La chambre, avec deux lits simples',
    },
  },
  'b3-table': {
    src: b3Table,
    alt: {
      en: 'The dining table by the kitchen window',
      el: 'Το τραπέζι δίπλα στο παράθυρο της κουζίνας',
      fr: 'La table à manger près de la fenêtre de la cuisine',
    },
  },
  'b3-living': {
    src: b3Living,
    alt: {
      en: 'The living area of the Balcony Apartment',
      el: 'Ο χώρος καθιστικού του διαμερίσματος',
      fr: 'Le coin salon de l’appartement avec balcon',
    },
  },
  'b3-master': {
    src: b3Master,
    alt: {
      en: 'The bedroom of the Balcony Apartment, with the sea beyond',
      el: 'Η κρεβατοκάμαρα του διαμερίσματος, με τη θάλασσα πέρα',
      fr: 'La chambre de l’appartement, avec la mer au-delà',
    },
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Curated galleries, one per apartment. The first image is the cover. */
export const unitGalleries: Record<string, PhotoKey[]> = {
  maisonette: [
    'm1-balcony',
    'm1-living',
    'm1-bedroom',
    'm1-twin',
    'm1-kitchen',
    'm1-exterior',
    'm1-yard',
    'm1-bedroom-sea',
  ],
  'family-apartment': [
    'f2-veranda',
    'f2-kitchen',
    'f2-master',
    'f2-twin',
    'f2-second',
    'f2-yard',
    'f2-exterior',
    'f2-kitchen-bath',
  ],
  'balcony-apartment': ['b3-balcony', 'b3-living', 'b3-master', 'b3-twin', 'b3-kitchen', 'b3-table'],
};

/** The house and the beach — used on the home and location pages. */
export const houseGallery: PhotoKey[] = [
  'house-front',
  'courtyard',
  'terrace-wide',
  'veranda',
  'house-entrance',
  'garden',
  'sea-door',
  'pottery',
];

export const islandGallery: PhotoKey[] = ['beach-long', 'alley', 'umbrellas', 'bay-vouno', 'bay-panoramic'];

export function photoAlt(key: PhotoKey, locale: Locale): string {
  return photos[key].alt[locale];
}
