"use client";

import { cn } from "@/lib/cn";

type PillTabsProps<T extends string> = {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  label: string;
};

/** Blog kategori ve galeri sekme filtreleri. */
export function PillTabs<T extends string>({
  options,
  value,
  onChange,
  label,
}: PillTabsProps<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className="mt-10 flex flex-wrap gap-2.5"
    >
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.value)}
            className={cn(
              "cursor-pointer rounded-full border border-ink/20 px-4 py-[9px] text-[13px] font-medium transition-colors hover:border-ink",
              selected ? "bg-ink text-ivory" : "bg-transparent text-ink",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
