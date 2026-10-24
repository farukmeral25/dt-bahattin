type PageIntroProps = {
  kicker: string;
  title: string;
  text: string;
};

/** Alt sayfaların başlık bloğu (Blog, Galeri). */
export function PageIntro({ kicker, title, text }: PageIntroProps) {
  return (
    <section className="container-site pt-[clamp(56px,8vw,110px)] pb-[clamp(32px,4vw,56px)]">
      <p className="kicker">{kicker}</p>
      <h1 className="max-w-[760px] heading-page">{title}</h1>
      <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed font-light text-body">
        {text}
      </p>
    </section>
  );
}
