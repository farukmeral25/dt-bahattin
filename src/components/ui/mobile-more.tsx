"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type MobileMoreProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

/**
 * Mobilde içeriği "Devamını oku" arkasına alır; tablet ve masaüstünde her
 * zaman açıktır. İçerik HTML'de kalır (yalnızca CSS ile gizlenir), arama
 * motorları görmeye devam eder.
 */
export function MobileMore({ label, children, className }: MobileMoreProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={cn(!open && "max-tab:hidden", className)}>{children}</div>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-5 flex w-fit cursor-pointer items-center gap-2 border-b border-ink/30 pb-1 text-[15px] font-medium tab:hidden"
        >
          {label} <span aria-hidden="true">↓</span>
        </button>
      )}
    </>
  );
}
