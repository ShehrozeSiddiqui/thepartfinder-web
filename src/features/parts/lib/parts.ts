import { parts } from "../data/parts";
import type { Availability, Condition, Part } from "../types";

export const availabilityLabel: Record<Availability, string> = {
  "in-stock": "In Stock",
  "ships-in-7-days": "Ships in 7 days",
  request: "Request Price",
};

export const getPart = (slug: string): Part | undefined => parts.find((p) => p.slug === slug);

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Matches a part's own number or any cross-referenced number, ignoring dashes/spacing/case. */
export function searchByPartNumber(query: string): Part[] {
  const needle = normalize(query);
  if (!needle) return [];
  return parts.filter(
    (p) =>
      normalize(p.partNumber).includes(needle) ||
      p.crossReferences.some((ref) => normalize(ref.partNumber).includes(needle)),
  );
}

/** Keyword search over name, brand, category and description — every word must match. */
export function searchByDescription(query: string): Part[] {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  return parts.filter((p) => {
    const haystack = `${p.name} ${p.brand} ${p.category} ${p.subcategory} ${p.description} ${p.compatibility
      .map((c) => `${c.make} ${c.model}`)
      .join(" ")}`.toLowerCase();
    return words.every((w) => haystack.includes(w));
  });
}

export const conditions: Condition[] = ["Genuine OEM", "OEM", "Aftermarket", "Used / Reconditioned"];
