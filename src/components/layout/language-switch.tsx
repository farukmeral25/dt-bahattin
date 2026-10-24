import Link from "next/link";
import { localizePath, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

type LanguageSwitchProps = {
  locale: Locale;
  path: string;
  /** Verilirse path yerine kullanılır (dile göre slug değişen sayfalar) */
  hrefs?: Record<Locale, string>;
  label: string;
};

/** TR / EN pill seçici — dil URL'de tutulur (/ ve /en). */
export function LanguageSwitch({
  locale,
  path,
  hrefs,
  label,
}: LanguageSwitchProps) {
  return (
    <nav
      aria-label={label}
      className="flex overflow-hidden rounded-full border border-ink/18 text-xs leading-none font-semibold tracking-[0.06em]"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={hrefs?.[l] ?? localizePath(path, l)}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            className={cn(
              "px-3 py-2 uppercase",
              active
                ? "bg-ink text-ivory hover:text-ivory"
                : "text-ink hover:text-gold",
            )}
          >
            {l}
          </Link>
        );
      })}
    </nav>
  );
}
