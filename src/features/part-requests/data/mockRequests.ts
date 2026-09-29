import type { PartRequest } from "../types";

/** Mock request for the Phase 1 tracker UI. Real requests arrive with Supabase in Phase 2. */
export const mockRequests: PartRequest[] = [
  {
    id: "PF-000124",
    submitted: "May 8, 2025",
    status: "Pending",
    vehicle: "2018 Toyota Hilux 2.8L Diesel",
    partName: "Turbocharger Assembly",
    notes: "Part number 17201-0L040 if available; genuine preferred.",
    quotes: [
      { part: "Turbocharger Assembly", partNumber: "17201-0L040", supplier: "Local Dealer", price: 18450 },
      { part: "Oil Filter", partNumber: "90915-YZZD4", supplier: "Regional Supplier", price: 185 },
    ],
  },
];

export const getRequest = (id: string): PartRequest | undefined =>
  mockRequests.find((r) => r.id.toLowerCase() === id.toLowerCase());
