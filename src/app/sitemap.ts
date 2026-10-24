import type { MetadataRoute } from "next";
import { pages } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { postLocalizedPaths } from "@/features/blog/post-paths";
import { publishedPosts } from "@/features/blog/posts";
import {
  defaultLocale,
  localizePath,
  locales,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
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

  const { blog } = await getDictionary(defaultLocale);
  const posts = await Promise.all(
    publishedPosts(blog).map((post) => postLocalizedPaths(post.id)),
  );

  return [
    ...pages.flatMap((page) =>
      entries(localized(page), page === "/" ? 1 : 0.8),
    ),
    ...posts.flatMap((paths) => entries(paths, 0.6)),
    // KVKK metni yalnızca Türkçe yayınlanıyor
    ...entries({ tr: "/kvkk" }, 0.3),
  ];
}

// output: "export" metadata rotalarının build sırasında üretilmesini ister.
export const dynamic = "force-static";
