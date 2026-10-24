import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";
import {
  TourismConsult,
  TourismFaq,
  TourismHero,
  TourismJourney,
  TourismStats,
  TourismTreatments,
} from "@/features/dental-tourism/sections";
import { hasLocale, localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/dental-turizm">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = await getDictionary(lang);
  return buildMetadata({
    locale: lang,
    ...meta.tourism,
    path: "/dental-turizm",
  });
}

export default async function DentalTourismPage({
  params,
}: PageProps<"/[lang]/dental-turizm">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { tourism, common, meta } = await getDictionary(lang);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: meta.home.title, path: localizePath("/", lang) },
            {
              name: meta.tourism.title,
              path: localizePath("/dental-turizm", lang),
            },
          ]),
          faqSchema(tourism.faq.items),
        ]}
      />
      <SiteHeader
        locale={lang}
        common={common}
        path="/dental-turizm"
        cta={{ label: tourism.navCta, href: "#gorusme" }}
      />
      <main>
        <TourismHero hero={tourism.hero} whatsapp={common.whatsapp} />
        <TourismStats stats={tourism.stats} />
        <TourismJourney journey={tourism.journey} />
        <TourismTreatments locale={lang} treatments={tourism.treatments} />
        <TourismConsult consult={tourism.consult} common={common} />
        <TourismFaq faq={tourism.faq} />
      </main>
    </>
  );
}
