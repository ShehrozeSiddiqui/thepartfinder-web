import { Award, Handshake, Lightbulb, Users } from "lucide-react";
import type { Value } from "../types";

/**
 * "Why choose us" copy draws its tone from the ICARS Company Limited brand framework
 * (trust, solutions-first, customer-first, quality) — see context/decisions.md ADR-002.
 * The Pathfinder is the on-page brand name; these values inform voice only.
 */
export const values: Value[] = [
  {
    title: "Trust, Built In",
    description:
      "Honest sourcing and transparent communication — you always know what you're getting and why.",
    icon: Handshake,
  },
  {
    title: "Solutions First",
    description:
      "We don't just sell parts. We solve the problem of finding the part you actually need.",
    icon: Lightbulb,
  },
  {
    title: "Customer First",
    description:
      "We listen, understand the vehicle and the need, then find the right fit — every time.",
    icon: Users,
  },
  {
    title: "Quality You Can Rely On",
    description:
      "Genuine, OEM and vetted aftermarket parts, so what arrives is what fits.",
    icon: Award,
  },
];
