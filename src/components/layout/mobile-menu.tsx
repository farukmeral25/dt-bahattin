"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  links: { href: string; label: string; active: boolean }[];
  cta: { label: string; href: string };
  openLabel: string;
  closeLabel: string;
  /** Dil seçici gibi sunucu tarafında hazırlanan ek içerik */
  children?: ReactNode;
};

/** ≤1060px'te hamburger; menü header'ın altında dikey liste olarak açılır. */
export function MobileMenu({
  links,
  cta,
  openLabel,
  closeLabel,
  children,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="nav:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((v) => !v)}
        className="grid size-11 cursor-pointer place-items-center rounded-full border border-ink/18 text-lg text-ink"
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-y border-line-soft bg-ivory"
      >
        <nav className="container-site flex flex-col pt-2 pb-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={link.active ? "page" : undefined}
              className={cn(
                "border-b border-ink/10 py-3.5 text-[17px] font-medium",
                link.active && "text-gold",
              )}
            >
              {link.label}
            </a>
          ))}
          {children && <div className="mt-5 sm:hidden">{children}</div>}
          <a
            href={cta.href}
            onClick={close}
            className="mt-5 rounded-full bg-ink p-4 text-center text-[15px] font-medium text-ivory hover:bg-gold hover:text-ink"
          >
            {cta.label}
          </a>
        </nav>
      </div>
    </div>
  );
}
