import type { MetadataRoute } from "next";
import { pages } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { allPostIds, postLocalizedPaths } from "@/features/blog/repository";
import {
  getTreatments,
  treatmentLocalizedPaths,
} from "@/features/treatments/repository";
import { localizePath, locales, type Locale } from "@/i18n/config";
import { languageAlternates } from "@/lib/seo/metadata";

const absolute = (path: string) => new URL(path, siteConfig.url).toString();

/** Bir sayfanın her dildeki URL'si için sitemap kayıtları (hreflang ile). */
function entries(
  paths: Partial<Record<Locale, string>>,
  priority: number,
): MetadataRoute.Sitemap {
  const available = locales.filter((l) => paths[l]);
  const languages = Object.fromEntries(
    Object.entries(
      languageAlternates(paths as Record<Locale, string>, available),
    ).map(([l, p]) => [l, absolute(p)]),
  );
  return available.map((locale) => ({
    url: absolute(paths[locale]!),
    changeFrequency: "monthly" as const,
    priority,
    alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const localized = (path: string) =>
    Object.fromEntries(locales.map((l) => [l, localizePath(path, l)]));

  const posts = await Promise.all(
    (await allPostIds()).map((id) => postLocalizedPaths(id)),
  );
  const treatments = await Promise.all(
    (await getTreatments("tr")).map((t) => treatmentLocalizedPaths(t.id)),
  );

  return [
    ...pages.flatMap((page) =>
      entries(localized(page), page === "/" ? 1 : 0.8),
    ),
    ...treatments.flatMap((paths) => entries(paths, 0.7)),
    ...posts.flatMap((paths) => entries(paths, 0.6)),
    // KVKK metni yalnızca Türkçe yayınlanıyor
    ...entries({ tr: "/kvkk" }, 0.3),
  ];
}

// output: "export" metadata rotalarının build sırasında üretilmesini ister.
export const dynamic = "force-static";
