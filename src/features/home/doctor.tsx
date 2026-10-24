import { ImageSlot } from "@/components/ui/image-slot";
import { images } from "@/config/images";
import type { Dictionary } from "@/i18n/dictionaries/tr";

type DoctorProps = {
  doctor: Dictionary["home"]["doctor"];
  cta: string;
};

export function Doctor({ doctor, cta }: DoctorProps) {
  return (
    <section id="hekim" className="container-site py-section">
      <div className="grid items-start gap-[clamp(32px,6vw,96px)] tab:grid-cols-[0.8fr_1.2fr]">
        <div className="tab:sticky tab:top-[110px]">
          <ImageSlot
            src={images.doctor}
            alt={doctor.photoAlt}
            placeholder={doctor.photoAlt}
            sizes="(max-width: 860px) 100vw, 40vw"
            className="aspect-[3/4] rounded-[20px]"
          />
        </div>
        <div>
          <p className="kicker">01 — {doctor.kicker}</p>
          <h2 className="heading-section">{doctor.title}</h2>
          <p className="mt-7 text-[clamp(17px,1.4vw,21px)] leading-relaxed font-light text-pretty text-body">
            {doctor.lead}
          </p>
          {doctor.text.map((paragraph) => (
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
