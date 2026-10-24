"use client";

import { useEffect, useRef } from "react";
import { ImageSlot } from "@/components/ui/image-slot";

type LightboxItem = {
  title: string;
  detail: string;
  before?: string;
  after?: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  labels: {
    before: string;
    after: string;
    prev: string;
    next: string;
    close: string;
  };
};

const navButton =
  "grid size-11 cursor-pointer place-items-center rounded-full border border-ivory/30 text-lg text-ivory transition-colors hover:border-ivory";

const cornerTag =
  "pointer-events-none absolute top-3 left-3 rounded-full bg-ink/70 px-2.5 py-1.5 text-[11px] tracking-[0.14em] text-ivory uppercase";

/**
 * Öncesi / sonrası vakaları tam ekran gösterir. Escape ve arka plan tıklaması
 * kapatır, ← → tuşları vakalar arasında gezinir.
 */
export function Lightbox({
  items,
  index,
  onIndexChange,
  onClose,
  labels,
}: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];
  const count = items.length;

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
      if (e.key === "ArrowRight") onIndexChange((index + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onClose, onIndexChange]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-[clamp(16px,4vw,48px)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-[min(1100px,100%)] flex-col gap-4"
      >
        <div className="grid aspect-[3/2] grid-cols-2 gap-1.5 overflow-hidden rounded-2xl bg-ink">
          <div className="relative">
            <ImageSlot
              src={item.before}
              alt={`${item.title} – ${labels.before}`}
              placeholder={labels.before}
              sizes="50vw"
              className="size-full"
            />
            <span className={cornerTag}>{labels.before}</span>
          </div>
          <div className="relative">
            <ImageSlot
              src={item.after}
              alt={`${item.title} – ${labels.after}`}
              placeholder={labels.after}
              sizes="50vw"
              className="size-full"
            />
            <span className={cornerTag}>{labels.after}</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 text-ivory">
          <div>
            <span className="font-serif text-[22px]">{item.title}</span>
            <span className="ml-3 text-sm text-ivory/70">{item.detail}</span>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label={labels.prev}
              onClick={() => onIndexChange((index - 1 + count) % count)}
              className={navButton}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label={labels.next}
              onClick={() => onIndexChange((index + 1) % count)}
              className={navButton}
            >
              <span aria-hidden="true">→</span>
            </button>
            <button
              ref={closeRef}
              type="button"
              aria-label={labels.close}
              onClick={onClose}
              className="grid size-11 cursor-pointer place-items-center rounded-full bg-ivory text-base text-ink"
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
