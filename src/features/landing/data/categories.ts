import { Car, Cog, Disc, Fan, Fuel, RotateCw, Settings, Waves, Wind, Zap } from "lucide-react";
import type { Category } from "../types";

export const categories: Category[] = [
  { name: "Engine", partCount: "432 Parts", icon: Cog },
  { name: "Transmission", partCount: "154 Parts", icon: Settings },
  { name: "Suspension", partCount: "234 Parts", icon: Waves },
  { name: "Braking System", partCount: "187 Parts", icon: Disc },
  { name: "Electrical", partCount: "201 Parts", icon: Zap },
  { name: "Body Parts", partCount: "319 Parts", icon: Car },
  { name: "Steering", partCount: "89 Parts", icon: RotateCw },
  { name: "Cooling System", partCount: "96 Parts", icon: Fan },
  { name: "Exhaust System", partCount: "67 Parts", icon: Wind },
  { name: "Fuel System", partCount: "128 Parts", icon: Fuel },
];
