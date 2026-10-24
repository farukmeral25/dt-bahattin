import type { Dictionary } from "@/i18n/dictionaries/tr";

type ReviewsProps = {
  reviews: Dictionary["home"]["reviews"];
};

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <section id="yorumlar" className="container-site py-section">
      <p className="kicker">05 — {reviews.kicker}</p>
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6">
        {reviews.items.map((review) => (
          <figure
            key={review.name}
            className="m-0 flex flex-col gap-5 rounded-[20px] border border-line-soft bg-white p-8"
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
