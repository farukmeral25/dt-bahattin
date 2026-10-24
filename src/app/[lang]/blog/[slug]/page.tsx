import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";
import { PostArticle } from "@/features/blog/post-article";
import { postLocalizedPaths } from "@/features/blog/post-paths";
import { publishedPosts } from "@/features/blog/posts";
import { hasLocale, localizePath, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo/metadata";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/seo/schema";

// Statik export: yalnızca gövdesi olan yazıların sayfası üretilir.
export const dynamicParams = false;

export async function generateStaticParams({
  params,
}: {
  params: { lang: string };
}) {
  if (!hasLocale(params.lang)) return [];
  const { blog } = await getDictionary(params.lang);
  return publishedPosts(blog).map((post) => ({ slug: post.slug }));
}

async function loadPost(lang: string, slug: string) {
  if (!hasLocale(lang)) return null;
  const dict = await getDictionary(lang);
  const post = publishedPosts(dict.blog).find((p) => p.slug === slug);
  return post ? { dict, post, locale: lang } : null;
}

/** Yazının yayınlandığı dillerin adresleri (dil seçici ve hreflang için). */
async function alternates(id: string, locale: Locale) {
  const paths = await postLocalizedPaths(id);
  const available = locales.filter((l) => paths[l]);
  const hrefs = Object.fromEntries(
    locales.map((l) => [l, paths[l] ?? localizePath("/blog", l)]),
  ) as Record<Locale, string>;
  return { available, hrefs, self: hrefs[locale] };
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const data = await loadPost(lang, slug);
  if (!data) return {};
  const { post, locale } = data;
  const { available, hrefs } = await alternates(post.id, locale);

  return buildMetadata({
    locale,
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    localizedPaths: hrefs,
    availableLocales: available,
  });
}

export default async function BlogPostPage({
  params,
}: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  const data = await loadPost(lang, slug);
  if (!data) notFound();
  const { dict, post, locale } = data;
  const { hrefs, self } = await alternates(post.id, locale);

  const published = publishedPosts(dict.blog);
  const related = (post.related ?? [])
    .map((id) => published.find((p) => p.id === id))
    .filter((p) => p !== undefined);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: dict.meta.home.title, path: localizePath("/", locale) },
            { name: dict.meta.blog.title, path: localizePath("/blog", locale) },
            { name: post.title, path: self },
          ]),
          blogPostingSchema({
            title: post.title,
            description: post.excerpt,
            date: post.date,
            path: self,
            locale,
            image: post.image,
          }),
        ]}
      />
      <SiteHeader
        locale={locale}
        common={dict.common}
        path="/blog"
        languageHrefs={hrefs}
      />
      <main>
        <PostArticle
          locale={locale}
          post={post}
          related={related}
          blog={dict.blog}
          navSub={dict.common.navSub}
        />
      </main>
    </>
  );
}
