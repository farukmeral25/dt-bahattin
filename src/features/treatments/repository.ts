import "server-only";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parseMarkdown, type BlogBlock } from "@/features/blog/markdown";
import { localizePath, locales, type Locale } from "@/i18n/config";

/**
 * Tedavi sayfaları content/treatments/*.json dosyalarından build sırasında
 * okunur (her dosyada TR ve EN sürüm). Yazım kuralları: content/treatments/BRIEF.md
 */
type TreatmentLocaleFile = {
  slug: string;
  name: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  facts: { label: string; value: string }[];
  body: string;
  faq: { question: string; answer: string }[];
};

type TreatmentFile = {
  id: string;
  order: number;
  relatedPosts?: string[];
} & Record<Locale, TreatmentLocaleFile>;

export type Treatment = Omit<TreatmentLocaleFile, "body"> & {
  id: string;
  order: number;
  relatedPosts: string[];
  body: BlogBlock[];
};

const dir = path.join(process.cwd(), "content/treatments");

let cache: Promise<TreatmentFile[]> | undefined;

function loadAll() {
  cache ??= readdir(dir).then(async (files) => {
    const docs = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) =>
          JSON.parse(await readFile(path.join(dir, file), "utf8")),
        ),
    );
    return (docs as TreatmentFile[]).sort((a, b) => a.order - b.order);
  });
  return cache;
}

const toTreatment = (doc: TreatmentFile, locale: Locale): Treatment => ({
  ...doc[locale],
  id: doc.id,
  order: doc.order,
  relatedPosts: doc.relatedPosts ?? [],
  body: parseMarkdown(doc[locale].body ?? ""),
  facts: doc[locale].facts ?? [],
  faq: doc[locale].faq ?? [],
});

export async function getTreatments(locale: Locale) {
  return (await loadAll()).map((doc) => toTreatment(doc, locale));
}

export async function getTreatment(locale: Locale, slug: string) {
  return (await getTreatments(locale)).find((t) => t.slug === slug);
}

export const treatmentHref = (slug: string, locale: Locale) =>
  localizePath(`/tedaviler/${slug}`, locale);

/** Tedavinin her dildeki adresi (slug'lar dile göre farklı). */
export async function treatmentLocalizedPaths(id: string) {
  const doc = (await loadAll()).find((d) => d.id === id);
  return Object.fromEntries(
    locales.map((l) => [
      l,
      doc ? treatmentHref(doc[l].slug, l) : localizePath("/tedaviler", l),
    ]),
  ) as Record<Locale, string>;
}
