import { Globe, Headphones, Lock, ShieldCheck, Truck } from "lucide-react";
import type { Benefit } from "../types";

export const benefits: Benefit[] = [
  { title: "100% Genuine Parts", subtitle: "Trusted & Verified", icon: ShieldCheck },
  { title: "Fast Shipping", subtitle: "Worldwide Delivery", icon: Truck },
  { title: "Global Sourcing", subtitle: "Hard-to-Find Parts", icon: Globe },
  { title: "Secure Payments", subtitle: "Safe & Encrypted", icon: Lock },
  { title: "Expert Support", subtitle: "Dedicated Team", icon: Headphones },
];
