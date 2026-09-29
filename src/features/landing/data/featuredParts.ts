import type { FeaturedPart } from "../types";

/**
 * Placeholder catalog data for the Phase 1 landing page only. Real inventory arrives with the
 * Supabase-backed parts catalog in Phase 2 — see context/features/landing.md. Prices use TT$
 * (site.currency) per ADR — see context/decisions.md.
 *
 * Images are remote placeholders (loremflickr keyword match, pinned with `lock`) — replace with
 * real product photos.
 */
const stockImage = (keywords: string, lock: number) =>
  `https://loremflickr.com/800/600/${keywords}?lock=${lock}`;

export const featuredParts: FeaturedPart[] = [
  { name: "Turbocharger Assembly", make: "Toyota", partNumber: "1KD-FTV", price: 8450, inStock: true, image: stockImage("turbocharger,car", 11) },
  { name: "Brake Pad Set", make: "Toyota", partNumber: "Front", price: 585, inStock: true, image: stockImage("brake,pads,car", 12) },
  { name: "Oil Filter", make: "Toyota", partNumber: "90915-YZZE1", price: 145, inStock: true, image: stockImage("oil,filter,car", 13) },
  { name: "Water Pump Assembly", make: "Toyota", partNumber: "16100-39426", price: 1120, inStock: true, image: stockImage("water,pump,car", 14) },
  { name: "Alternator", make: "Toyota", partNumber: "27060-0D050", price: 1950, inStock: false, image: stockImage("car,alternator", 15) },
  { name: "Air Filter", make: "Toyota", partNumber: "17801-0D060", price: 285, inStock: true, image: stockImage("car,air,filter", 16) },
];
