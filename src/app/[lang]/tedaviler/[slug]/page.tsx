import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";
import { getPosts } from "@/features/blog/repository";
import {
  getTreatments,
  treatmentHref,
  treatmentLocalizedPaths,
} from "@/features/treatments/repository";
import { TreatmentArticle } from "@/features/treatments/treatment-article";
import { hasLocale, localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, treatmentSchema } from "@/lib/seo/schema";

// Statik export: her tedavi için build sırasında sayfa üretilir.
export const dynamicParams = false;

export async function generateStaticParams({
  params,
}: {
  params: { lang: string };
}) {
  if (!hasLocale(params.lang)) return [];
  const treatments = await getTreatments(params.lang);
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/tedaviler/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const treatment = (await getTreatments(lang)).find((t) => t.slug === slug);
  if (!treatment) return {};

  return buildMetadata({
    locale: lang,
    title: treatment.metaTitle,
    absoluteTitle: true,
    description: treatment.metaDescription,
    path: `/tedaviler/${treatment.slug}`,
    localizedPaths: await treatmentLocalizedPaths(treatment.id),
  });
}

export default async function TreatmentPage({
  params,
}: PageProps<"/[lang]/tedaviler/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const [dict, treatments, posts] = await Promise.all([
    getDictionary(lang),
    getTreatments(lang),
    getPosts(lang),
  ]);
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) notFound();

  const hrefs = await treatmentLocalizedPaths(treatment.id);
  const self = hrefs[lang];
  const related = treatment.relatedPosts
    .map((id) => posts.find((p) => p.id === id))
    .filter((p) => p !== undefined)
    .slice(0, 3);
  const others = treatments
    .filter((t) => t.id !== treatment.id)
    .map((t) => ({
      id: t.id,
      name: t.name,
      href: treatmentHref(t.slug, lang),
    }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: dict.meta.home.title, path: localizePath("/", lang) },
            {
              name: dict.meta.treatments.title,
              path: localizePath("/tedaviler", lang),
            },
            { name: treatment.name, path: self },
          ]),
          treatmentSchema({
            name: treatment.name,
            description: treatment.metaDescription,
            path: self,
            locale: lang,
          }),
          ...(treatment.faq.length ? [faqSchema(treatment.faq)] : []),
        ]}
      />
      <SiteHeader
        locale={lang}
        common={dict.common}
        path="/tedaviler"
        languageHrefs={hrefs}
      />
      <main>
        <TreatmentArticle
          locale={lang}
          treatment={treatment}
          others={others}
          related={related}
          copy={dict.treatments}
          blog={dict.blog}
        />
      </main>
    </>
  );
}
