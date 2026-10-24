import { images } from "@/config/images";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import type { BlogPostData } from "@/i18n/types";

/**
 * Blog yazıları şimdilik sözlükte duruyor; CMS / MDX bağlandığında bu dosya
 * veri kaynağına dönüşecek. Görseller config/images.ts → blog (aynı sıra).
 */
export type BlogPost = BlogPostData & {
  image?: string;
  /** Gövdesi olan yazıların detay sayfası yolu (dilden bağımsız) */
  path?: string;
};

export function getPosts(blog: Dictionary["blog"]): BlogPost[] {
  return blog.posts.map((post, i) => ({
    ...post,
    image: images.blog[i],
    path: post.body ? `/blog/${post.slug}` : undefined,
  }));
}

/** Detay sayfası üretilecek (gövdesi olan) yazılar. */
export const publishedPosts = (blog: Dictionary["blog"]) =>
  getPosts(blog).filter((post) => post.path);

/** Yazının bağlantısı; detay sayfası yoksa blog listesine düşer. */
export function postHref(post: BlogPost, locale: Locale) {
  return localizePath(post.path ?? "/blog", locale);
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
