/**
 * Klinik ve site bilgileri için tek doğruluk kaynağı.
 * Metadata, JSON-LD, header/footer ve iletişim bileşenleri buradan beslenir.
 * Dile bağlı metinler src/i18n/dictionaries altındadır.
 */

/** Google Haritalar işletme kaydındaki konum */
const geo = { latitude: 40.8621581, longitude: 29.2827128 };

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
    /** Google Haritalar işletme kaydı ("Diş Hekimi Bahattin Eraslan") */
    mapsUrl: "https://maps.app.goo.gl/WDGwd7bNkbyBAB4u9",
    mapsEmbedUrl: `https://maps.google.com/maps?q=${geo.latitude},${geo.longitude}&z=17&output=embed`,
    geo,
    /** Hizmet verilen çevre (yerel arama / schema.org areaServed) */
    areaServed: ["Pendik", "İstanbul"],
  },

  /**
   * Geçici olarak kapatılan bölümler.
   * - dentalTourism: true yapın ve firebase.json'daki /dental-turizm
   *   yönlendirmelerini silin.
   * - beforeAfter: KVKK onaylı öncesi / sonrası fotoğraflar
   *   (config/images.ts → cases) eklenince true yapın.
   */
  features: { dentalTourism: false, beforeAfter: false },

  /** schema.org openingHours formatı */
  openingHours: ["Mo-Sa 09:00-19:00"],

  social: {
    instagram: "https://instagram.com/dt.bahattineraslan",
    instagramHandle: "@dt.bahattineraslan",
  },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;
export const phoneUrl = `tel:${siteConfig.contact.phone}`;

export type SiteConfig = typeof siteConfig;
