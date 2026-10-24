"use client";

import Link from "next/link";
import { useState } from "react";
import { ImageSlot } from "@/components/ui/image-slot";
import { PillTabs } from "@/components/ui/pill-tabs";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import type { BlogCategory } from "@/i18n/types";
import { BlogCard } from "./blog-card";
import { formatPostDate, postHref, type BlogPost } from "./posts";

type Filter = "all" | BlogCategory;

type BlogListProps = {
  locale: Locale;
  copy: Dictionary["blog"];
  posts: BlogPost[];
};

/** Kategori filtresi + öne çıkan yazı + yazı ızgarası. */
export function BlogList({ locale, copy, posts }: BlogListProps) {
  const [filter, setFilter] = useState<Filter>("all");

  const options: { value: Filter; label: string }[] = [
    { value: "all", label: copy.all },
    ...(Object.keys(copy.categories) as BlogCategory[]).map((key) => ({
      value: key,
      label: copy.categories[key],
    })),
  ];

  const featured = posts.find((p) => p.featured);
  const showFeatured = filter === "all" && featured;
  const visible = posts.filter((p) =>
    filter === "all" ? !p.featured : p.category === filter,
  );

  return (
    <>
      <div className="container-site -mt-[clamp(32px,4vw,56px)] pb-[clamp(32px,4vw,56px)]">
        <PillTabs
          options={options}
          value={filter}
          onChange={setFilter}
          label={copy.kicker}
        />
      </div>

      {showFeatured && (
        <section className="container-site pb-[clamp(40px,5vw,72px)]">
          <article className="relative grid items-center gap-[clamp(24px,4vw,56px)] overflow-hidden rounded-3xl bg-ink text-ivory nav:grid-cols-[1.2fr_0.8fr]">
            <ImageSlot
              src={featured.image?.url}
              alt={featured.image?.alt ?? featured.title}
              placeholder={copy.categories[featured.category]}
              priority
              sizes="(max-width: 1060px) 100vw, 60vw"
              className="aspect-[16/10] min-h-[280px] bg-ink-hover"
            />
            <div className="p-[clamp(24px,3vw,48px)] nav:pl-0">
              <div className="flex gap-3.5 text-xs tracking-[0.14em] text-gold uppercase">
                {copy.categories[featured.category]}
                <span className="text-ivory/40">·</span>
                <span className="text-ivory/60">
                  {featured.readMinutes} {copy.readTime}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-[clamp(28px,3vw,42px)] leading-[1.15] font-normal tracking-[-0.01em] text-pretty">
                {/* Kartın tamamı tıklanabilir (after:inset-0) */}
                <Link
                  href={postHref(featured, locale)}
                  className="text-ivory after:absolute after:inset-0 hover:text-ivory"
                >
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-[18px] text-[15px] leading-[1.65] font-light text-ivory/70">
                {featured.excerpt}
              </p>
              <span
                aria-hidden="true"
                className="mt-7 inline-block border-b border-gold pb-[3px] text-sm font-medium text-gold"
              >
                {copy.readMore}
              </span>
            </div>
          </article>
        </section>
      )}

      <section className="pb-section container-site">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-x-7 gap-y-10">
          {visible.map((post) => (
            <BlogCard
              key={post.slug}
              href={postHref(post, locale)}
              title={post.title}
              image={post.image?.url}
              imagePlaceholder={copy.categories[post.category]}
              excerpt={post.excerpt}
              meta={
                <>
                  <span className="text-gold">
                    {copy.categories[post.category]}
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
        {visible.length === 0 && (
          <p className="mt-10 text-[15px] text-muted">{copy.empty}</p>
        )}
      </section>
    </>
  );
}
