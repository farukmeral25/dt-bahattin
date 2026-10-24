import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaBand } from "@/components/ui/cta-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageIntro } from "@/components/ui/page-intro";
import { getTreatments, treatmentHref } from "@/features/treatments/repository";
import { hasLocale, localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/tedaviler">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = await getDictionary(lang);
  return buildMetadata({
    locale: lang,
    ...meta.treatments,
    path: "/tedaviler",
  });
}

export default async function TreatmentsPage({
  params,
}: PageProps<"/[lang]/tedaviler">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [{ treatments: copy, common, meta }, treatments] = await Promise.all([
    getDictionary(lang),
    getTreatments(lang),
  ]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: meta.home.title, path: localizePath("/", lang) },
          {
            name: meta.treatments.title,
            path: localizePath("/tedaviler", lang),
          },
        ])}
      />
      <SiteHeader locale={lang} common={common} path="/tedaviler" />
      <main>
        <PageIntro kicker={copy.kicker} title={copy.title} text={copy.text} />
        <section className="container-site pb-section">
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-x-7 gap-y-2">
            {treatments.map((t, i) => (
              <li key={t.id}>
                <Link
                  href={treatmentHref(t.slug, lang)}
                  className="group flex h-full flex-col gap-2 border-t border-line py-6"
                >
                  <span className="text-xs tracking-[0.14em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[26px] leading-[1.2] group-hover:text-gold">
                    {t.name}
                  </span>
                  <span className="text-[15px] leading-relaxed text-body">
                    {t.summary}
                  </span>
                  <span className="mt-2 text-sm font-medium">
                    {copy.detail}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <CtaBand
          title={copy.ctaTitle}
          cta={common.bookConsultation}
          href={localizePath("/#randevu", lang)}
        />
      </main>
    </>
  );
}
