"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

/** Footer newsletter signup. Acknowledges locally until an email provider is connected. */
export function NewsletterForm() {
  const [done, setDone] = useState(false);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setDone(true);
  };

  if (done) return <p className="text-sm text-brand-green">Thanks — you&apos;re on the list.</p>;

  return (
    <form onSubmit={onSubmit} className="flex overflow-hidden rounded-md bg-white">
      <input
        required
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
        className="w-full px-4 py-2.5 text-sm text-brand-ink outline-none"
      />
      <button type="submit" aria-label="Subscribe" className="bg-brand-green px-4 text-white hover:bg-brand-green-dark">
        <Send size={16} />
      </button>
    </form>
  );
}
