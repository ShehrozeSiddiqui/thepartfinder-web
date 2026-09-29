import { site } from "@/core/constants/site";

export function formatPrice(amount: number): string {
  return `${site.currency}${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
