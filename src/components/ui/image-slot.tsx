import Image from "next/image";
import { cn } from "@/lib/cn";
import { isRemoteImage } from "@/lib/image-loader";

type ImageSlotProps = {
  src?: string;
  alt: string;
  /** Görsel yokken kutuda görünen açıklama */
  placeholder?: string;
  /** En-boy oranı ve köşe yarıçapı gibi kutu stilleri */
  className?: string;
  /** Görselin kendisine sınıf (ör. object-top ile kırpma yönü) */
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Tasarımdaki <image-slot> karşılığı. Kaynak yoksa tasarımdaki bej yer
 * tutucuyu gösterir; görseller src/config/images.ts üzerinden bağlanır.
 */
export function ImageSlot({
  src,
  alt,
  placeholder,
  className,
  imageClassName,
  sizes = "(max-width: 860px) 100vw, 50vw",
  priority,
}: ImageSlotProps) {
  return (
    <div className={cn("relative overflow-hidden bg-placeholder", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          // Yerel görseller olduğu gibi sunulur (statik export)
          unoptimized={!isRemoteImage(src)}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 grid place-items-center p-4 text-center text-xs tracking-wide text-faint"
        >
          {placeholder}
        </div>
      )}
    </div>
  );
}
