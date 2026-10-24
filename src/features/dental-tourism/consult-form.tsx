"use client";

import { useActionState, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/icons";
import {
  ConsentCheckbox,
  Field,
  FormCard,
  HoneypotField,
  Input,
  Select,
  SubmitButton,
  SuccessCard,
  Textarea,
} from "@/components/ui/form";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import { initialFormState, openWhatsApp } from "@/lib/forms";
import { useToday } from "@/lib/today";
import { submitConsultation } from "./actions";

type Copy = Dictionary["tourism"]["consult"];

type ConsultFormProps = {
  copy: Pick<Copy, "form" | "success">;
  common: Dictionary["common"]["form"];
};

export function ConsultForm(props: ConsultFormProps) {
  const [key, setKey] = useState(0);
  return (
    <ConsultFormInner
      key={key}
      {...props}
      onReset={() => setKey((k) => k + 1)}
    />
  );
}

function ConsultFormInner({
  copy,
  common,
  onReset,
}: ConsultFormProps & { onReset: () => void }) {
  const today = useToday();
  const [state, formAction, pending] = useActionState(
    submitConsultation,
    initialFormState,
  );
  const { form } = copy;

  if (state.status === "success") {
    return (
      <SuccessCard
        title={copy.success.title}
        text={copy.success.text}
        resetLabel={common.newRequest}
        onReset={onReset}
        action={
          <button
            type="button"
            onClick={() => openWhatsApp(copy.success.photosMessage)}
            className="mx-auto inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-gold hover:text-ink"
          >
            <WhatsAppIcon />
            {copy.success.sendPhotos}
          </button>
        }
      />
    );
  }

  return (
    <FormCard action={formAction}>
      <HoneypotField />
      <Field label={form.name} requiredLabel={common.required}>
        <Input name="name" required autoComplete="name" />
      </Field>
      <Field label={form.country} requiredLabel={common.required}>
        <Input name="country" required autoComplete="country-name" />
      </Field>
      <Field label={form.email} requiredLabel={common.required}>
        <Input name="email" type="email" required autoComplete="email" />
      </Field>
      <Field label={form.phone}>
        <Input name="phone" type="tel" autoComplete="tel" placeholder="+" />
      </Field>
      <Field label={form.treatment}>
        <Select name="treatment">
          {form.treatmentOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
      </Field>
      <Field label={form.date}>
        <Input
          name="date"
          type="month"
          min={today?.slice(0, 7)}
          className="py-[13px]"
        />
      </Field>
      {/* E-posta servisi dosya eki desteklemiyor; görseller WhatsApp'tan gelir */}
      <div className="flex flex-col gap-2 text-[13px] font-medium tab:col-span-2">
        <span>{form.files}</span>
        <p className="rounded-[10px] border border-dashed border-ink/30 bg-white p-3.5 text-sm font-normal text-body">
          {form.filesNote}
        </p>
      </div>
      <Field label={form.message} full>
        <Textarea name="message" />
      </Field>
      <ConsentCheckbox>{form.consent}</ConsentCheckbox>
      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-800 tab:col-span-2">
          {common.error}
        </p>
      )}
      <SubmitButton disabled={pending}>
        {pending ? common.sending : form.submit}
      </SubmitButton>
    </FormCard>
  );
}
