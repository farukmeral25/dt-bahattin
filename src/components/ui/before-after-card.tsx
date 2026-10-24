import { ImageSlot } from "./image-slot";

type BeforeAfterCardProps = {
  title: string;
  detail: string;
  beforeLabel: string;
  afterLabel: string;
  before?: string;
  after?: string;
  /** Verilirse sağ üstte büyütme (lightbox) butonu gösterilir */
  onOpen?: () => void;
  openLabel?: string;
};

export function BeforeAfterCard({
  title,
  detail,
  beforeLabel,
  afterLabel,
  before,
  after,
  onOpen,
  openLabel,
}: BeforeAfterCardProps) {
  const sizes = "(max-width: 860px) 50vw, 20vw";
  return (
    <figure className="m-0">
      <div className="relative grid aspect-[3/2] grid-cols-2 gap-1 overflow-hidden rounded-2xl">
        {onOpen && (
          <button
            type="button"
            onClick={onOpen}
            aria-label={`${openLabel}: ${title}`}
            className="absolute top-2.5 right-2.5 z-[2] grid size-9 cursor-pointer place-items-center rounded-full bg-ivory/90 text-base text-ink transition-colors hover:bg-gold"
          >
            <span aria-hidden="true">⤢</span>
          </button>
        )}
        <ImageSlot
          src={before}
          alt={`${title} – ${beforeLabel}`}
          placeholder={beforeLabel}
          sizes={sizes}
        />
        <ImageSlot
          src={after}
          alt={`${title} – ${afterLabel}`}
          placeholder={afterLabel}
          sizes={sizes}
        />
      </div>
      <figcaption className="mt-3 flex justify-between gap-4 text-sm">
        <span className="font-medium">{title}</span>
        <span className="text-muted">{detail}</span>
      </figcaption>
    </figure>
  );
}
