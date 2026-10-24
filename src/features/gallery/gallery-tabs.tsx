"use client";

import { useState } from "react";
import { BeforeAfterCard } from "@/components/ui/before-after-card";
import { ClinicMosaic } from "@/components/ui/clinic-mosaic";
import { PillTabs } from "@/components/ui/pill-tabs";
import { images } from "@/config/images";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import { Lightbox } from "./lightbox";

type Tab = keyof Dictionary["gallery"]["tabs"];

type GalleryTabsProps = {
  copy: Dictionary["gallery"];
  common: Dictionary["common"];
};

export function GalleryTabs({ copy, common }: GalleryTabsProps) {
  const [tab, setTab] = useState<Tab>("all");
  const [lightbox, setLightbox] = useState(-1);
  const cases = copy.cases.map((item, i) => ({ ...item, ...images.cases[i] }));
  const options = (Object.keys(copy.tabs) as Tab[]).map((value) => ({
    value,
    label: copy.tabs[value],
  }));

  return (
    <>
      <div className="container-site -mt-[clamp(32px,4vw,56px)] pb-[clamp(32px,4vw,56px)]">
        <PillTabs
          options={options}
          value={tab}
          onChange={setTab}
          label={copy.kicker}
        />
      </div>

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
            <h2 className="mb-8 font-serif text-[clamp(26px,3vw,36px)] font-normal tracking-[-0.01em]">
              {copy.clinicTitle}
            </h2>
            <ClinicMosaic
              rowHeight="gallery"
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
          items={cases}
          index={lightbox}
          onIndexChange={setLightbox}
          onClose={() => setLightbox(-1)}
          labels={{
            before: common.before,
            after: common.after,
            ...copy.lightbox,
          }}
        />
      )}
    </>
  );
}
