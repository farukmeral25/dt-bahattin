import Link from "next/link";
import { ImageSlot } from "@/components/ui/image-slot";
import { siteConfig } from "@/config/site";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import type { BlogBlock } from "@/i18n/types";
import { formatPostDate, postHref, type BlogPost } from "./posts";

type PostArticleProps = {
  locale: Locale;
  post: BlogPost;
  /** Detay sayfası olan ilgili yazılar */
  related: BlogPost[];
  blog: Dictionary["blog"];
  navSub: string;
};

const initials = siteConfig.doctor.name
  .split(" ")
  .map((part) => part[0])
  .join("");

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 mb-3.5 font-serif text-[28px] leading-[1.2] font-normal text-ink">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="my-10 rounded-[20px] bg-sand px-8 py-7 font-serif text-[22px] leading-[1.4] text-ink">
          {block.text}
        </blockquote>
      );
    case "ul":
      return (
        <ul className="grid list-disc gap-2 pl-[22px]">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p className="[&+p]:mt-7">{block.text}</p>;
  }
}

/** Blog yazısı detayı — "Blog Yazisi" tasarımı. */
export function PostArticle({
  locale,
  post,
  related,
  blog,
  navSub,
}: PostArticleProps) {
  const { post: copy } = blog;

  return (
    <article className="pb-section container-site pt-[clamp(48px,7vw,96px)]">
      <Link
        href={localizePath("/blog", locale)}
        className="inline-flex gap-2 text-sm font-medium text-muted"
      >
        {copy.back}
      </Link>

      <header className="mt-8 max-w-[780px]">
        <div className="flex flex-wrap gap-3 label-sm">
          <span className="text-gold">{blog.categories[post.category]}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatPostDate(post.date, locale)}</time>
          <span aria-hidden="true">·</span>
          <span>
            {post.readMinutes} {copy.readTime}
          </span>
        </div>
        <h1 className="mt-[18px] font-serif text-[clamp(34px,4.5vw,60px)] leading-[1.06] font-normal tracking-[-0.02em] text-pretty">
          {post.title}
        </h1>
        <p className="mt-[22px] text-[clamp(17px,1.4vw,20px)] leading-relaxed font-light text-pretty text-body">
          {post.lead ?? post.excerpt}
        </p>
        <div className="mt-7 flex items-center gap-3.5 border-t border-ink/12 pt-6">
          <div
            aria-hidden="true"
            className="grid size-11 place-items-center rounded-full bg-ink font-serif text-base tracking-[0.02em] text-ivory"
          >
            {initials}
          </div>
          <div>
            <div className="text-sm font-medium">{siteConfig.name}</div>
            <div className="text-[13px] text-muted">{navSub}</div>
          </div>
        </div>
      </header>

      <ImageSlot
        src={post.image}
        alt={post.title}
        placeholder={copy.coverAlt}
        priority
        sizes="(max-width: 1240px) 100vw, 1144px"
        className="mt-[clamp(32px,4vw,56px)] aspect-[21/9] rounded-3xl"
      />

      <div className="mt-[clamp(40px,5vw,64px)] grid items-start gap-[clamp(32px,6vw,96px)] tab:grid-cols-[1fr_300px]">
        <div className="max-w-[720px] text-[17px] leading-[1.75] text-pretty text-prose">
          {post.body?.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <aside className="flex flex-col gap-5 tab:sticky tab:top-[110px]">
          <div className="rounded-[20px] bg-ink p-7 text-ivory">
            <div className="text-xs tracking-[0.18em] text-gold uppercase">
              {copy.ctaKicker}
            </div>
            {post.ctaTitle && (
              <div className="mt-2.5 font-serif text-2xl leading-[1.2]">
                {post.ctaTitle}
              </div>
            )}
            <p className="mt-3 text-sm leading-relaxed text-ivory/70">
              {copy.ctaText}
            </p>
            <Link
              href={localizePath("/#randevu", locale)}
              className="mt-5 block rounded-full bg-gold p-3.5 text-center text-sm font-semibold text-ink transition-colors hover:bg-ivory hover:text-ink"
            >
              {copy.cta}
            </Link>
          </div>

          {related.length > 0 && (
            <nav
              aria-label={copy.related}
              className="rounded-[20px] border border-ink/10 p-6"
            >
              <div className="text-xs tracking-[0.18em] text-muted uppercase">
                {copy.related}
              </div>
              <div className="mt-3.5 flex flex-col gap-3.5">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={postHref(item, locale)}
                    className="font-serif text-[17px] leading-[1.3]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </aside>
      </div>
    </article>
  );
}
