import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaBand } from "@/components/ui/cta-band";
import { JsonLd } from "@/components/ui/json-ld";
import { PageIntro } from "@/components/ui/page-intro";
import { GalleryTabs } from "@/features/gallery/gallery-tabs";
import { hasLocale, localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/galeri">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = await getDictionary(lang);
  return buildMetadata({ locale: lang, ...meta.gallery, path: "/galeri" });
}

export default async function GalleryPage({
  params,
}: PageProps<"/[lang]/galeri">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { gallery, common, meta } = await getDictionary(lang);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: meta.home.title, path: localizePath("/", lang) },
          { name: meta.gallery.title, path: localizePath("/galeri", lang) },
        ])}
      />
      <SiteHeader locale={lang} common={common} path="/galeri" />
      <main>
        <PageIntro
          kicker={gallery.kicker}
          title={gallery.title}
          text={gallery.text}
        />
        <GalleryTabs copy={gallery} common={common} />
        <CtaBand
          title={gallery.ctaTitle}
          cta={common.bookConsultation}
          href={localizePath("/#randevu", lang)}
          tone="plain"
        />
      </main>
    </>
  );
}
