import Link from "next/link";
import { BeforeAfterCard } from "@/components/ui/before-after-card";
import { ClinicMosaic } from "@/components/ui/clinic-mosaic";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import { SectionNumber } from "./section-number";

type GalleryPreviewProps = {
  locale: Locale;
  copy: Dictionary["home"]["gallery"];
  gallery: Dictionary["gallery"];
  common: Dictionary["common"];
};

/** Ana sayfada ilk 3 vaka ve ilk 4 klinik karesi. */
export function GalleryPreview({
  locale,
  copy,
  gallery,
  common,
}: GalleryPreviewProps) {
  const { beforeAfter } = siteConfig.features;
  const heading = beforeAfter ? copy : copy.clinicOnly;

  return (
    <section id="galeri" className="bg-sand py-section">
      <div className="container-site">
        <p className="kicker">
          <SectionNumber section="gallery" />
          {heading.kicker}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="heading-section">{heading.title}</h2>
          <Link
            href={localizePath("/galeri", locale)}
            className="border-b border-ink pb-1 text-[15px] font-medium"
          >
            {copy.all}
          </Link>
        </div>
        {beforeAfter && (
          <div className="mt-[clamp(40px,5vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
            {gallery.cases.slice(0, 3).map((item, i) => (
              <BeforeAfterCard
                key={item.title}
                title={item.title}
                detail={item.detail}
                beforeLabel={common.before}
                afterLabel={common.after}
                {...images.cases[i]}
              />
            ))}
          </div>
        )}
        <div
          className={
            beforeAfter
              ? "mt-[clamp(56px,7vw,96px)]"
              : "mt-[clamp(40px,5vw,64px)]"
          }
        >
          <ClinicMosaic
            labels={{
              ...gallery.lightbox,
              prev: gallery.lightbox.prevPhoto,
              next: gallery.lightbox.nextPhoto,
            }}
            items={gallery.clinic
              .slice(0, 4)
              .map((label, i) => ({ label, src: images.clinic[i] }))}
          />
        </div>
      </div>
    </section>
  );
}
