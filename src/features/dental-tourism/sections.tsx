import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { ButtonLink, ExternalButtonLink } from "@/components/ui/button-link";
import { ImageSlot } from "@/components/ui/image-slot";
import { images } from "@/config/images";
import { whatsappUrl } from "@/config/site";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import { ConsultForm } from "./consult-form";

type Tourism = Dictionary["tourism"];

export function TourismHero({
  hero,
  whatsapp,
}: {
  hero: Tourism["hero"];
  whatsapp: string;
}) {
  return (
    <section className="container-site pt-[clamp(56px,8vw,110px)] pb-[clamp(40px,5vw,72px)]">
      <div className="grid items-center gap-[clamp(32px,5vw,72px)] tab:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-rise">
          <p className="kicker">{hero.kicker}</p>
          <h1 className="heading-page">{hero.title}</h1>
          <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed font-light text-pretty text-body">
            {hero.text}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#gorusme">{hero.cta}</ButtonLink>
            <ExternalButtonLink href={whatsappUrl} variant="outline">
              {whatsapp}
            </ExternalButtonLink>
          </div>
        </div>
        <ImageSlot
          src={images.tourism.hero}
          alt={hero.imageAlt}
          placeholder={hero.imageAlt}
          priority
          sizes="(max-width: 860px) 100vw, 45vw"
          className="aspect-[4/5] animate-rise-late rounded-3xl"
        />
      </div>
    </section>
  );
}

export function TourismStats({ stats }: { stats: Tourism["stats"] }) {
  return (
    <section className="bg-ink py-[clamp(56px,7vw,96px)] text-ivory">
      <dl className="container-site grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(24px,3vw,48px)]">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="mt-3 text-[15px] leading-relaxed text-ivory/75">
              {stat.label}
            </dt>
            <dd className="font-serif text-[40px] leading-none text-gold">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function TourismJourney({ journey }: { journey: Tourism["journey"] }) {
  return (
    <section className="container-site py-section">
      <p className="kicker">{journey.kicker}</p>
      <h2 className="max-w-[720px] heading-section">{journey.title}</h2>
      <ol className="mt-section-head grid gap-[clamp(24px,3vw,40px)] tab:grid-cols-2">
        {journey.steps.map((step, i) => (
          <li
            key={step.title}
            className="overflow-hidden rounded-[20px] border border-line-soft bg-white"
          >
            <ImageSlot
              src={images.tourism.steps[i]}
              alt={step.imageAlt}
              placeholder={step.imageAlt}
              sizes="(max-width: 860px) 100vw, 50vw"
              className="aspect-video"
            />
            <div className="px-7 pt-6 pb-7">
              <div className="font-serif text-sm tracking-[0.14em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2.5 font-serif text-[26px] leading-[1.2] font-normal">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-pretty text-body">
                {step.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function TourismTreatments({
  locale,
  treatments,
}: {
  locale: Locale;
  treatments: Tourism["treatments"];
}) {
  return (
    <section className="border-t border-ink/10 bg-sand">
      <div className="container-site py-[clamp(56px,7vw,96px)]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">{treatments.kicker}</p>
            <h2 className="font-serif text-[clamp(30px,3.5vw,48px)] leading-[1.1] font-normal tracking-[-0.02em]">
              {treatments.title}
            </h2>
          </div>
          <Link
            href={localizePath("/#tedaviler", locale)}
            className="border-b border-ink pb-1 text-[15px] font-medium"
          >
            {treatments.all}
          </Link>
        </div>
        <ul className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4">
          {treatments.items.map((item) => (
            <li key={item.name} className="rounded-2xl bg-ivory p-[26px]">
              <h3 className="font-serif text-[22px] font-normal">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {item.text}
              </p>
              <div className="mt-3.5 text-xs tracking-[0.1em] text-muted uppercase">
                {item.duration}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TourismConsult({
  consult,
  common,
}: {
  consult: Tourism["consult"];
  common: Dictionary["common"];
}) {
  return (
    <section id="gorusme" className="bg-ink py-section text-ivory">
      <div className="container-site grid items-start gap-[clamp(32px,6vw,96px)] tab:grid-cols-2">
        <div>
          <p className="kicker">{consult.kicker}</p>
          <h2 className="heading-cta">{consult.title}</h2>
          <ol className="mt-10 grid gap-[22px]">
            {consult.steps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[36px_1fr] gap-4">
                <span className="font-serif text-[22px] text-gold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ivory/70">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <ConsultForm copy={consult} common={common.form} />
      </div>
    </section>
  );
}

export function TourismFaq({ faq }: { faq: Tourism["faq"] }) {
  return (
    <section className="container-site py-section">
      <div className="grid gap-[clamp(32px,6vw,96px)] tab:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="kicker">{faq.kicker}</p>
          <h2 className="heading-section">{faq.title}</h2>
        </div>
        <Accordion items={faq.items} />
      </div>
    </section>
  );
}
