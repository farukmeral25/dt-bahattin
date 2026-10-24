import { siteConfig } from "@/config/site";

/**
 * schema.org yapılandırılmış veri üreticileri.
 * Google zengin sonuçları ve yerel arama (Haritalar) için önemlidir.
 */

const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

export function dentistSchema() {
  const { address, contact, social } = siteConfig;
  const sameAs = Object.values(social).filter(Boolean);
  const hasGeo = address.geo.latitude !== 0 || address.geo.longitude !== 0;

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": absoluteUrl("/#dentist"),
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl(),
    image: absoluteUrl(siteConfig.ogImage),
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.district,
      addressRegion: address.city,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    ...(hasGeo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: address.geo.latitude,
        longitude: address.geo.longitude,
      },
    }),
    ...(address.mapsUrl ? { hasMap: address.mapsUrl } : {}),
    openingHours: siteConfig.openingHours,
    ...(sameAs.length > 0 && { sameAs }),
    employee: physicianSchema(),
  };
}

export function physicianSchema() {
  return {
    "@type": "Person",
    name: siteConfig.doctor.name,
    jobTitle: siteConfig.doctor.title,
    worksFor: { "@id": absoluteUrl("/#dentist") },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: absoluteUrl(),
    inLanguage: siteConfig.language,
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
