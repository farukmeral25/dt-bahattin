import type { Dictionary } from "@/i18n/dictionaries/tr";

type WhyUsProps = {
  why: Dictionary["home"]["why"];
};

export function WhyUs({ why }: WhyUsProps) {
  return (
    <section id="neden" className="container-site py-section">
      <p className="kicker">03 — {why.kicker}</p>
      <h2 className="max-w-[720px] heading-section">{why.title}</h2>
      <div className="mt-section-head grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(24px,3vw,48px)]">
        {why.items.map((item, i) => (
          <div key={item.title}>
            <div className="font-serif text-[44px] leading-none text-gold">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-[18px] mb-2.5 text-xl font-medium">
              {item.title}
            </h3>
            <p className="text-[15px] leading-[1.65] text-body">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
