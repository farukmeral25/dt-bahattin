import { ButtonLink } from "@/components/ui/button-link";
import { ImageSlot } from "@/components/ui/image-slot";
import { images } from "@/config/images";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import { SectionNumber } from "./section-number";

type TourismPreviewProps = {
  locale: Locale;
  tourism: Dictionary["home"]["tourism"];
};

export function TourismPreview({ locale, tourism }: TourismPreviewProps) {
  const pageHref = localizePath("/dental-turizm", locale);

  return (
    <section id="dental-turizm" className="container-site py-section">
      <div className="grid items-center gap-[clamp(32px,6vw,96px)] tab:grid-cols-2">
        <div>
          <p className="kicker">
            <SectionNumber section="tourism" />
            {tourism.kicker}
          </p>
          <h2 className="heading-section">{tourism.title}</h2>
          <p className="mt-6 max-w-[480px] text-base leading-[1.65] font-light text-pretty text-body">
            {tourism.text}
          </p>
          <ol className="mt-10 border-t border-line">
            {tourism.steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[48px_1fr] gap-4 border-b border-line py-[18px]"
              >
                <span className="font-serif text-2xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[17px] font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={`${pageHref}#gorusme`}>{tourism.cta}</ButtonLink>
            <ButtonLink
              href={pageHref}
              variant="underline"
              className="px-2 py-4"
            >
              {tourism.more}
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {tourism.imageAlts.map((alt, i) => (
            <ImageSlot
              key={alt}
              src={images.tourism.preview[i]}
              alt={alt}
              placeholder={alt}
              sizes="(max-width: 860px) 50vw, 25vw"
              className={
                i === 0
                  ? "mt-10 aspect-[3/4] rounded-2xl"
                  : "aspect-[3/4] rounded-2xl"
              }
            />
          ))}
          <dl className="col-span-2 grid grid-cols-3 gap-4 rounded-2xl bg-sand p-6 text-center">
            {tourism.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs text-muted">{stat.label}</dt>
                <dd className="font-serif text-[28px]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
