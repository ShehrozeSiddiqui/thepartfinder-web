export type Condition = "Genuine OEM" | "OEM" | "Aftermarket" | "Used / Reconditioned";

export type Availability = "in-stock" | "ships-in-7-days" | "request";

export type Compatibility = {
  make: string;
  model: string;
  years: string;
  engine: string;
  notes: string;
};

export type CrossReference = {
  manufacturer: string;
  partNumber: string;
};

export type Part = {
  slug: string;
  name: string;
  brand: string;
  partNumber: string;
  category: string;
  subcategory: string;
  condition: Condition;
  /** null = price on request. */
  price: number | null;
  availability: Availability;
  image: string;
  description: string;
  origin: string;
  warranty: string;
  compatibility: Compatibility[];
  crossReferences: CrossReference[];
};
