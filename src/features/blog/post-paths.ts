import "server-only";
import { localizePath, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

/**
 * Bir yazının her dildeki adresi (slug'lar dile göre farklı, eşleşme id ile).
 * Yalnızca o dilde gövdesi olan, yani detay sayfası üretilen diller döner.
 */
export async function postLocalizedPaths(id: string) {
  const entries = await Promise.all(
    locales.map(async (locale) => {
      const { blog } = await getDictionary(locale);
      const post = blog.posts.find((p) => p.id === id && p.body);
      return post
        ? ([locale, localizePath(`/blog/${post.slug}`, locale)] as const)
        : null;
    }),
  );
  return Object.fromEntries(entries.filter((e) => e !== null)) as Partial<
    Record<Locale, string>
  >;
}
