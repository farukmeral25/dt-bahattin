import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { BlogCard } from "@/features/blog/blog-card";
import { BlockContent } from "@/features/blog/post-article";
import { formatPostDate, postHref, type BlogPost } from "@/features/blog/posts";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import type { Treatment } from "./repository";

type TreatmentArticleProps = {
  locale: Locale;
  treatment: Treatment;
  others: { id: string; name: string; href: string }[];
  related: BlogPost[];
  copy: Dictionary["treatments"];
  blog: Dictionary["blog"];
};

/** Tedavi detay sayfası — blog yazısı düzeniyle aynı aile. */
export function TreatmentArticle({
  locale,
  treatment,
  others,
  related,
  copy,
  blog,
}: TreatmentArticleProps) {
  const { page } = copy;

  return (
    <>
      <article className="container-site pt-[clamp(48px,7vw,96px)]">
        <Link
          href={localizePath("/tedaviler", locale)}
          className="inline-flex gap-2 text-sm font-medium text-muted"
        >
          {page.back}
        </Link>

        <header className="mt-8 max-w-[780px]">
          <p className="kicker">{copy.kicker}</p>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] leading-[1.05] font-normal tracking-[-0.02em] text-pretty">
            {treatment.name}
          </h1>
          <p className="mt-[22px] text-[clamp(17px,1.4vw,20px)] leading-relaxed font-light text-pretty text-body">
            {treatment.lead}
          </p>
        </header>

        {treatment.facts.length > 0 && (
          <dl className="mt-8 grid max-w-[780px] grid-cols-3 gap-3 tab:mt-10 tab:gap-5">
            {treatment.facts.map((fact) => (
              <div key={fact.label} className="border-t border-line pt-4">
                <dt className="label-sm">{fact.label}</dt>
                <dd className="mt-1.5 text-[13px] leading-snug tab:text-[15px] tab:leading-normal">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-[clamp(40px,5vw,64px)] grid items-start gap-[clamp(32px,6vw,96px)] tab:grid-cols-[1fr_300px]">
          <div className="max-w-[720px] text-[17px] leading-[1.75] text-pretty text-prose">
            <BlockContent blocks={treatment.body} />
          </div>

          <aside className="flex flex-col gap-5 tab:sticky tab:top-[110px]">
            <div className="rounded-[20px] bg-ink p-7 text-ivory">
              <div className="text-xs tracking-[0.18em] text-gold uppercase">
                {page.ctaKicker}
              </div>
              <div className="mt-2.5 font-serif text-2xl leading-[1.2]">
                {page.ctaTitle}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                {page.ctaText}
              </p>
              <Link
                href={localizePath("/#randevu", locale)}
                className="mt-5 block rounded-full bg-gold p-3.5 text-center text-sm font-semibold text-ink transition-colors hover:bg-ivory hover:text-ink"
              >
                {page.cta}
              </Link>
            </div>

            <nav
              aria-label={page.others}
              className="rounded-[20px] border border-ink/10 p-6"
            >
              <div className="text-xs tracking-[0.18em] text-muted uppercase">
                {page.others}
              </div>
              <ul className="mt-3.5 flex flex-col gap-2.5">
                {others.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href} className="text-[15px]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </article>

      {treatment.faq.length > 0 && (
        <section className="mt-[clamp(72px,9vw,130px)] bg-sand py-section">
          <div className="container-site grid gap-[clamp(32px,6vw,96px)] tab:grid-cols-[0.8fr_1.2fr]">
            <h2 className="heading-section">{page.faqTitle}</h2>
            <Accordion items={treatment.faq} />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="container-site py-section">
          <h2 className="heading-section">{page.related}</h2>
          <div className="mt-[clamp(32px,4vw,56px)] grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-x-7 gap-y-10">
            {related.map((post) => (
              <BlogCard
                key={post.id}
                href={postHref(post, locale)}
                title={post.title}
                image={post.image?.url}
                imagePlaceholder={blog.categories[post.category]}
                meta={
                  <>
                    <span className="text-gold">
                      {blog.categories[post.category]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.date}>
                      {formatPostDate(post.date, locale)}
                    </time>
                  </>
                }
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
