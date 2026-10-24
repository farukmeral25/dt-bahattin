import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  title?: string;
  description?: string;
  /** Kök dizine göre yol, örn. "/tedaviler/implant" */
  path?: string;
  image?: string;
  noIndex?: boolean;
};

/** Root layout'ta kullanılan varsayılan metadata. */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.doctor.name }],
  creator: siteConfig.name,
  formatDetection: { telephone: true, address: true, email: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
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

/** Sayfa bazlı metadata üretir; canonical ve OG alanlarını tutarlı tutar. */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image,
  noIndex = false,
}: PageMetadataInput = {}): Metadata {
  const images = image ? [{ url: image }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title ?? siteConfig.title,
      description,
      url: path,
      images,
    },
    twitter: {
      title: title ?? siteConfig.title,
      description,
      images,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
