import { ExternalButtonLink, ButtonLink } from "@/components/ui/button-link";
import { WhatsAppIcon } from "@/components/ui/icons";
import { ImageSlot } from "@/components/ui/image-slot";
import { images } from "@/config/images";
import { whatsappUrl } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries/tr";

type HeroProps = {
  hero: Dictionary["home"]["hero"];
  common: Dictionary["common"];
};

export function Hero({ hero, common }: HeroProps) {
  return (
    <section
      id="top"
      className="container-site pt-[clamp(48px,8vw,110px)] pb-[clamp(40px,6vw,80px)]"
    >
      <div className="grid items-center gap-[clamp(32px,5vw,72px)] tab:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-rise">
          <p className="kicker mb-[22px]">{hero.kicker}</p>
          <h1 className="heading-hero">{hero.title}</h1>
          <p className="mt-7 max-w-[520px] text-lead text-body">{hero.text}</p>
          <div className="mt-[38px] flex flex-wrap gap-3">
            <ButtonLink href="#randevu">{hero.cta}</ButtonLink>
            <ExternalButtonLink href={whatsappUrl} variant="outline">
              <WhatsAppIcon />
              {common.whatsapp}
            </ExternalButtonLink>
          </div>
          <dl className="mt-14 flex gap-9 border-t border-ink/12 pt-7">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-[13px] text-muted">{stat.label}</dt>
                <dd className="font-serif text-[30px]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-rise-late">
          <ImageSlot
            src={images.heroPortrait}
            alt={hero.portraitAlt}
            placeholder={hero.portraitAlt}
            priority
            sizes="(max-width: 860px) 100vw, 45vw"
            className="aspect-[4/5] rounded-[200px_200px_24px_24px]"
            // Dekupe portre: baş kesilmesin, kırpma alttan
            imageClassName="object-top"
          />
          <div className="absolute bottom-9 left-[-18px] rounded-2xl border border-ink/10 bg-ivory px-5 py-4 shadow-card max-tab:left-3">
            <div className="text-[11px] tracking-[0.16em] text-muted uppercase">
              {common.hoursLabel}
            </div>
            <div className="mt-1.5 text-sm leading-normal">
              {common.hours.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
