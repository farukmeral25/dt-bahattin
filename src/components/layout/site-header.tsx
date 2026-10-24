import Link from "next/link";
import { mainNav, type PagePath } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import { cn } from "@/lib/cn";
import { buttonClass } from "@/components/ui/button-link";
import { LanguageSwitch } from "./language-switch";
import { MobileMenu } from "./mobile-menu";

type SiteHeaderProps = {
  locale: Locale;
  common: Dictionary["common"];
  /** Geçerli sayfa — aktif menü öğesi ve dil seçici için */
  path: PagePath;
  /** Dile göre farklı slug'ı olan sayfalar (blog yazısı) için dil linkleri */
  languageHrefs?: Record<Locale, string>;
  /** Sağdaki buton; varsayılan "Randevu Al" → randevu bölümü */
  cta?: { label: string; href: string };
};

export function SiteHeader({
  locale,
  common,
  path,
  languageHrefs,
  cta,
}: SiteHeaderProps) {
  const isHome = path === "/";
  // Ana sayfada çapalar doğrudan kayar; alt sayfalarda ana sayfaya döner.
  const hrefFor = (href: string) =>
    isHome ? href.slice(1) : localizePath(href, locale);

  const links = mainNav.map((item) => ({
    href: hrefFor(item.href),
    label: common.nav[item.key],
    active: item.page === path,
  }));
  const ctaLink = cta ?? {
    label: common.navCta,
    href: hrefFor("/#randevu"),
  };
  const homeHref = isHome ? "#top" : localizePath("/", locale);
  const languageSwitch = (
    <LanguageSwitch
      locale={locale}
      path={path}
      hrefs={languageHrefs}
      label={common.languageLabel}
    />
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-ivory/88 backdrop-blur-[14px]">
      <div className="relative container-site flex items-center justify-between gap-6 py-[18px]">
        <Link href={homeHref} className="flex items-baseline gap-2.5 text-ink">
          <span className="font-serif text-[22px] tracking-[-0.01em] whitespace-nowrap">
            {siteConfig.name}
          </span>
          <span className="hidden text-[11px] tracking-[0.18em] whitespace-nowrap text-muted uppercase min-[1200px]:inline sm:inline nav:hidden">
            {common.navSub}
          </span>
        </Link>

        <nav
          aria-label={common.navSub}
          className="hidden gap-[clamp(14px,2vw,28px)] text-sm font-medium whitespace-nowrap nav:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={cn(link.active && "text-gold")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <div className="hidden sm:block">{languageSwitch}</div>
          <a
            href={ctaLink.href}
            className={buttonClass("solid-sm", "max-nav:hidden")}
          >
            {ctaLink.label}
          </a>
          <MobileMenu
            links={links}
            cta={ctaLink}
            openLabel={common.menuOpen}
            closeLabel={common.menuClose}
          >
            {languageSwitch}
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
