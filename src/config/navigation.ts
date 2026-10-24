import type { Dictionary } from "@/i18n/dictionaries/tr";
import { siteConfig } from "./site";

const { dentalTourism } = siteConfig.features;

/** Sitemap'e giren sayfalar (dilden bağımsız yollar). */
const allPages = ["/", "/blog", "/galeri", "/dental-turizm"] as const;
export type PagePath = (typeof allPages)[number];

export const pages = allPages.filter(
  (page) => dentalTourism || page !== "/dental-turizm",
);

type NavKey = keyof Dictionary["common"]["nav"];

/**
 * Header menüsü. Çapalar ana sayfa bölümlerine gider; Blog / Galeri /
 * Dental Turizm alt sayfalarında ilgili öğe aktif görünür.
 */
const nav: { key: NavKey; href: string; page?: PagePath }[] = [
  { key: "doctor", href: "/#hekim" },
  { key: "treatments", href: "/#tedaviler" },
  { key: "gallery", href: "/#galeri", page: "/galeri" },
  { key: "reviews", href: "/#yorumlar" },
  { key: "tourism", href: "/#dental-turizm", page: "/dental-turizm" },
  { key: "blog", href: "/#blog", page: "/blog" },
  { key: "faq", href: "/#sss" },
  { key: "contact", href: "/#iletisim" },
];

export const mainNav = nav.filter(
  (item) => dentalTourism || item.key !== "tourism",
);
