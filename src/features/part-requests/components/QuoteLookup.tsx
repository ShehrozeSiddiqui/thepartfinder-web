"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { routes } from "@/core/constants/routes";

export function QuoteLookup({ example }: { example: string }) {
  const router = useRouter();
  const [id, setId] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (id.trim()) router.push(routes.quote(id.trim().toUpperCase()));
  };

  return (
    <form onSubmit={onSubmit} className="flex max-w-lg flex-col gap-3 sm:flex-row">
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder={`Request reference, e.g. ${example}`}
        className="flex-1 rounded-md border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-green"
      />
      <button type="submit" className="flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark">
        <Search size={16} /> Track
      </button>
    </form>
  );
}
