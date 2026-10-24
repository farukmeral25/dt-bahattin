import type { Metadata } from "next";
import { DM_Serif_Display, Figtree } from "next/font/google";
import Link from "next/link";
import tr from "@/i18n/dictionaries/tr";
import en from "@/i18n/dictionaries/en";
import { siteConfig } from "@/config/site";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${tr.meta.notFound.title} | ${siteConfig.name}`,
};

/** Eşleşmeyen tüm URL'ler — dil bilinmediği için TR + EN birlikte. */
export default function GlobalNotFound() {
  return (
    <html
      lang="tr"
      className={`${figtree.variable} ${dmSerif.variable} antialiased`}
    >
      <body className="grid min-h-screen place-items-center">
        <main className="container-site flex flex-col items-center gap-4 py-section text-center">
          <p className="kicker">404</p>
          <h1 className="heading-section">{tr.meta.notFound.title}</h1>
          <p className="text-body">{tr.meta.notFound.text}</p>
          <Link href="/" className="border-b border-ink pb-1 font-medium">
            {tr.meta.notFound.back}
          </Link>
          <p lang="en" className="mt-8 text-sm text-muted">
            {en.meta.notFound.title} ·{" "}
            <Link href="/en" className="underline underline-offset-4">
              {en.meta.notFound.back}
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
