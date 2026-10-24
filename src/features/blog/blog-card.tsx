import Link from "next/link";
import type { ReactNode } from "react";
import { ImageSlot } from "@/components/ui/image-slot";

type BlogCardProps = {
  title: string;
  image?: string;
  imagePlaceholder: string;
  /** Kategori satırı (kategori · tarih gibi) */
  meta: ReactNode;
  excerpt?: string;
  /** Yazı detay sayfaları gelene kadar ana sayfada /blog'a gider */
  href?: string;
};

export function BlogCard({
  title,
  image,
  imagePlaceholder,
  meta,
  excerpt,
  href,
}: BlogCardProps) {
  const content = (
    <>
      <ImageSlot
        src={image}
        alt={title}
        placeholder={imagePlaceholder}
        sizes="(max-width: 860px) 100vw, 33vw"
        className="aspect-[4/3] rounded-2xl"
      />
      <div className="flex gap-3 label-sm">{meta}</div>
      <h3 className="font-serif text-2xl leading-[1.25] font-normal text-pretty">
        {title}
      </h3>
      {excerpt && (
        <p className="text-sm leading-relaxed text-body">{excerpt}</p>
      )}
    </>
  );

  return (
    <article>
      {href ? (
        <Link href={href} className="flex flex-col gap-4">
          {content}
        </Link>
      ) : (
        <div className="flex flex-col gap-4">{content}</div>
      )}
    </article>
  );
}
