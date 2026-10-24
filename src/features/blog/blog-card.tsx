import Link from "next/link";
import type { ReactNode } from "react";
import { ImageSlot } from "@/components/ui/image-slot";
import { cn } from "@/lib/cn";

type BlogCardProps = {
  title: string;
  image?: string;
  imagePlaceholder: string;
  /** Kategori satırı (kategori · tarih gibi) */
  meta: ReactNode;
  excerpt?: string;
  href: string;
  /** Mobilde yatay liste satırı (solda küçük görsel) — ana sayfa önizlemesi */
  compact?: boolean;
};

export function BlogCard({
  title,
  image,
  imagePlaceholder,
  meta,
  excerpt,
  href,
  compact = false,
}: BlogCardProps) {
  const content = (
    <>
      <ImageSlot
        src={image}
        alt={title}
        placeholder={imagePlaceholder}
        sizes="(max-width: 860px) 100vw, 33vw"
        className={cn(
          "aspect-[4/3] rounded-2xl",
          compact &&
            "max-tab:row-span-2 max-tab:aspect-square max-tab:rounded-xl",
        )}
      />
      <div className={cn("flex gap-3 label-sm", compact && "max-tab:self-end")}>
        {meta}
      </div>
      <h3
        className={cn(
          "font-serif text-2xl leading-[1.25] font-normal text-pretty",
          compact && "max-tab:self-start max-tab:text-lg",
        )}
      >
        {title}
      </h3>
      {excerpt && (
        <p className="text-sm leading-relaxed text-body">{excerpt}</p>
      )}
    </>
  );

  return (
    <article>
      <Link
        href={href}
        className={cn(
          "flex flex-col gap-4",
          compact &&
            "max-tab:grid max-tab:grid-cols-[96px_1fr] max-tab:gap-x-4 max-tab:gap-y-1.5",
        )}
      >
        {content}
      </Link>
    </article>
  );
}
