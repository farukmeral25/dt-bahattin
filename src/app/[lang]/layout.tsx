import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Figtree } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@/components/layout/analytics";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { SiteFooter } from "@/components/layout/site-footer";
import { StickyCta } from "@/components/layout/sticky-cta";
import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/config/site";
import { hasLocale, localizePath, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { rootMetadata } from "@/lib/seo/metadata";
import { dentistSchema, websiteSchema } from "@/lib/seo/schema";
import "../globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
});

// Statik export: yalnızca tanımlı diller üretilir.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return rootMetadata(lang, dict.meta.home.description);
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${figtree.variable} ${dmSerif.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <JsonLd
          data={[
            dentistSchema(lang, dict.meta.home.description),
            websiteSchema(lang),
          ]}
        />
        {children}
        <SiteFooter locale={lang} common={dict.common} />
        <StickyCta common={dict.common} />
        <Analytics />
        <CookieBanner
          copy={dict.common.cookie}
          kvkkHref={localizePath("/kvkk", lang)}
        />
      </body>
    </html>
  );
}
