import type { Category } from "../types";

/**
 * Images are pinned Pexels photo IDs (verified to resolve) rather than a keyword-search
 * placeholder service — see ADR-005 in context/decisions.md.
 */
const image = (pexelsId: number) =>
  `https://images.pexels.com/photos/${pexelsId}/pexels-photo-${pexelsId}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const categories: Category[] = [
  { name: "Engine", partCount: "432 Parts", image: image(24286596) },
  { name: "Transmission", partCount: "154 Parts", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2" },
  { name: "Suspension", partCount: "234 Parts", image: image(7019766) },
  { name: "Braking System", partCount: "187 Parts", image: image(6870299) },
  { name: "Electrical", partCount: "201 Parts", image: image(4374843) },
  { name: "Body Parts", partCount: "319 Parts", image: image(999001) },
  { name: "Steering", partCount: "89 Parts", image: image(5180905) },
  { name: "Cooling System", partCount: "96 Parts", image: image(18193178) },
  { name: "Exhaust System", partCount: "67 Parts", image: image(5233282) },
  { name: "Fuel System", partCount: "128 Parts", image: image(12555016) },
];
