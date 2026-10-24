"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { isRemoteImage } from "@/lib/image-loader";
import { ImageSlot } from "./image-slot";
import { Lightbox } from "./lightbox";

type ClinicMosaicProps = {
  items: { label: string; src?: string }[];
  /** Satır yüksekliği: ana sayfada 22vw, galeride 20vw */
  rowHeight?: "home" | "gallery";
  labels: { open: string; prev: string; next: string; close: string };
};

/**
 * Klinik foto mozaiği: 1. hücre 2×2, 4. ve 7. hücre 2 sütun.
 * Masaüstünde 4, mobilde 2 sütun. Fotoğraflar tıklanınca büyür.
 */
const spans: Record<number, string> = {
  0: "col-span-2 row-span-2",
  3: "col-span-2",
  6: "col-span-2",
};

export function ClinicMosaic({
  items,
  rowHeight = "home",
  labels,
}: ClinicMosaicProps) {
  const [open, setOpen] = useState(-1);
  const photos = items.filter((item): item is { label: string; src: string } =>
    Boolean(item.src),
  );
  const current = photos[open];

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 gap-3 md:grid-cols-4",
          rowHeight === "home"
            ? "auto-rows-[minmax(140px,40vw)] md:auto-rows-[minmax(160px,22vw)]"
            : "auto-rows-[minmax(140px,40vw)] md:auto-rows-[minmax(160px,20vw)]",
        )}
      >
        {items.map((item, i) => {
          const slot = (
            <ImageSlot
              src={item.src}
              alt={item.label}
              placeholder={item.label}
              className="size-full rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              sizes={
                i === 0
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 50vw, 25vw"
              }
            />
          );
          return item.src ? (
            <button
              key={item.label}
              type="button"
              onClick={() =>
                setOpen(photos.indexOf(item as (typeof photos)[number]))
              }
              aria-label={`${labels.open}: ${item.label}`}
              className={cn(
                "group cursor-zoom-in overflow-hidden rounded-2xl",
                spans[i],
              )}
            >
              {slot}
            </button>
          ) : (
            <div key={item.label} className={spans[i]}>
              {slot}
            </div>
          );
        })}
      </div>

      {current && (
        <Lightbox
          count={photos.length}
          index={open}
          onIndexChange={setOpen}
          onClose={() => setOpen(-1)}
          title={current.label}
          labels={labels}
        >
          <div className="relative h-[min(78vh,900px)] w-full">
            <Image
              src={current.src}
              alt={current.label}
              fill
              sizes="(max-width: 1100px) 100vw, 1100px"
              unoptimized={!isRemoteImage(current.src)}
              className="object-contain"
            />
          </div>
        </Lightbox>
      )}
    </>
  );
}
