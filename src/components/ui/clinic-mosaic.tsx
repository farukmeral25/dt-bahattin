import { cn } from "@/lib/cn";
import { ImageSlot } from "./image-slot";

type ClinicMosaicProps = {
  items: { label: string; src?: string }[];
  /** Satır yüksekliği: ana sayfada 22vw, galeride 20vw */
  rowHeight?: "home" | "gallery";
};

/**
 * Klinik foto mozaiği: 1. hücre 2×2, 4. ve 7. hücre 2 sütun.
 * Masaüstünde 4, mobilde 2 sütun.
 */
const spans: Record<number, string> = {
  0: "col-span-2 row-span-2",
  3: "col-span-2",
  6: "col-span-2",
};

export function ClinicMosaic({ items, rowHeight = "home" }: ClinicMosaicProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 md:grid-cols-4",
        rowHeight === "home"
          ? "auto-rows-[minmax(140px,40vw)] md:auto-rows-[minmax(160px,22vw)]"
          : "auto-rows-[minmax(140px,40vw)] md:auto-rows-[minmax(160px,20vw)]",
      )}
    >
      {items.map((item, i) => (
        <ImageSlot
          key={item.label}
          src={item.src}
          alt={item.label}
          placeholder={item.label}
          className={cn("rounded-2xl", spans[i])}
          sizes={
            i === 0
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 50vw, 25vw"
          }
        />
      ))}
    </div>
  );
}
