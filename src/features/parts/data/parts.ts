import type { Availability, Compatibility, Condition, Part } from "../types";

/**
 * Mock catalog for the Phase 1 UI. Real inventory arrives with the Supabase-backed catalog in
 * Phase 2 — see context/features/parts.md. Part numbers/specs are illustrative, not verified
 * fitment data. Images are pinned Pexels photo IDs (verified to resolve) rather than a
 * keyword-search placeholder service — loremflickr, used previously, returns 401s and random
 * unrelated matches; see context/decisions.md ADR-005.
 */
const image = (pexelsId: number) =>
  `https://images.pexels.com/photos/${pexelsId}/pexels-photo-${pexelsId}.jpeg?auto=compress&cs=tinysrgb&w=800`;

const fit = (make: string, model: string, years: string, engine: string, notes = "All Models"): Compatibility => ({
  make,
  model,
  years,
  engine,
  notes,
});

const HILUX_DIESEL = "2.8L 1GD-FTV Diesel";

type Seed = {
  slug: string;
  name: string;
  brand: string;
  partNumber: string;
  category: string;
  subcategory: string;
  condition: Condition;
  price: number | null;
  availability: Availability;
  imagePexelsId: number;
  description: string;
  origin?: string;
  compatibility: Compatibility[];
  crossReferences?: Part["crossReferences"];
};

const seeds: Seed[] = [
  {
    slug: "turbocharger-assembly-17201-0l040",
    name: "Turbocharger Assembly",
    brand: "Toyota Genuine",
    partNumber: "17201-0L040",
    category: "Engine",
    subcategory: "Turbocharger",
    condition: "Genuine OEM",
    price: 18450,
    availability: "in-stock",
    imagePexelsId: 8237050,
    description:
      "Genuine Toyota turbocharger assembly for 2.8L 1GD-FTV diesel engine. Direct-fit replacement, 100% OEM quality.",
    origin: "Japan",
    compatibility: [
      fit("Toyota", "Hilux", "2016 – 2021", HILUX_DIESEL),
      fit("Toyota", "Fortuner", "2016 – 2021", HILUX_DIESEL),
      fit("Toyota", "Innova", "2016 – 2020", "2.8L 1GD-FTV Diesel"),
    ],
    crossReferences: [
      { manufacturer: "Toyota", partNumber: "17201-11080" },
      { manufacturer: "Garrett", partNumber: "GT1749V-1KD" },
    ],
  },
  {
    slug: "timing-belt-kit-13568-09140",
    name: "Timing Belt Kit",
    brand: "Gates",
    partNumber: "13568-09140",
    category: "Engine",
    subcategory: "Timing Components",
    condition: "OEM",
    price: 950,
    availability: "in-stock",
    imagePexelsId: 17356337,
    description: "Complete timing belt kit with tensioner and idler pulleys. OEM-equivalent specification.",
    compatibility: [
      fit("Toyota", "Corolla", "2008 – 2013", "1.8L 2ZR-FE Petrol"),
      fit("Toyota", "RAV4", "2009 – 2012", "2.0L 3ZR-FE Petrol"),
    ],
    crossReferences: [{ manufacturer: "Gates", partNumber: "K015578XS" }],
  },
  {
    slug: "oil-filter-90915-yzzd4",
    name: "Oil Filter",
    brand: "Toyota Genuine",
    partNumber: "90915-YZZD4",
    category: "Engine",
    subcategory: "Filters & Fluids",
    condition: "Genuine OEM",
    price: 185,
    availability: "in-stock",
    imagePexelsId: 30674526,
    description: "Genuine Toyota spin-on oil filter. Fits a wide range of petrol and diesel applications.",
    origin: "Japan",
    compatibility: [
      fit("Toyota", "Hilux", "2005 – 2025", "All Diesel"),
      fit("Toyota", "Corolla", "2008 – 2025", "1.8L Petrol"),
      fit("Toyota", "Yaris", "2010 – 2025", "1.5L Petrol"),
    ],
    crossReferences: [
      { manufacturer: "Toyota", partNumber: "90915-YZZE1" },
      { manufacturer: "Denso", partNumber: "DXE-1901" },
    ],
  },
  {
    slug: "water-pump-assembly-16100-39426",
    name: "Water Pump Assembly",
    brand: "Aisin",
    partNumber: "16100-39426",
    category: "Cooling System",
    subcategory: "Water Pumps",
    condition: "OEM",
    price: 725,
    availability: "in-stock",
    imagePexelsId: 18193178,
    description: "OEM-supplier water pump assembly with gasket. Direct replacement for the original unit.",
    origin: "Japan",
    compatibility: [
      fit("Toyota", "Land Cruiser", "2008 – 2015", "4.0L 1GR-FE Petrol"),
      fit("Toyota", "Hilux", "2005 – 2015", "4.0L 1GR-FE Petrol"),
    ],
    crossReferences: [{ manufacturer: "Aisin", partNumber: "WPT-165" }],
  },
  {
    slug: "brake-pad-set-front-04465-0k240",
    name: "Brake Pad Set (Front)",
    brand: "Toyota Genuine",
    partNumber: "04465-0K240",
    category: "Braking System",
    subcategory: "Brake Pads",
    condition: "Genuine OEM",
    price: 585,
    availability: "in-stock",
    imagePexelsId: 4022543,
    description: "Genuine front brake pad set with wear indicators. Low-dust, low-noise compound.",
    origin: "Japan",
    compatibility: [
      fit("Toyota", "Hilux", "2005 – 2015", "All Models"),
      fit("Toyota", "Fortuner", "2008 – 2015", "All Models"),
    ],
    crossReferences: [{ manufacturer: "Akebono", partNumber: "AN-796WK" }],
  },
  {
    slug: "brake-disc-front-43512-0k120",
    name: "Brake Disc (Front)",
    brand: "Brembo",
    partNumber: "43512-0K120",
    category: "Braking System",
    subcategory: "Brake Discs",
    condition: "Aftermarket",
    price: 890,
    availability: "ships-in-7-days",
    imagePexelsId: 6870299,
    description: "Vented front brake disc, coated for corrosion protection. Sold individually.",
    compatibility: [fit("Toyota", "Hilux", "2005 – 2015", "All Models")],
    crossReferences: [{ manufacturer: "Brembo", partNumber: "09.A426.11" }],
  },
  {
    slug: "alternator-27060-0d050",
    name: "Alternator",
    brand: "Denso",
    partNumber: "27060-0D050",
    category: "Electrical",
    subcategory: "Alternators",
    condition: "OEM",
    price: 1950,
    availability: "ships-in-7-days",
    imagePexelsId: 4374843,
    description: "Denso 100A alternator, remanufactured to OEM specification with 12-month warranty.",
    compatibility: [
      fit("Toyota", "Corolla", "2008 – 2013", "1.8L 2ZR-FE Petrol"),
      fit("Toyota", "Yaris", "2010 – 2014", "1.5L Petrol"),
    ],
    crossReferences: [{ manufacturer: "Denso", partNumber: "104210-3510" }],
  },
  {
    slug: "starter-motor-28100-0l020",
    name: "Starter Motor",
    brand: "Denso",
    partNumber: "28100-0L020",
    category: "Electrical",
    subcategory: "Starters",
    condition: "OEM",
    price: 1620,
    availability: "in-stock",
    imagePexelsId: 12555016,
    description: "Gear-reduction starter motor, direct fit. Tested before dispatch.",
    compatibility: [fit("Toyota", "Hilux", "2005 – 2015", "2.5L / 3.0L Diesel")],
  },
  {
    slug: "air-filter-17801-0d060",
    name: "Air Filter",
    brand: "Toyota Genuine",
    partNumber: "17801-0D060",
    category: "Engine",
    subcategory: "Filters & Fluids",
    condition: "Genuine OEM",
    price: 285,
    availability: "in-stock",
    imagePexelsId: 20094998,
    description: "Genuine panel-type air filter element. Maintains correct airflow and engine protection.",
    origin: "Japan",
    compatibility: [
      fit("Toyota", "Corolla", "2008 – 2013", "1.6L / 1.8L Petrol"),
      fit("Toyota", "Yaris", "2010 – 2014", "1.5L Petrol"),
    ],
  },
  {
    slug: "steering-rack-assembly-34110-xa010",
    name: "Steering Rack Assembly",
    brand: "Nissan Genuine",
    partNumber: "34110-XA010",
    category: "Steering",
    subcategory: "Steering Racks",
    condition: "Genuine OEM",
    price: null,
    availability: "request",
    imagePexelsId: 5180905,
    description: "Genuine power steering rack. Supplier verification required before order confirmation.",
    origin: "Japan",
    compatibility: [
      fit("Nissan", "Navara", "2005 – 2015", "2.5L YD25 Diesel", "Front, LHD/RHD"),
      fit("Nissan", "Frontier", "2005 – 2015", "2.5L YD25 Diesel"),
    ],
    crossReferences: [
      { manufacturer: "Nissan", partNumber: "34110-EB30D" },
      { manufacturer: "TRW", partNumber: "JRP 1263" },
    ],
  },
  {
    slug: "shock-absorber-front-48510-09j60",
    name: "Shock Absorber (Front)",
    brand: "KYB",
    partNumber: "48510-09J60",
    category: "Suspension",
    subcategory: "Shock Absorbers",
    condition: "Aftermarket",
    price: 780,
    availability: "in-stock",
    imagePexelsId: 7019766,
    description: "Gas-charged front shock absorber. Sold individually.",
    compatibility: [fit("Toyota", "Hilux", "2005 – 2015", "All Models")],
    crossReferences: [{ manufacturer: "KYB", partNumber: "341328" }],
  },
  {
    slug: "radiator-16400-0l190",
    name: "Radiator",
    brand: "Denso",
    partNumber: "16400-0L190",
    category: "Cooling System",
    subcategory: "Radiators",
    condition: "OEM",
    price: 2450,
    availability: "ships-in-7-days",
    imagePexelsId: 18193178,
    description: "Aluminium-core radiator with plastic tanks, pressure-tested before dispatch.",
    compatibility: [fit("Toyota", "Hilux", "2005 – 2015", "2.5L / 3.0L Diesel")],
  },
  {
    slug: "headlight-assembly-81130-0k410",
    name: "Headlight Assembly (Left)",
    brand: "Toyota Genuine",
    partNumber: "81130-0K410",
    category: "Body Parts",
    subcategory: "Lighting",
    condition: "Genuine OEM",
    price: 1780,
    availability: "in-stock",
    imagePexelsId: 19821955,
    description: "Genuine left-hand headlight assembly with bulbs and adjuster motor.",
    origin: "Japan",
    compatibility: [fit("Toyota", "Hilux", "2012 – 2015", "All Models")],
  },
];

export const parts: Part[] = seeds.map(
  ({ imagePexelsId, origin = "Various", crossReferences = [], ...seed }) => ({
    ...seed,
    image: image(imagePexelsId),
    origin,
    warranty: seed.condition === "Aftermarket" ? "6 Months" : "12 Months",
    crossReferences,
  }),
);
