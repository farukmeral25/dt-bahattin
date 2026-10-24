/**
 * Klinik ve site bilgileri için tek doğruluk kaynağı.
 * Metadata, JSON-LD, header/footer ve iletişim bileşenleri buradan beslenir.
 *
 * TODO: "[...]" ile işaretli alanları gerçek bilgilerle doldurun.
 */

export const siteConfig = {
  name: "Dt. Bahattin Eraslan",
  shortName: "Dt. Bahattin Eraslan",
  title: "Dt. Bahattin Eraslan | Diş Hekimi",
  description:
    "Diş Hekimi Bahattin Eraslan kliniği: implant, estetik diş hekimliği, kanal tedavisi ve genel diş sağlığı hizmetleri. Online randevu alın.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "tr_TR",
  language: "tr",
  keywords: [
    "diş hekimi",
    "diş kliniği",
    "implant",
    "estetik diş hekimliği",
    "kanal tedavisi",
    "diş beyazlatma",
    "Bahattin Eraslan",
  ],
  themeColor: "#ffffff",
  ogImage: "/opengraph-image",

  doctor: {
    name: "Bahattin Eraslan",
    title: "Diş Hekimi",
  },

  contact: {
    phone: "[+90 5XX XXX XX XX]",
    whatsapp: "[905XXXXXXXXX]",
    email: "[info@ornek.com]",
  },

  address: {
    street: "[Sokak / Cadde, No]",
    district: "[İlçe]",
    city: "[İl]",
    postalCode: "[Posta kodu]",
    country: "TR",
    mapsUrl: "",
    geo: { latitude: 0, longitude: 0 },
  },

  /** schema.org openingHours formatı: Mo-Fr 09:00-18:00 */
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-14:00"],

  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    google: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
