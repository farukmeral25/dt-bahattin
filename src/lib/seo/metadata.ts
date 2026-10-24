import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import {
  defaultLocale,
  localizePath,
  locales,
  ogLocales,
  type Locale,
} from "@/i18n/config";

type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  /** Dilden bağımsız yol, örn. "/blog" */
  path: string;
  /** true ise başlık şablonu uygulanmaz (ana sayfa) */
  absoluteTitle?: boolean;
  image?: string;
  noIndex?: boolean;
  /**
   * Dile göre farklı slug'ı olan sayfalar için hazır (öneki eklenmiş) yollar;
   * verilirse canonical ve hreflang bunlardan üretilir.
   */
  localizedPaths?: Record<Locale, string>;
  /** Yalnızca bu dillerde yayınlanan sayfalar (hreflang'e diğerleri girmez) */
  availableLocales?: readonly Locale[];
};

/** Her dil için hreflang alternatifleri (+ x-default). */
export function languageAlternates(
  path: string | Record<Locale, string>,
  available: readonly Locale[] = locales,
) {
  const pathFor = (l: Locale) =>
    typeof path === "string" ? localizePath(path, l) : path[l];
  return {
    ...Object.fromEntries(available.map((l) => [l, pathFor(l)])),
    "x-default": pathFor(defaultLocale),
  };
}

/** Dil bazlı root layout metadata'sı. */
export function rootMetadata(locale: Locale, description: string): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [...siteConfig.keywords],
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.doctor.name }],
    creator: siteConfig.name,
    formatDetection: { telephone: true, address: true, email: true },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: ogLocales[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocales[l]),
    },
    twitter: { card: "summary_large_image" },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

/** Sayfa bazlı metadata; canonical, hreflang ve OG alanlarını tutarlı tutar. */
export function buildMetadata({
  locale,
  title,
  description,
  path,
  absoluteTitle = false,
  image,
  noIndex = false,
  localizedPaths,
  availableLocales,
}: PageMetadataInput): Metadata {
  const url = localizedPaths?.[locale] ?? localizePath(path, locale);
  // Sayfa openGraph nesnesi üst seviyeyi tamamen ezdiği için varsayılan
  // paylaşım görseli burada açıkça veriliyor.
  const images = [
    image
      ? { url: image }
      : { url: "/opengraph-image", width: 1200, height: 630 },
  ];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(localizedPaths ?? path, availableLocales),
    },
    openGraph: { title, description, url, images },
    twitter: { title, description, images },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
