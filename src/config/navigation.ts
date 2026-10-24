export type NavItem = {
  label: string;
  href: string;
};

/** Sayfalar eklendikçe hem menü hem sitemap buradan güncellenir. */
export const mainNav: NavItem[] = [{ label: "Ana Sayfa", href: "/" }];
