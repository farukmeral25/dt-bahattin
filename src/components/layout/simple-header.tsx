import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { siteConfig } from "@/config/site";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";

type SimpleHeaderProps = {
  locale: Locale;
  common: Dictionary["common"];
};

/** Yasal sayfalar için sade header: logo + "← Ana sayfa". */
export function SimpleHeader({ locale, common }: SimpleHeaderProps) {
  const home = localizePath("/", locale);
  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-ivory/88 backdrop-blur-[14px]">
      <div className="container-site flex items-center justify-between gap-6 py-[18px]">
        <Link href={home} className="flex items-center gap-2.5 text-ink">
          <BrandMark />
          <span className="flex items-baseline gap-2.5">
            <span className="font-serif text-[22px] tracking-[-0.01em] whitespace-nowrap">
              {siteConfig.name}
            </span>
            <span className="hidden text-[11px] tracking-[0.18em] whitespace-nowrap text-muted uppercase sm:inline">
              {common.navSub}
            </span>
          </span>
        </Link>
        <Link href={home} className="text-sm font-medium whitespace-nowrap">
          {common.backHome}
        </Link>
      </div>
    </header>
  );
}
