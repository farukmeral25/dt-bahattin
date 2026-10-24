"use client";

import { useState } from "react";
import { BeforeAfterCard } from "@/components/ui/before-after-card";
import { ClinicMosaic } from "@/components/ui/clinic-mosaic";
import { PillTabs } from "@/components/ui/pill-tabs";
import { ImageSlot } from "@/components/ui/image-slot";
import { Lightbox } from "@/components/ui/lightbox";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries/tr";

const cornerTag =
  "pointer-events-none absolute top-3 left-3 rounded-full bg-ink/70 px-2.5 py-1.5 text-[11px] tracking-[0.14em] text-ivory uppercase";

type Tab = keyof Dictionary["gallery"]["tabs"];

type GalleryTabsProps = {
  copy: Dictionary["gallery"];
  common: Dictionary["common"];
};

export function GalleryTabs({ copy, common }: GalleryTabsProps) {
  const { beforeAfter } = siteConfig.features;
  // Öncesi / sonrası kapalıyken yalnızca klinik kareleri (sekmesiz) görünür
  const [selected, setTab] = useState<Tab>("all");
  const tab: Tab = beforeAfter ? selected : "clinic";
  const [lightbox, setLightbox] = useState(-1);
  const cases = copy.cases.map((item, i) => ({ ...item, ...images.cases[i] }));
  const options = (Object.keys(copy.tabs) as Tab[]).map((value) => ({
    value,
    label: copy.tabs[value],
  }));

  return (
    <>
      {beforeAfter && (
        <div className="container-site -mt-[clamp(32px,4vw,56px)] pb-[clamp(32px,4vw,56px)]">
          <PillTabs
            options={options}
            value={tab}
            onChange={setTab}
            label={copy.kicker}
          />
        </div>
      )}

      {tab !== "clinic" && (
        <section className="container-site pb-[clamp(72px,9vw,110px)]">
          <h2 className="mb-8 font-serif text-[clamp(26px,3vw,36px)] font-normal tracking-[-0.01em]">
            {copy.casesTitle}
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-x-6 gap-y-8">
            {cases.map((item, i) => (
              <BeforeAfterCard
                key={item.title}
                {...item}
                beforeLabel={common.before}
                afterLabel={common.after}
                onOpen={() => setLightbox(i)}
                openLabel={copy.lightbox.open}
              />
            ))}
          </div>
        </section>
      )}

      {tab !== "cases" && (
        <section className="border-t border-ink/10 bg-sand">
          <div className="container-site py-[clamp(56px,7vw,96px)]">
            {/* Sayfa başlığı zaten klinik kareleri; tekrar başlık gerekmez */}
            {beforeAfter && (
              <h2 className="mb-8 font-serif text-[clamp(26px,3vw,36px)] font-normal tracking-[-0.01em]">
                {copy.clinicTitle}
              </h2>
            )}
            <ClinicMosaic
              rowHeight="gallery"
              labels={{
                ...copy.lightbox,
                prev: copy.lightbox.prevPhoto,
                next: copy.lightbox.nextPhoto,
              }}
              items={copy.clinic.map((label, i) => ({
                label,
                src: images.clinic[i],
              }))}
            />
          </div>
        </section>
      )}

      {lightbox >= 0 && (
        <Lightbox
          count={cases.length}
          index={lightbox}
          onIndexChange={setLightbox}
          onClose={() => setLightbox(-1)}
          title={cases[lightbox].title}
          detail={cases[lightbox].detail}
          labels={copy.lightbox}
        >
          <div className="grid aspect-[3/2] grid-cols-2 gap-1.5 overflow-hidden rounded-2xl bg-ink">
            {(["before", "after"] as const).map((side) => (
              <div key={side} className="relative">
                <ImageSlot
                  src={cases[lightbox][side]}
                  alt={`${cases[lightbox].title} – ${common[side]}`}
                  placeholder={common[side]}
                  sizes="50vw"
                  className="size-full"
                />
                <span className={cornerTag}>{common[side]}</span>
              </div>
            ))}
          </div>
        </Lightbox>
      )}
    </>
  );
}
