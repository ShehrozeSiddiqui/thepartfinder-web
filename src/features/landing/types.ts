import type { LucideIcon } from "lucide-react";

export type Category = {
  name: string;
  partCount: string;
  image: string;
};

export type Benefit = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

export type Stat = {
  value: string;
  label: string;
};

export type FeaturedPart = {
  name: string;
  make: string;
  partNumber: string;
  price: number;
  inStock: boolean;
  image: string;
};

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Brand = {
  name: string;
};
