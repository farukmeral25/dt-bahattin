import Link from "next/link";
import { siteConfig } from "@/config/site";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";

type SiteFooterProps = {
  locale: Locale;
  common: Dictionary["common"];
};

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function SiteFooter({ locale, common }: SiteFooterProps) {
  // Statik export: yıl build anında hesaplanır, yıl değişince yeniden build yeterli.
  const year = new Date().getFullYear();

  return (
    // Mobilde sabit CTA çubuğu son satırı örtmesin diye alt boşluk
    <footer className="mt-auto border-t border-ink/10 pb-20 tab:pb-0">
      <div className="container-site flex flex-wrap items-center justify-between gap-5 py-10 text-[13px] text-muted">
        <div>
          <span className="font-serif text-lg text-ink">{siteConfig.name}</span>
          <span className="ml-3">© {year}</span>
        </div>
        <div className="flex gap-6">
          <a
            href={siteConfig.social.instagram}
            {...external}
            className="text-muted"
          >
            {common.footer.instagram}
          </a>
          <a
            href={siteConfig.address.mapsUrl}
            {...external}
            className="text-muted"
          >
            {common.footer.google}
          </a>
          <Link href={localizePath("/kvkk", locale)} className="text-muted">
            {common.footer.kvkk}
          </Link>
        </div>
      </div>
    </footer>
  );
}
