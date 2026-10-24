import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const variants = {
  solid:
    "rounded-full bg-ink px-7 py-4 text-[15px] font-medium text-ivory hover:bg-gold hover:text-ink",
  "solid-sm":
    "rounded-full bg-ink px-5 py-[11px] text-sm font-medium whitespace-nowrap text-ivory hover:bg-gold hover:text-ink",
  outline:
    "rounded-full border border-ink/25 px-7 py-4 text-[15px] font-medium text-ink hover:border-ink hover:text-ink",
  underline:
    "border-b border-ink pb-1 text-[15px] font-medium hover:border-gold",
} as const;

export type ButtonVariant = keyof typeof variants;

export const buttonClass = (variant: ButtonVariant, className?: string) =>
  cn("inline-flex items-center gap-2.5", variants[variant], className);

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

/** Sayfa içi ve site içi bağlantılar için pill / altı çizili buton. */
export function ButtonLink({
  variant = "solid",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClass(variant, className)} {...props} />;
}

type ExternalLinkProps = ComponentProps<"a"> & { variant?: ButtonVariant };

/** Harici bağlantılar (WhatsApp, Haritalar) — yeni sekmede açılır. */
export function ExternalButtonLink({
  variant = "solid",
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass(variant, className)}
      {...props}
    />
  );
}
