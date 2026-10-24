/**
 * Site görselleri. Fotoğraflar gelince public/images altına koyup ilgili
 * alana yolu yazın (ör. "/images/hekim-portre.jpg"). Boş alanlar tasarımdaki
 * yer tutucu kutu olarak görünür.
 */

type Src = string | undefined;

export const images = {
  heroPortrait: undefined as Src,
  doctor: undefined as Src,
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
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ] as Src[],
  /** Blog görselleri — sıra sözlükteki blog.posts ile aynı */
  blog: [] as Src[],
  tourism: {
    preview: [undefined, undefined] as Src[],
    hero: undefined as Src,
    steps: [undefined, undefined, undefined, undefined, undefined] as Src[],
  },
};
