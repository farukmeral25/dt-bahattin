import { ImageSlot } from "@/components/ui/image-slot";
import { MobileMore } from "@/components/ui/mobile-more";
import { images } from "@/config/images";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import { SectionNumber } from "./section-number";

type DoctorProps = {
  doctor: Dictionary["home"]["doctor"];
  cta: string;
  readMore: string;
};

type Credential = { org: string; title: string; note?: string };

function CredentialGroup({
  title,
  items,
}: {
  title: string;
  items: Credential[];
}) {
  return (
    <div>
      <h3 className="label-sm">{title}</h3>
      <ul className="mt-3 flex flex-col gap-4">
        {items.map((item) => (
          <li key={item.title}>
            <div className="font-serif text-lg leading-[1.3]">{item.title}</div>
            <div className="mt-1 text-[13px] text-muted">{item.org}</div>
            {item.note && (
              <div className="mt-1 text-[13px] text-gold">{item.note}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Doctor({ doctor, cta, readMore }: DoctorProps) {
  const { credentials } = doctor;
  return (
    <section id="hekim" className="container-site py-section">
      <div className="grid items-start gap-[clamp(32px,6vw,96px)] tab:grid-cols-[0.8fr_1.2fr]">
        {/* Mobilde aynı portre hero'da gösteriliyor */}
        <div className="max-tab:hidden tab:sticky tab:top-[110px]">
          <ImageSlot
            src={images.doctor}
            alt={doctor.photoAlt}
            placeholder={doctor.photoAlt}
            sizes="(max-width: 860px) 100vw, 40vw"
            className="aspect-[3/4] rounded-[20px]"
          />
        </div>
        <div>
          <p className="kicker">
            <SectionNumber section="doctor" />
            {doctor.kicker}
          </p>
          <h2 className="heading-section">{doctor.title}</h2>
          <p className="mt-7 text-[clamp(17px,1.4vw,21px)] leading-relaxed font-light text-pretty text-body">
            {doctor.lead}
          </p>
          {doctor.text.slice(0, 1).map((paragraph) => (
            <p
              key={paragraph}
              className="mt-[18px] text-base leading-[1.7] text-pretty text-body"
            >
              {paragraph}
            </p>
          ))}
          <MobileMore label={readMore}>
            {doctor.text.slice(1).map((paragraph) => (
              <p
                key={paragraph}
                className="mt-[18px] text-base leading-[1.7] text-pretty text-body"
              >
                {paragraph}
              </p>
            ))}
            <dl className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
              {doctor.facts.map((fact) => (
                <div key={fact.label} className="border-t border-line pt-4">
                  <dt className="label-sm">{fact.label}</dt>
                  <dd className="mt-1.5 text-[15px] leading-normal">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            {/* Yerel <details>: JS gerektirmez, kapalıyken de içerik HTML'de */}
            <details className="group mt-8 border-y border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {credentials.summary}
                <span
                  aria-hidden="true"
                  className="text-[22px] text-gold transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="grid gap-8 pb-7 sm:grid-cols-2">
                <CredentialGroup
                  title={credentials.congressesTitle}
                  items={credentials.congresses}
                />
                <CredentialGroup
                  title={credentials.certificatesTitle}
                  items={credentials.certificates}
                />
              </div>
            </details>
          </MobileMore>
          <a
            href="#randevu"
            className="mt-10 inline-flex items-center gap-2.5 border-b border-ink pb-1 text-[15px] font-medium hover:border-gold"
          >
            <span>{cta}</span> <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
