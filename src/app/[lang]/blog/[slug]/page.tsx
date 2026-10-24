import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";
import { PostArticle } from "@/features/blog/post-article";
import {
  getPost,
  getPosts,
  postLocalizedPaths,
} from "@/features/blog/repository";
import { hasLocale, localizePath, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { unsplashUrl } from "@/lib/image-loader";
import { buildMetadata } from "@/lib/seo/metadata";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/seo/schema";

// Statik export: yazı sayfaları build sırasında Firestore'dan üretilir.
export const dynamicParams = false;

export async function generateStaticParams({
  params,
}: {
  params: { lang: string };
}) {
  if (!hasLocale(params.lang)) return [];
  const posts = await getPosts(params.lang);
  return posts.map((post) => ({ slug: post.slug }));
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

/** Paylaşım görseli: kapak fotoğrafı 1200×630 kırpılmış. */
const shareImage = (url?: string) =>
  url && unsplashUrl(url, { w: 1200, h: 630, q: 80 });

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const post = await getPost(lang, slug);
  if (!post) return {};
  const { available, hrefs } = await alternates(post.id, lang);

  return buildMetadata({
    locale: lang,
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: shareImage(post.image?.url),
    localizedPaths: hrefs,
    availableLocales: available,
  });
}

export default async function BlogPostPage({
  params,
}: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const [dict, posts] = await Promise.all([
    getDictionary(lang),
    getPosts(lang),
  ]);
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const { hrefs, self } = await alternates(post.id, lang);

  const related = post.related
    .map((id) => posts.find((p) => p.id === id))
    .filter((p) => p !== undefined);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: dict.meta.home.title, path: localizePath("/", lang) },
            { name: dict.meta.blog.title, path: localizePath("/blog", lang) },
            { name: post.title, path: self },
          ]),
          blogPostingSchema({
            title: post.title,
            description: post.excerpt,
            date: post.date,
            path: self,
            locale: lang,
            image: shareImage(post.image?.url),
          }),
        ]}
      />
      <SiteHeader
        locale={lang}
        common={dict.common}
        path="/blog"
        languageHrefs={hrefs}
      />
      <main>
        <PostArticle
          locale={lang}
          post={post}
          related={related}
          blog={dict.blog}
          navSub={dict.common.navSub}
        />
      </main>
    </>
  );
}
