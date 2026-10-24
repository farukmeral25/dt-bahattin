export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];

/** Varsayılan dil URL öneki almaz: /blog (tr), /en/blog (en). */
export const defaultLocale: Locale = "tr";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const ogLocales: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
};

/**
 * Dilden bağımsız yolu ("/blog", "/#randevu") verilen dile göre önekler.
 * "/" + tr → "/", "/" + en → "/en", "/#sss" + en → "/en#sss"
 */
export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}
