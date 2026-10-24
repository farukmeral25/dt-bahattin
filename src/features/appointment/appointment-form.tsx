"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
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
import { initialFormState } from "@/lib/forms";
import { useToday } from "@/lib/today";
import { submitAppointment } from "./actions";

type Copy = Dictionary["home"]["appointment"];

type AppointmentFormProps = {
  copy: Pick<Copy, "form" | "success">;
  common: Dictionary["common"]["form"];
};

export function AppointmentForm({ copy, common }: AppointmentFormProps) {
  // "Yeni talep" formu sıfırdan başlatmak için yeniden mount eder.
  const [key, setKey] = useState(0);
  return (
    <AppointmentFormInner
      key={key}
      copy={copy}
      common={common}
      onReset={() => setKey((k) => k + 1)}
    />
  );
}

function AppointmentFormInner({
  copy,
  common,
  onReset,
}: AppointmentFormProps & { onReset: () => void }) {
  const today = useToday();
  const [state, formAction, pending] = useActionState(
    submitAppointment,
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
      />
    );
  }

  return (
    <FormCard action={formAction}>
      <HoneypotField />
      <Field label={form.name} requiredLabel={common.required}>
        <Input name="name" required autoComplete="name" />
      </Field>
      <Field label={form.phone} requiredLabel={common.required}>
        <Input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder={form.phonePlaceholder}
        />
      </Field>
      <Field label={form.treatment}>
        <Select name="treatment">
          {form.treatmentOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
      </Field>
      <Field label={form.date}>
        <Input name="date" type="date" min={today} className="py-[13px]" />
      </Field>
      <Field label={form.note} full>
        <Textarea name="note" />
      </Field>
      <ConsentCheckbox>
        {form.consent} {/* KVKK metni yalnızca Türkçe yayınlanıyor */}
        <Link href="/kvkk" className="underline">
          {form.consentLink}
        </Link>
      </ConsentCheckbox>
      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-800 tab:col-span-2">
          {common.error}
        </p>
      )}
      <SubmitButton disabled={pending}>
        {pending ? common.sending : form.submit}
      </SubmitButton>
      <p className="m-0 text-center text-xs text-muted tab:col-span-2">
        {form.privacy}
      </p>
    </FormCard>
  );
}
