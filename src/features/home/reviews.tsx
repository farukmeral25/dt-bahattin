import type { Dictionary } from "@/i18n/dictionaries/tr";
import { SectionNumber } from "./section-number";

type ReviewsProps = {
  reviews: Dictionary["home"]["reviews"];
};

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <section id="yorumlar" className="container-site py-section">
      <p className="kicker">
        <SectionNumber section="reviews" />
        {reviews.kicker}
      </p>
      {/* Mobilde yana kaydırılan kartlar; sıradaki kartın ucu görünür */}
      <div className="mt-6 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto max-tab:-mx-[clamp(20px,4vw,48px)] max-tab:px-[clamp(20px,4vw,48px)] tab:grid tab:grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] tab:gap-6 tab:overflow-visible">
        {reviews.items.map((review) => (
          <figure
            key={review.name}
            className="m-0 flex w-[84%] shrink-0 snap-center flex-col gap-5 rounded-[20px] border border-line-soft bg-white p-7 tab:w-auto tab:p-8"
          >
            <div aria-label="5/5" className="tracking-[3px] text-gold">
              ★★★★★
            </div>
            <blockquote className="font-serif text-[21px] leading-[1.4] text-pretty">
              {review.quote}
            </blockquote>
            <figcaption className="mt-auto text-sm text-muted">
              {review.name} · {review.treatment}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
