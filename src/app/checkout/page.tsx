import type { Metadata } from "next";
import { CheckoutFlow } from "@/features/cart/components/CheckoutFlow";

export const metadata: Metadata = { title: "Checkout | The Pathfinder Auto Parts Sales" };

export default function CheckoutPage() {
  return <CheckoutFlow />;
}
