import { phoneUrl, whatsappUrl } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries/tr";

type StickyCtaProps = {
  common: Dictionary["common"];
};

/** Mobilde sabit "Ara" + "WhatsApp" çubuğu (≤860px). */
export function StickyCta({ common }: StickyCtaProps) {
  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-4 z-[60] flex gap-2.5 tab:hidden">
      <a
        href={phoneUrl}
        className="pointer-events-auto flex-1 rounded-full border border-ink/20 bg-ivory p-3.5 text-center text-sm font-medium text-ink shadow-[0_10px_30px_rgb(42_30_24/0.15)] hover:text-ink"
      >
        {common.call}
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex-1 rounded-full bg-ink p-3.5 text-center text-sm font-medium text-ivory shadow-[0_10px_30px_rgb(42_30_24/0.25)] hover:text-ivory"
      >
        {common.whatsapp}
      </a>
    </div>
  );
}
