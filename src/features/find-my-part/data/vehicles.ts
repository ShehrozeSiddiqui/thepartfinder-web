import {
  siAudi,
  siBmw,
  siChevrolet,
  siFord,
  siHonda,
  siHyundai,
  siKia,
  siMazda,
  siMitsubishi,
  siNissan,
  siSubaru,
  siSuzuki,
  siToyota,
} from "simple-icons";
import type { Config, ConfigField, Make, Model } from "../types";

/**
 * Mock vehicle data for the Phase 1 UI. The real vehicle catalog (makes/models/years/configs)
 * arrives with the Supabase-backed catalog in Phase 2 — see context/features/find-my-part.md.
 * Brand marks come from the `simple-icons` package; Isuzu and Mercedes-Benz have none there and
 * fall back to a text wordmark. The marks are trademarks of their owners, shown only to identify
 * vehicle compatibility.
 */

const AUTO_MANUAL = ["Automatic", "Manual"];
const AUTO = ["Automatic"];

const model = (
  name: string,
  from: number,
  to: number,
  engines: string[],
  bodies: string[],
  drives: string[] = ["2WD"],
  transmissions: string[] = AUTO_MANUAL,
): Model => ({ name, years: [from, to], engines, bodies, drives, transmissions });

const PICKUP = ["Double Cab Pickup", "Single Cab Pickup", "Extra Cab Pickup"];
const SEDAN = ["Sedan"];
const SUV = ["SUV"];
const HATCH = ["Hatchback"];

export const makes: Make[] = [
  {
    name: "Toyota",
    logoPath: siToyota.path,
    models: [
      model("Hilux", 2005, 2025, ["2.8L Diesel (1GD-FTV)", "2.4L Diesel (2GD-FTV)", "2.7L Petrol (2TR-FE)", "4.0L Petrol (1GR-FE)"], PICKUP, ["4WD", "2WD"]),
      model("Corolla", 2008, 2025, ["1.8L Petrol (2ZR-FE)", "1.6L Petrol (1ZR-FE)", "1.8L Hybrid"], SEDAN, ["2WD"]),
      model("Fortuner", 2008, 2025, ["2.8L Diesel (1GD-FTV)", "2.7L Petrol (2TR-FE)"], SUV, ["4WD", "2WD"]),
      model("Land Cruiser", 2008, 2024, ["4.5L Diesel (1VD-FTV)", "4.0L Petrol (1GR-FE)"], SUV, ["4WD"], AUTO),
      model("RAV4", 2010, 2025, ["2.5L Petrol (A25A-FKS)", "2.0L Petrol (3ZR-FE)"], SUV, ["4WD", "2WD"]),
      model("Yaris", 2010, 2025, ["1.5L Petrol (1NZ-FE)", "1.3L Petrol (2NZ-FE)"], HATCH),
    ],
  },
  {
    name: "Nissan",
    logoPath: siNissan.path,
    models: [
      model("Navara", 2008, 2025, ["2.3L Diesel (YS23DDT)", "2.5L Diesel (YD25DDTi)"], PICKUP, ["4WD", "2WD"]),
      model("Frontier", 2008, 2022, ["2.5L Diesel (YD25)", "4.0L Petrol (VQ40DE)"], PICKUP, ["4WD", "2WD"]),
      model("Sentra", 2010, 2025, ["1.8L Petrol (MRA8DE)", "2.0L Petrol (MR20DD)"], SEDAN),
      model("X-Trail", 2008, 2025, ["2.5L Petrol (QR25DE)", "2.0L Petrol (MR20DD)"], SUV, ["4WD", "2WD"]),
      model("Note", 2012, 2020, ["1.2L Petrol (HR12DE)", "1.6L Petrol (HR16DE)"], HATCH, ["2WD"], AUTO),
    ],
  },
  {
    name: "Honda",
    logoPath: siHonda.path,
    models: [
      model("Civic", 2008, 2025, ["1.8L Petrol (R18)", "1.5L Turbo (L15B7)", "2.0L Petrol (K20)"], SEDAN),
      model("Accord", 2008, 2022, ["2.4L Petrol (K24)", "1.5L Turbo (L15B7)"], SEDAN),
      model("CR-V", 2008, 2025, ["2.4L Petrol (K24)", "1.5L Turbo (L15B7)"], SUV, ["4WD", "2WD"]),
      model("Fit", 2009, 2020, ["1.5L Petrol (L15A)", "1.3L Petrol (L13A)"], HATCH),
      model("HR-V", 2015, 2025, ["1.8L Petrol (R18Z)", "1.5L Petrol (L15B)"], SUV),
    ],
  },
  {
    name: "Mitsubishi",
    logoPath: siMitsubishi.path,
    models: [
      model("L200", 2006, 2025, ["2.4L Diesel (4N15)", "2.5L Diesel (4D56)"], PICKUP, ["4WD", "2WD"]),
      model("Lancer", 2008, 2017, ["1.5L Petrol (4A91)", "2.0L Petrol (4B11)"], SEDAN),
      model("Outlander", 2008, 2025, ["2.4L Petrol (4B12)", "2.0L Petrol (4B11)"], SUV, ["4WD", "2WD"]),
      model("Pajero", 2006, 2021, ["3.2L Diesel (4M41)", "3.8L Petrol (6G75)"], SUV, ["4WD"]),
    ],
  },
  {
    name: "Mazda",
    logoPath: siMazda.path,
    models: [
      model("Mazda3", 2009, 2025, ["2.0L Petrol (SkyActiv-G)", "1.5L Petrol (SkyActiv-G)"], [...SEDAN, ...HATCH]),
      model("Mazda6", 2009, 2022, ["2.5L Petrol (SkyActiv-G)", "2.2L Diesel (SkyActiv-D)"], SEDAN),
      model("CX-5", 2013, 2025, ["2.5L Petrol (SkyActiv-G)", "2.2L Diesel (SkyActiv-D)"], SUV, ["4WD", "2WD"]),
      model("BT-50", 2008, 2025, ["3.0L Diesel (WE-C)", "3.2L Diesel (P5-AT)"], PICKUP, ["4WD", "2WD"]),
    ],
  },
  {
    name: "Subaru",
    logoPath: siSubaru.path,
    models: [
      model("Impreza", 2008, 2025, ["2.0L Petrol (FB20)", "1.6L Petrol (FB16)"], [...SEDAN, ...HATCH], ["4WD"], AUTO),
      model("Forester", 2008, 2025, ["2.5L Petrol (FB25)", "2.0L Petrol (FB20)"], SUV, ["4WD"], AUTO),
      model("Outback", 2010, 2025, ["2.5L Petrol (FB25)", "3.6L Petrol (EZ36)"], SUV, ["4WD"], AUTO),
      model("XV", 2012, 2022, ["2.0L Petrol (FB20)", "1.6L Petrol (FB16)"], SUV, ["4WD"], AUTO),
    ],
  },
  {
    name: "Isuzu",
    models: [
      model("D-Max", 2006, 2025, ["3.0L Diesel (4JJ1)", "1.9L Diesel (RZ4E)"], PICKUP, ["4WD", "2WD"]),
      model("MU-X", 2014, 2025, ["3.0L Diesel (4JJ1)", "1.9L Diesel (RZ4E)"], SUV, ["4WD", "2WD"]),
      model("Trooper", 2000, 2005, ["3.0L Diesel (4JX1)", "3.5L Petrol (6VE1)"], SUV, ["4WD"]),
    ],
  },
  {
    name: "Suzuki",
    logoPath: siSuzuki.path,
    models: [
      model("Swift", 2008, 2025, ["1.2L Petrol (K12)", "1.4L Petrol (K14)"], HATCH),
      model("Vitara", 2015, 2025, ["1.6L Petrol (M16A)", "1.4L Turbo (K14C)"], SUV, ["4WD", "2WD"]),
      model("Jimny", 2008, 2025, ["1.5L Petrol (K15B)", "1.3L Petrol (M13A)"], SUV, ["4WD"]),
    ],
  },
  {
    name: "Hyundai",
    logoPath: siHyundai.path,
    models: [
      model("Tucson", 2010, 2025, ["2.0L Petrol (Nu)", "2.0L Diesel (R)"], SUV, ["4WD", "2WD"]),
      model("Elantra", 2008, 2025, ["2.0L Petrol (Nu)", "1.6L Petrol (Gamma)"], SEDAN),
      model("Santa Fe", 2008, 2025, ["2.4L Petrol (Theta II)", "2.2L Diesel (R)"], SUV, ["4WD", "2WD"]),
      model("Accent", 2008, 2022, ["1.6L Petrol (Gamma)", "1.4L Petrol (Kappa)"], SEDAN),
    ],
  },
  {
    name: "Kia",
    logoPath: siKia.path,
    models: [
      model("Sportage", 2010, 2025, ["2.0L Petrol (Nu)", "1.7L Diesel (U2)"], SUV, ["4WD", "2WD"]),
      model("Rio", 2008, 2025, ["1.4L Petrol (Gamma)", "1.6L Petrol (Gamma)"], [...SEDAN, ...HATCH]),
      model("Sorento", 2010, 2025, ["2.4L Petrol (Theta II)", "2.2L Diesel (R)"], SUV, ["4WD", "2WD"]),
      model("Picanto", 2011, 2025, ["1.0L Petrol (Kappa)", "1.2L Petrol (Kappa)"], HATCH),
    ],
  },
  {
    name: "Ford",
    logoPath: siFord.path,
    models: [
      model("Ranger", 2006, 2025, ["2.2L Diesel (Duratorq)", "3.2L Diesel (Duratorq)", "2.0L Bi-Turbo Diesel"], PICKUP, ["4WD", "2WD"]),
      model("F-150", 2009, 2025, ["5.0L V8 (Coyote)", "3.5L EcoBoost V6"], PICKUP, ["4WD", "2WD"], AUTO),
      model("Focus", 2008, 2018, ["2.0L Petrol (Duratec)", "1.6L Petrol (Ti-VCT)"], [...SEDAN, ...HATCH]),
      model("Everest", 2015, 2025, ["2.0L Bi-Turbo Diesel", "3.2L Diesel (Duratorq)"], SUV, ["4WD", "2WD"]),
    ],
  },
  {
    name: "Chevrolet",
    logoPath: siChevrolet.path,
    models: [
      model("Silverado", 2008, 2025, ["5.3L V8 (L83)", "6.2L V8 (L87)"], PICKUP, ["4WD", "2WD"], AUTO),
      model("Colorado", 2012, 2025, ["2.8L Diesel (Duramax)", "3.6L Petrol (LFX)"], PICKUP, ["4WD", "2WD"]),
      model("Cruze", 2010, 2019, ["1.4L Turbo (LUV)", "1.8L Petrol (2H0)"], SEDAN),
    ],
  },
  {
    name: "Mercedes-Benz",
    models: [
      model("C-Class", 2008, 2025, ["2.0L Turbo (M274)", "2.1L Diesel (OM651)"], SEDAN, ["2WD"], AUTO),
      model("E-Class", 2009, 2025, ["2.0L Turbo (M274)", "3.0L Diesel (OM642)"], SEDAN, ["2WD"], AUTO),
      model("GLC", 2016, 2025, ["2.0L Turbo (M264)", "2.0L Diesel (OM654)"], SUV, ["4WD"], AUTO),
    ],
  },
  {
    name: "BMW",
    logoPath: siBmw.path,
    models: [
      model("3 Series", 2008, 2025, ["2.0L Turbo (B48)", "2.0L Diesel (B47)"], SEDAN, ["2WD", "4WD"], AUTO),
      model("5 Series", 2010, 2025, ["2.0L Turbo (B48)", "3.0L Turbo (B58)"], SEDAN, ["2WD", "4WD"], AUTO),
      model("X5", 2008, 2025, ["3.0L Turbo (B58)", "3.0L Diesel (B57)"], SUV, ["4WD"], AUTO),
    ],
  },
  {
    name: "Audi",
    logoPath: siAudi.path,
    models: [
      model("A4", 2008, 2025, ["2.0L TFSI", "2.0L TDI"], SEDAN, ["2WD", "4WD"], AUTO),
      model("Q5", 2009, 2025, ["2.0L TFSI", "2.0L TDI"], SUV, ["4WD"], AUTO),
      model("Q7", 2008, 2025, ["3.0L TFSI", "3.0L TDI"], SUV, ["4WD"], AUTO),
    ],
  },
];

export const markets = ["Asia / Middle East", "Europe", "North America", "Australia"];

/** Model years available for a model, newest first. */
export const yearsFor = (vehicle: Model): string[] => {
  const [from, to] = vehicle.years;
  return Array.from({ length: to - from + 1 }, (_, i) => String(to - i));
};

/** Configuration dropdowns for a model. First option of each is the default. */
export const configFieldsFor = (vehicle: Model): ConfigField[] => [
  { key: "engine", label: "Engine", options: vehicle.engines },
  { key: "transmission", label: "Transmission", options: vehicle.transmissions },
  { key: "drive", label: "Drive", options: vehicle.drives },
  { key: "body", label: "Body Type", options: vehicle.bodies },
  { key: "market", label: "Market", options: markets },
];

export const defaultConfigFor = (vehicle: Model): Config =>
  Object.fromEntries(configFieldsFor(vehicle).map((f) => [f.key, f.options[0]])) as Config;

export const popularSearches: { make: string; model: string }[] = [
  { make: "Toyota", model: "Hilux" },
  { make: "Nissan", model: "Navara" },
  { make: "Ford", model: "Ranger" },
  { make: "Honda", model: "Civic" },
  { make: "BMW", model: "X5" },
  { make: "Mercedes-Benz", model: "C-Class" },
];
