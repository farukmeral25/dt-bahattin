"use client";

import { useEffect, useRef, type ReactNode } from "react";

type LightboxProps = {
  count: number;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  title: string;
  detail?: string;
  labels: { prev: string; next: string; close: string };
  /** Büyütülen içerik (tek fotoğraf ya da öncesi / sonrası çifti) */
  children: ReactNode;
};

const navButton =
  "grid size-11 cursor-pointer place-items-center rounded-full border border-ivory/30 text-lg text-ivory transition-colors hover:border-ivory";

/**
 * Tam ekran görüntüleyici. Escape ve arka plan tıklaması kapatır, ← → tuşları
 * öğeler arasında gezinir; açıkken sayfa kaydırması kilitlenir.
 */
export function Lightbox({
  count,
  index,
  onIndexChange,
  onClose,
  title,
  detail,
  labels,
  children,
}: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

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
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-[clamp(16px,4vw,48px)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-[min(1100px,100%)] flex-col gap-4"
      >
        {children}
        <div className="flex items-center justify-between gap-4 text-ivory">
          <div>
            <span className="font-serif text-[22px]">{title}</span>
            {detail && (
              <span className="ml-3 text-sm text-ivory/70">{detail}</span>
            )}
          </div>
          <div className="flex shrink-0 gap-2">
            {count > 1 && (
              <>
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
              </>
            )}
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
