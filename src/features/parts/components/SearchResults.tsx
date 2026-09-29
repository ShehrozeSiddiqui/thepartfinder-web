import Link from "next/link";
import { routes } from "@/core/constants/routes";
import type { Part } from "../types";
import { PartCard } from "./PartCard";

/** Shared result list for the part-number and description searches, with a request fallback. */
export function SearchResults({ query, results }: { query: string; results: Part[] }) {
  if (!query) return null;

  if (!results.length) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-md border border-dashed border-brand-border p-8">
        <p className="font-semibold">No parts found for &ldquo;{query}&rdquo;.</p>
        <p className="text-sm text-brand-muted">
          That doesn&apos;t mean we can&apos;t get it — hard-to-find parts are what we do.
        </p>
        <Link
          href={`${routes.partRequest}?part=${encodeURIComponent(query)}`}
          className="rounded-md bg-brand-green px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark"
        >
          Request this part
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-brand-muted">
        {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
      </p>
      {results.map((part) => (
        <PartCard key={part.slug} part={part} />
      ))}
    </div>
  );
}
