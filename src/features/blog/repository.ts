import "server-only";
import {
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from "firebase/firestore/lite";
import { localizePath, locales, type Locale } from "@/i18n/config";
import type { BlogCategory } from "@/i18n/types";
import { db } from "@/lib/firebase";
import { parseMarkdown, readingMinutes } from "./markdown";
import type { BlogPost } from "./posts";

/**
 * Blog yazıları Firestore'daki `posts` koleksiyonundan build sırasında
 * okunur (statik export). Yeni yazı yayınlamak için Console'da belge ekleyip
 * siteyi yeniden deploy etmek yeterli. Şema: content/blog/README.md
 */
type PostLocaleDoc = {
  slug?: string;
  title?: string;
  excerpt?: string;
  lead?: string;
  ctaTitle?: string;
  imageAlt?: string;
  body?: string;
};

type PostDoc = {
  published?: boolean;
  featured?: boolean;
  category?: string;
  date?: string | Timestamp;
  readMinutes?: number;
  related?: string[];
  image?: {
    url?: string;
    author?: string;
    authorUrl?: string;
    sourceUrl?: string;
  };
} & Partial<Record<Locale, PostLocaleDoc>>;

const categories: BlogCategory[] = [
  "implant",
  "aesthetic",
  "surgery",
  "kids",
  "care",
];

const isCategory = (value: unknown): value is BlogCategory =>
  categories.includes(value as BlogCategory);

function toDate(value: PostDoc["date"]) {
  if (value instanceof Timestamp)
    return value.toDate().toISOString().slice(0, 10);
  return typeof value === "string" && !Number.isNaN(Date.parse(value))
    ? value
    : undefined;
}

/** Belgeyi tek dildeki yazıya çevirir; eksik alan varsa o dil atlanır. */
function toPost(id: string, doc: PostDoc, locale: Locale): BlogPost | null {
  const content = doc[locale];
  const date = toDate(doc.date);
  if (
    !content?.slug ||
    !content.title ||
    !content.excerpt ||
    !content.body ||
    !isCategory(doc.category) ||
    !date
  ) {
    if (content)
      console.warn(`[blog] "${id}" (${locale}) eksik alan, atlandı.`);
    return null;
  }

  return {
    id,
    slug: content.slug,
    category: doc.category,
    date,
    readMinutes: doc.readMinutes ?? readingMinutes(content.body),
    featured: doc.featured === true,
    title: content.title,
    excerpt: content.excerpt,
    lead: content.lead || undefined,
    ctaTitle: content.ctaTitle || undefined,
    related: doc.related ?? [],
    body: parseMarkdown(content.body),
    image: doc.image?.url
      ? {
          url: doc.image.url,
          alt: content.imageAlt || content.title,
          author: doc.image.author,
          authorUrl: doc.image.authorUrl,
          sourceUrl: doc.image.sourceUrl,
        }
      : undefined,
  };
}

let snapshot: Promise<Record<Locale, BlogPost[]>> | undefined;

/**
 * Tüm yayındaki yazılar, dil bazında ve yeniden eskiye sıralı. Build
 * boyunca tek sorgu yapılır. Firestore'a ulaşılamazsa build hata verir;
 * boş blogla deploy edilmesindense bu tercih edildi.
 */
function loadAll() {
  snapshot ??= getDocs(
    query(collection(db, "posts"), where("published", "==", true)),
  ).then((result) => {
    const byLocale = Object.fromEntries(
      locales.map((locale) => {
        const seen = new Set<string>();
        const posts = result.docs
          .map((d) => toPost(d.id, d.data() as PostDoc, locale))
          .filter((post): post is BlogPost => {
            if (!post) return false;
            if (seen.has(post.slug)) {
              console.warn(
                `[blog] "${post.slug}" slug'ı tekrar ediyor, atlandı.`,
              );
              return false;
            }
            seen.add(post.slug);
            return true;
          })
          .sort((a, b) => b.date.localeCompare(a.date));
        return [locale, posts];
      }),
    );
    return byLocale as Record<Locale, BlogPost[]>;
  });
  return snapshot;
}

export async function getPosts(locale: Locale) {
  return (await loadAll())[locale];
}

export async function getPost(locale: Locale, slug: string) {
  return (await getPosts(locale)).find((post) => post.slug === slug);
}

/** Bir yazının yayında olduğu her dildeki adresi (slug'lar dile göre farklı). */
export async function postLocalizedPaths(id: string) {
  const all = await loadAll();
  const entries = locales.flatMap((locale) => {
    const post = all[locale].find((p) => p.id === id);
    return post
      ? [[locale, localizePath(`/blog/${post.slug}`, locale)] as const]
      : [];
  });
  return Object.fromEntries(entries) as Partial<Record<Locale, string>>;
}

/** En az bir dilde yayında olan yazıların kimlikleri; sitemap için. */
export async function allPostIds() {
  const all = await loadAll();
  return [...new Set(locales.flatMap((l) => all[l].map((p) => p.id)))];
}
