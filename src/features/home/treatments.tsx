import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/tr";

type TreatmentsProps = {
  treatments: Dictionary["home"]["treatments"];
  items: { id: string; name: string; summary: string; href: string }[];
  allHref: string;
};

/**
 * Masaüstünde açıklamalı kart ızgarası; mobilde yalnızca isimlerden oluşan
 * iki sütunlu kompakt liste (detay tedavi sayfalarında).
 */
export function Treatments({ treatments, items, allHref }: TreatmentsProps) {
  return (
    <section id="tedaviler" className="bg-ink py-section text-ivory">
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

        {/* Mobil: kompakt isim listesi */}
        <ul className="grid grid-cols-2 gap-px border border-line-dark bg-line-dark tab:hidden">
          {items.map((item, i) => (
            <li key={item.id} className="flex">
              <Link
                href={item.href}
                className="flex w-full flex-col gap-1.5 bg-ink px-4 py-4 text-ivory active:bg-ink-hover"
              >
                <span className="text-[11px] tracking-[0.14em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-[17px] leading-[1.25]">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
          <li className="flex">
            <Link
              href={allHref}
              className="flex w-full items-end bg-gold px-4 py-4 text-sm font-semibold text-ink"
            >
              {treatments.all}
            </Link>
          </li>
        </ul>

        {/* Masaüstü / tablet: açıklamalı kartlar */}
        <ul className="hidden grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-px border border-line-dark bg-line-dark tab:grid">
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
