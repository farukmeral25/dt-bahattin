import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SimpleHeader } from "@/components/layout/simple-header";
import { JsonLd } from "@/components/ui/json-ld";
import { KvkkContent, kvkkUpdatedAt } from "@/features/legal/kvkk-content";
import { hasLocale, localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

// Metin yalnızca Türkçe: /en/kvkk aynı metni İngilizce bir notla gösterir,
// arama motorlarına kapalıdır ve canonical olarak /kvkk'yi işaret eder.
export async function generateMetadata({
  params,
}: PageProps<"/[lang]/kvkk">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = await getDictionary(lang);
  return buildMetadata({
    locale: "tr",
    ...meta.kvkk,
    path: "/kvkk",
    availableLocales: ["tr"],
    noIndex: lang !== "tr",
  });
}

export default async function KvkkPage({ params }: PageProps<"/[lang]/kvkk">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { common, meta } = await getDictionary(lang);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: meta.home.title, path: localizePath("/", lang) },
          { name: meta.kvkk.title, path: "/kvkk" },
        ])}
      />
      <SimpleHeader locale={lang} common={common} />
      <main
        lang="tr"
        className="mx-auto w-full max-w-[780px] px-[clamp(20px,4vw,48px)] pt-[clamp(48px,7vw,96px)] pb-section"
      >
        {lang !== "tr" && (
          <p lang="en" className="mb-8 rounded-2xl bg-sand p-5 text-sm">
            This privacy notice is currently available in Turkish only.
          </p>
        )}
        <p className="kicker">KVKK</p>
        <h1 className="font-serif text-[clamp(34px,4.5vw,56px)] leading-[1.06] font-normal tracking-[-0.02em] text-pretty">
          Kişisel Verilerin Korunması Aydınlatma Metni
        </h1>
        <p className="mt-5 text-sm text-muted">
          Son güncelleme: {kvkkUpdatedAt}
        </p>
        <KvkkContent />
      </main>
    </>
  );
}
