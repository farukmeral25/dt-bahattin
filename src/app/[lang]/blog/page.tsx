import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaBand } from "@/components/ui/cta-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageIntro } from "@/components/ui/page-intro";
import { BlogList } from "@/features/blog/blog-list";
import { getPosts } from "@/features/blog/posts";
import { hasLocale, localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = await getDictionary(lang);
  return buildMetadata({ locale: lang, ...meta.blog, path: "/blog" });
}

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { blog, common, meta } = await getDictionary(lang);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: meta.home.title, path: localizePath("/", lang) },
          { name: meta.blog.title, path: localizePath("/blog", lang) },
        ])}
      />
      <SiteHeader locale={lang} common={common} path="/blog" />
      <main>
        <PageIntro kicker={blog.kicker} title={blog.title} text={blog.text} />
        <BlogList locale={lang} copy={blog} posts={getPosts(blog)} />
        <CtaBand
          title={blog.ctaTitle}
          cta={common.bookConsultation}
          href={localizePath("/#randevu", lang)}
        />
      </main>
    </>
  );
}
