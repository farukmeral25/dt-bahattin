import { siteConfig } from "@/config/site";
import { localizePath, type Locale } from "@/i18n/config";

/**
 * schema.org yapılandırılmış veri üreticileri.
 * Google zengin sonuçları ve yerel arama (Haritalar) için önemlidir.
 */

const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

export function dentistSchema(locale: Locale, description: string) {
  const { address, contact, social } = siteConfig;
  const hasGeo = address.geo.latitude !== 0 || address.geo.longitude !== 0;

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": absoluteUrl("/#dentist"),
    name: siteConfig.name,
    description,
    url: absoluteUrl(localizePath("/", locale)),
    image: absoluteUrl("/opengraph-image"),
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.district,
      addressRegion: address.city,
      ...(address.postalCode ? { postalCode: address.postalCode } : {}),
      addressCountry: address.country,
    },
    ...(hasGeo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: address.geo.latitude,
            longitude: address.geo.longitude,
          },
        }
      : {}),
    hasMap: address.mapsUrl,
    areaServed: address.areaServed.map((name) => ({ "@type": "Place", name })),
    openingHours: siteConfig.openingHours,
    availableLanguage: ["tr", "en"],
    sameAs: [social.instagram],
    employee: {
      "@type": "Person",
      name: siteConfig.doctor.name,
      jobTitle: siteConfig.doctor.title,
      alumniOf: siteConfig.doctor.alumniOf,
      worksFor: { "@id": absoluteUrl("/#dentist") },
    },
  };
}

/** Tedavi sayfası: MedicalWebPage → MedicalProcedure, kliniğe bağlı. */
export function treatmentSchema(t: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: t.name,
    description: t.description,
    url: absoluteUrl(t.path),
    inLanguage: t.locale,
    about: { "@type": "MedicalProcedure", name: t.name },
    provider: { "@id": absoluteUrl("/#dentist") },
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: absoluteUrl(localizePath("/", locale)),
    inLanguage: locale,
    publisher: { "@id": absoluteUrl("/#dentist") },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  date: string;
  path: string;
  locale: Locale;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: post.locale,
    mainEntityOfPage: absoluteUrl(post.path),
    image: absoluteUrl(post.image ?? "/opengraph-image"),
    author: {
      "@type": "Person",
      name: `Dt. ${siteConfig.doctor.name}`,
      jobTitle: siteConfig.doctor.title,
    },
    publisher: { "@id": absoluteUrl("/#dentist") },
  };
}
