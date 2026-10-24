import type { Dictionary } from "@/i18n/dictionaries/tr";
import { SectionNumber } from "./section-number";

type WhyUsProps = {
  why: Dictionary["home"]["why"];
};

export function WhyUs({ why }: WhyUsProps) {
  return (
    <section id="neden" className="container-site py-section">
      <p className="kicker">
        <SectionNumber section="why" />
        {why.kicker}
      </p>
      <h2 className="max-w-[720px] heading-section">{why.title}</h2>
      <div className="mt-section-head grid grid-cols-2 gap-x-5 gap-y-8 tab:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] tab:gap-[clamp(24px,3vw,48px)]">
        {why.items.map((item, i) => (
          <div key={item.title}>
            <div className="font-serif text-[32px] leading-none text-gold tab:text-[44px]">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3 mb-1.5 text-[17px] font-medium tab:mt-[18px] tab:mb-2.5 tab:text-xl">
              {item.title}
            </h3>
            <p className="text-sm leading-[1.6] text-body tab:text-[15px] tab:leading-[1.65]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
