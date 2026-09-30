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
  siToyota,
} from "simple-icons";
import type { Brand } from "../types";

/**
 * Brand marks come from the `simple-icons` package — same pattern as
 * `features/find-my-part/data/vehicles.ts`. Lexus and Isuzu have no mark there and fall back to a
 * text wordmark. The marks are trademarks of their owners, shown only to identify parts
 * compatibility, not as an endorsement.
 */
export const brands: Brand[] = [
  { name: "Toyota", logoPath: siToyota.path },
  { name: "Lexus" },
  { name: "Honda", logoPath: siHonda.path },
  { name: "Nissan", logoPath: siNissan.path },
  { name: "Mazda", logoPath: siMazda.path },
  { name: "Subaru", logoPath: siSubaru.path },
  { name: "Mitsubishi", logoPath: siMitsubishi.path },
  { name: "Isuzu" },
  { name: "Hyundai", logoPath: siHyundai.path },
  { name: "Kia", logoPath: siKia.path },
  { name: "Ford", logoPath: siFord.path },
  { name: "Chevrolet", logoPath: siChevrolet.path },
  { name: "BMW", logoPath: siBmw.path },
  { name: "Audi", logoPath: siAudi.path },
];
