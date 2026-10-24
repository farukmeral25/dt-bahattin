import { Accordion } from "@/components/ui/accordion";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import { SectionNumber } from "./section-number";

type FaqProps = {
  faq: Dictionary["home"]["faq"];
};

export function Faq({ faq }: FaqProps) {
  return (
    <section id="sss" className="bg-sand py-section">
      <div className="container-site grid gap-[clamp(32px,6vw,96px)] tab:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="kicker">
            <SectionNumber section="faq" />
            {faq.kicker}
          </p>
          <h2 className="heading-section">{faq.title}</h2>
          <p className="mt-5 text-[15px] leading-[1.65] text-body">
            {faq.text}
          </p>
        </div>
        <Accordion items={faq.items} mobileLimit={4} moreLabel={faq.showAll} />
      </div>
    </section>
  );
}
