"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { contactSubjects } from "../data/subjects";

const labelClasses = "flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wide";
const fieldClasses =
  "rounded-md border border-brand-border bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-brand-green";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // Phase 1: no backend — acknowledge locally. Wire to an email/DB route in Phase 2.
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-md border border-brand-border bg-white p-10 text-center">
        <CheckCircle2 size={40} className="text-brand-green" />
        <p className="text-lg font-extrabold uppercase">Message sent</p>
        <p className="max-w-sm text-sm text-brand-muted">
          Thanks — our team will get back to you shortly. (Demo: messages aren&apos;t delivered
          until the backend is connected.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 rounded-md border border-brand-border bg-white p-6 sm:grid-cols-2">
      <label className={labelClasses}>Your name *
        <input required className={fieldClasses} />
      </label>
      <label className={labelClasses}>Email *
        <input required type="email" className={fieldClasses} />
      </label>
      <label className={labelClasses}>Phone
        <input type="tel" className={fieldClasses} />
      </label>
      <label className={labelClasses}>Subject
        <select className={fieldClasses}>
          {contactSubjects.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label className={`${labelClasses} sm:col-span-2`}>Message *
        <textarea required rows={5} placeholder="Type your message here..." className={fieldClasses} />
      </label>
      <button type="submit" className="rounded-md bg-brand-green px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark sm:col-span-2">
        Send message
      </button>
    </form>
  );
}
