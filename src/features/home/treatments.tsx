import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/tr";

type TreatmentsProps = {
  treatments: Dictionary["home"]["treatments"];
  items: { id: string; name: string; summary: string; href: string }[];
};

/** Açıklamalı tedavi kartları; her kart kendi tedavi sayfasına gider. */
export function Treatments({ treatments, items }: TreatmentsProps) {
  return (
    <section
      id="tedaviler"
      // Mobilde gösterilmez; tedavilere hamburger menüden (/tedaviler) ulaşılır
      className="bg-ink py-section text-ivory max-tab:hidden"
    >
      <div className="container-site">
        <div className="mb-[clamp(32px,5vw,72px)] flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">02 — {treatments.kicker}</p>
            <h2 className="heading-section">{treatments.title}</h2>
          </div>
          <p className="max-w-[380px] text-[15px] leading-relaxed font-light text-ivory/70">
            {treatments.text}
          </p>
        </div>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-px border border-line-dark bg-line-dark">
          {items.map((item, i) => (
            <li key={item.id} className="flex">
              <Link
                href={item.href}
                className="group flex min-h-[200px] w-full flex-col gap-3.5 bg-ink px-7 py-8 text-ivory transition-colors hover:bg-ink-hover hover:text-ivory"
              >
                <span className="text-xs tracking-[0.14em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[26px] font-normal">
                  {item.name}
                </h3>
                <span className="mt-auto text-sm leading-relaxed text-ivory/65">
                  {item.summary}
                </span>
              </Link>
            </li>
          ))}
          <li className="flex min-h-[200px] flex-col gap-3.5 bg-gold px-7 py-8 text-ink">
            <span className="font-serif text-[26px] leading-[1.2]">
              {treatments.ask}
            </span>
            <a
              href="#randevu"
              className="mt-auto self-start border-b border-ink text-sm font-semibold text-ink hover:text-ink"
            >
              {treatments.askCta}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
