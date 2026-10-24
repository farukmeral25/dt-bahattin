"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

type AccordionProps = {
  items: { question: string; answer: string }[];
};

/**
 * Tek öğe açık kalan SSS akordeonu; ilk öğe açık başlar.
 * Kapalı cevaplar `hidden` ile DOM'da kalır — arama motorları içeriği görür.
 */
export function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="flex flex-col border-b border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-${i}`;
        return (
          <div key={item.question} className="border-t border-line">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-5 py-[22px] text-left text-lg font-medium text-ink"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "text-[22px] text-gold transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <p
              id={panelId}
              hidden={!isOpen}
              className="pr-10 pb-[22px] text-[15px] leading-[1.7] text-pretty text-body"
            >
              {item.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}
