import Link from "next/link";
import { BlogCard } from "@/features/blog/blog-card";
import { getPosts, postHref } from "@/features/blog/posts";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";

type BlogPreviewProps = {
  locale: Locale;
  copy: Dictionary["home"]["blog"];
  blog: Dictionary["blog"];
};

export function BlogPreview({ locale, copy, blog }: BlogPreviewProps) {
  const blogHref = localizePath("/blog", locale);
  const posts = getPosts(blog).slice(0, 3);

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
        <div className="mt-[clamp(40px,5vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-7">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              href={postHref(post, locale)}
              title={post.title}
              image={post.image}
              imagePlaceholder={blog.categories[post.category]}
              meta={blog.categories[post.category]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
