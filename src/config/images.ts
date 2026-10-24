/**
 * Site görselleri. Fotoğraflar gelince public/images altına koyup ilgili
 * alana yolu yazın (ör. "/images/hekim-portre.jpg"). Boş alanlar tasarımdaki
 * yer tutucu kutu olarak görünür.
 */

type Src = string | undefined;

export const images = {
  heroPortrait: "/images/hekim-hero.webp" as Src,
  doctor: "/images/hekim-portre.webp" as Src,
  /** Öncesi / sonrası vakalar — sıra sözlükteki gallery.cases ile aynı */
  cases: [
    { before: undefined as Src, after: undefined as Src },
    { before: undefined as Src, after: undefined as Src },
    { before: undefined as Src, after: undefined as Src },
    { before: undefined as Src, after: undefined as Src },
    { before: undefined as Src, after: undefined as Src },
    { before: undefined as Src, after: undefined as Src },
  ],
  /** Klinik kareleri — sıra sözlükteki gallery.clinic ile aynı */
  clinic: [
    "/images/klinik-bekleme.webp",
    "/images/klinik-tedavi-odasi.webp",
    "/images/klinik-panoramik.webp",
    "/images/klinik-giris.webp",
    "/images/klinik-rontgen.webp",
    "/images/klinik-muayene-odasi.webp",
    "/images/klinik-tedavi-odasi-2.webp",
  ] as Src[],
  tourism: {
    preview: [
      "/images/klinik-resepsiyon.webp",
      "/images/klinik-unit.webp",
    ] as Src[],
    hero: "/images/hekim-klinik.webp" as Src,
    /** Adımlar: online görüşme, havalimanı, konaklama, tedavi, dönüş */
    steps: [
      undefined,
      undefined,
      undefined,
      "/images/klinik-tedavi.webp",
      undefined,
    ] as Src[],
  },
};
