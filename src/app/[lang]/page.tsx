import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/config/site";
import { getPosts } from "@/features/blog/repository";
import { Appointment } from "@/features/home/appointment";
import { BlogPreview } from "@/features/home/blog-preview";
import { Doctor } from "@/features/home/doctor";
import { Faq } from "@/features/home/faq";
import { GalleryPreview } from "@/features/home/gallery-preview";
import { Hero } from "@/features/home/hero";
import { Location } from "@/features/home/location";
import { Marquee } from "@/features/home/marquee";
import { Reviews } from "@/features/home/reviews";
import { TourismPreview } from "@/features/home/tourism-preview";
import { Treatments } from "@/features/home/treatments";
import { WhyUs } from "@/features/home/why-us";
import { getTreatments, treatmentHref } from "@/features/treatments/repository";
import { hasLocale, localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema } from "@/lib/seo/schema";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = await getDictionary(lang);
  return buildMetadata({
    locale: lang,
    ...meta.home,
    path: "/",
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [dict, posts, treatments] = await Promise.all([
    getDictionary(lang),
    getPosts(lang),
    getTreatments(lang),
  ]);
  const { home, common } = dict;

  return (
    <>
      <JsonLd data={faqSchema(home.faq.items)} />
      <SiteHeader locale={lang} common={common} path="/" />
      <main>
        <Hero hero={home.hero} common={common} />
        <Marquee items={home.marquee} />
        <Doctor
          doctor={home.doctor}
          cta={common.bookConsultation}
          readMore={common.readMore}
        />
        <Treatments
          treatments={home.treatments}
          items={treatments.map((t) => ({
            id: t.id,
            name: t.name,
            summary: t.summary,
            href: treatmentHref(t.slug, lang),
          }))}
          allHref={localizePath("/tedaviler", lang)}
        />
        <WhyUs why={home.why} />
        <GalleryPreview
          locale={lang}
          copy={home.gallery}
          gallery={dict.gallery}
          common={common}
        />
        <Reviews reviews={home.reviews} />
        <BlogPreview
          locale={lang}
          copy={home.blog}
          blog={dict.blog}
          posts={posts}
        />
        {siteConfig.features.dentalTourism && (
          <TourismPreview locale={lang} tourism={home.tourism} />
        )}
        <Faq faq={home.faq} />
        <Appointment appointment={home.appointment} common={common} />
        <Location location={home.location} common={common} />
      </main>
    </>
  );
}
