/**
 * Klinik ve site bilgileri için tek doğruluk kaynağı.
 * Metadata, JSON-LD, header/footer ve iletişim bileşenleri buradan beslenir.
 * Dile bağlı metinler src/i18n/dictionaries altındadır.
 */

const mapsQuery =
  "Güzelyalı Mahallesi İstiklal Caddesi No:10/A Pendik İstanbul";

export const siteConfig = {
  name: "Dt. Bahattin Eraslan",
  shortName: "Dt. Bahattin Eraslan",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dtbahattineraslan.com",
  keywords: [
    "Pendik diş hekimi",
    "Pendik diş kliniği",
    "implant Pendik",
    "gülüş tasarımı",
    "zirkonyum kaplama",
    "lamina",
    "kanal tedavisi",
    "All-on-4",
    "dental turizm İstanbul",
    "Bahattin Eraslan",
  ],
  themeColor: "#f6f2ea",

  doctor: {
    name: "Bahattin Eraslan",
    title: "Diş Hekimi",
    alumniOf: "Van Yüzüncü Yıl Üniversitesi Diş Hekimliği Fakültesi",
  },

  contact: {
    phone: "+905332575214",
    phoneDisplay: "0533 257 52 14",
    whatsapp: "905332575214",
    email: "dt.bahattineraslan@gmail.com",
  },

  address: {
    street: "Güzelyalı Mahallesi, İstiklal Caddesi No:10/A",
    district: "Pendik",
    city: "İstanbul",
    postalCode: "",
    country: "TR",
    mapsUrl: `https://maps.google.com/?q=${encodeURIComponent(mapsQuery)}`,
    mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=16&output=embed`,
    // TODO: Google Haritalar'dan klinik koordinatlarını girin (yerel SEO için).
    geo: { latitude: 0, longitude: 0 },
  },

  /** schema.org openingHours formatı */
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-14:00"],

  social: {
    instagram: "https://instagram.com/dt.bahattineraslan",
    instagramHandle: "@dt.bahattineraslan",
  },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;
export const phoneUrl = `tel:${siteConfig.contact.phone}`;

export type SiteConfig = typeof siteConfig;
