import { localizePath, type Locale } from "@/i18n/config";
import type { BlogCategory } from "@/i18n/types";
import type { BlogBlock } from "./markdown";

/** Kapak fotoğrafı (Unsplash; lisans gereği fotoğrafçı adı gösterilir). */
export type BlogImage = {
  url: string;
  alt: string;
  author?: string;
  authorUrl?: string;
  sourceUrl?: string;
};

/** Bir yazının tek dildeki hali (veri kaynağı: features/blog/repository). */
export type BlogPost = {
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
  related: string[];
  body: BlogBlock[];
  image?: BlogImage;
};

export function postHref(post: Pick<BlogPost, "slug">, locale: Locale) {
  return localizePath(`/blog/${post.slug}`, locale);
}

const dateLocales: Record<Locale, string> = { tr: "tr-TR", en: "en-GB" };

export function formatPostDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(dateLocales[locale], {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
