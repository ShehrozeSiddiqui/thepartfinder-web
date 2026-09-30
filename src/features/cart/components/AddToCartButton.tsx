"use client";

import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import type { Part } from "@/features/parts/types";
import { useCart } from "../lib/CartProvider";

/** Adds a priced part to the cart. Parts priced on request never render this button. */
export function AddToCartButton({ part, qty = 1, className = "" }: { part: Part; qty?: number; className?: string }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  if (part.price === null) return null;
  const { price } = part;

  const onClick = () => {
    add({ slug: part.slug, name: part.name, partNumber: part.partNumber, price, image: part.image }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-1.5 rounded-md bg-brand-green px-4 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark ${className}`}
    >
      {added ? <Check size={14} /> : <ShoppingCart size={14} />} {added ? "Added" : "Add to cart"}
    </button>
  );
}
