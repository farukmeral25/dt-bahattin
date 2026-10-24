import Link from "next/link";
import { BlogCard } from "@/features/blog/blog-card";
import { postHref, type BlogPost } from "@/features/blog/posts";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";

type BlogPreviewProps = {
  locale: Locale;
  copy: Dictionary["home"]["blog"];
  blog: Dictionary["blog"];
  /** Son yazılar (yeniden eskiye) */
  posts: BlogPost[];
};

export function BlogPreview({ locale, copy, blog, posts }: BlogPreviewProps) {
  const blogHref = localizePath("/blog", locale);

  return (
    <section id="blog" className="border-t border-ink/10">
      <div className="container-site py-section">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">06 — {copy.kicker}</p>
            <h2 className="heading-section">{copy.title}</h2>
          </div>
          <Link
            href={blogHref}
            className="border-b border-ink pb-1 text-[15px] font-medium"
          >
            {copy.all}
          </Link>
        </div>
        <div className="mt-[clamp(32px,5vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5 tab:gap-7">
          {posts.slice(0, 3).map((post) => (
            <BlogCard
              compact
              key={post.slug}
              href={postHref(post, locale)}
              title={post.title}
              image={post.image?.url}
              imagePlaceholder={blog.categories[post.category]}
              meta={blog.categories[post.category]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
