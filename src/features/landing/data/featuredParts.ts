import type { FeaturedPart } from "../types";

/**
 * Placeholder catalog data for the Phase 1 landing page only. Real inventory arrives with the
 * Supabase-backed parts catalog in Phase 2 — see context/features/landing.md. Prices use TT$
 * (site.currency) per ADR — see context/decisions.md.
 */
export const featuredParts: FeaturedPart[] = [
  { name: "Turbocharger Assembly", make: "Toyota", partNumber: "1KD-FTV", price: 8450, inStock: true },
  { name: "Brake Pad Set", make: "Toyota", partNumber: "Front", price: 585, inStock: true },
  { name: "Oil Filter", make: "Toyota", partNumber: "90915-YZZE1", price: 145, inStock: true },
  { name: "Water Pump Assembly", make: "Toyota", partNumber: "16100-39426", price: 1120, inStock: true },
  { name: "Alternator", make: "Toyota", partNumber: "27060-0D050", price: 1950, inStock: false },
  { name: "Air Filter", make: "Toyota", partNumber: "17801-0D060", price: 285, inStock: true },
];
