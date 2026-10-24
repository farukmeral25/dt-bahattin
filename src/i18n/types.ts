export type BlogCategory =
  "implant" | "aesthetic" | "surgery" | "kids" | "care";

/** Yazı gövdesi blokları — CMS / MDX bağlanana kadar sözlükte tutulur. */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPostData = {
  /** Diller arası ortak kimlik (ilgili yazılar, hreflang eşleşmesi) */
  id: string;
  slug: string;
  category: BlogCategory;
  date: string;
  readMinutes: number;
  featured: boolean;
  title: string;
  excerpt: string;
  /** Detay sayfası giriş paragrafı; yoksa excerpt kullanılır */
  lead?: string;
  /** Yan kutudaki muayene başlığı */
  ctaTitle?: string;
  related?: string[];
  /** Gövdesi olmayan yazıların detay sayfası üretilmez */
  body?: BlogBlock[];
};

/** Sözlükte yazı listesini tipli tanımlamak için. */
export const definePosts = (posts: BlogPostData[]) => posts;
