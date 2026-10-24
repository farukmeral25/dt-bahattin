import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { HONEYPOT_FIELD } from "@/lib/forms";

export const fieldClass =
  "rounded-[10px] border border-ink/20 bg-white p-3.5 text-[15px] text-ink outline-none transition-colors focus:border-gold";

type FieldProps = {
  label: string;
  /** Ekran okuyucular için "zorunlu" ibaresi */
  requiredLabel?: string;
  full?: boolean;
  children: ReactNode;
};

/** Tasarımdaki label + input dikey bloğu. */
export function Field({ label, requiredLabel, full, children }: FieldProps) {
  return (
    <label
      className={cn(
        "flex flex-col gap-2 text-[13px] font-medium",
        full && "tab:col-span-2",
      )}
    >
      <span>
        {label}
        {requiredLabel && (
          <>
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> ({requiredLabel})</span>
          </>
        )}
      </span>
      {children}
    </label>
  );
}

/** Tam genişlik onay kutusu (KVKK açık rıza). */
export function ConsentCheckbox({
  name = "consent",
  children,
}: {
  name?: string;
  children: ReactNode;
}) {
  return (
    <label className="flex items-start gap-2.5 text-[13px] leading-normal text-body tab:col-span-2">
      <input
        type="checkbox"
        name={name}
        required
        className="mt-[3px] accent-ink"
      />
      <span>{children}</span>
    </label>
  );
}

/** Botların doldurduğu gizli alan (bkz. lib/forms.ts → HONEYPOT_FIELD). */
export function HoneypotField() {
  return (
    <input
      type="checkbox"
      name={HONEYPOT_FIELD}
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="hidden"
    />
  );
}

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(fieldClass, className)} {...props} />;
}

export function Select({ className, ...props }: ComponentProps<"select">) {
  return <select className={cn(fieldClass, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      rows={3}
      className={cn(fieldClass, "resize-y", className)}
      {...props}
    />
  );
}

/** Koyu bölümdeki açık renkli form kartı. */
export function FormCard({ className, ...props }: ComponentProps<"form">) {
  return (
    <form
      className={cn(
        "grid grid-cols-1 gap-4 rounded-3xl bg-ivory p-[clamp(24px,3vw,40px)] text-ink tab:grid-cols-2",
        className,
      )}
      {...props}
    />
  );
}

export function SubmitButton({
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type="submit"
      className={cn(
        "cursor-pointer rounded-full bg-ink p-[17px] text-[15px] font-medium text-ivory transition-colors hover:bg-gold hover:text-ink disabled:cursor-wait disabled:opacity-70 tab:col-span-2",
        className,
      )}
      {...props}
    />
  );
}

type SuccessCardProps = {
  title: string;
  text: string;
  resetLabel: string;
  onReset: () => void;
  /** "Yeni talep" butonunun üstünde gösterilen ek eylem */
  action?: ReactNode;
};

/** Form gönderildikten sonra aynı kartta gösterilen teşekkür durumu. */
export function SuccessCard({
  title,
  text,
  resetLabel,
  onReset,
  action,
}: SuccessCardProps) {
  return (
    <div
      role="status"
      className="flex min-h-[360px] flex-col justify-center gap-4 rounded-3xl bg-ivory p-[clamp(32px,4vw,56px)] text-center text-ink"
    >
      <div aria-hidden="true" className="font-serif text-[40px] text-gold">
        ✓
      </div>
      <h3 className="font-serif text-[32px] font-normal">{title}</h3>
      <p className="text-base leading-relaxed text-body">{text}</p>
      {action}
      <button
        type="button"
        onClick={onReset}
        className="mx-auto mt-4 cursor-pointer rounded-full border border-ink/30 px-[22px] py-3 text-sm transition-colors hover:border-ink"
      >
        {resetLabel}
      </button>
    </div>
  );
}
