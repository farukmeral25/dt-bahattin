import { Fragment } from "react";

type MarqueeProps = {
  items: string[];
};

/** Kayan tedavi şeridi — içerik iki kez tekrarlanır, -50% kaydırılır. */
export function Marquee({ items }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <div className="flex" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <Fragment key={item}>
          <span className="px-7">{item}</span>
          <span className="text-gold">·</span>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-sand py-[18px]">
      <div className="flex w-max animate-marquee font-serif text-xl whitespace-nowrap text-body">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
