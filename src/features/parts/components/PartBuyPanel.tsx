"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { routes } from "@/core/constants/routes";
import { AddToCartButton } from "@/features/cart/components/AddToCartButton";
import { useCart } from "@/features/cart/lib/CartProvider";
import type { Part } from "../types";

const actionClasses = "w-full rounded-md px-6 py-3 text-sm font-bold uppercase tracking-wide text-white";

export function PartBuyPanel({ part }: { part: Part }) {
  const [qty, setQty] = useState(1);
  const router = useRouter();
  const { add } = useCart();

  if (part.price === null) {
    const query = new URLSearchParams({ part: part.name, partNumber: part.partNumber });
    return (
      <div className="flex flex-col gap-3">
        <Link
          href={`${routes.partRequest}?${query}`}
          className="rounded-md bg-brand-orange px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
        >
          Request price
        </Link>
        <Link
          href={routes.partRequest}
          className="rounded-md border border-brand-border px-6 py-3 text-center text-sm font-bold uppercase tracking-wide hover:border-brand-green"
        >
          Check availability
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-md border border-brand-border">
          <button type="button" aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))} className="p-3">
            <Minus size={14} />
          </button>
          <span className="w-8 text-center text-sm font-semibold" aria-live="polite">
            {qty}
          </span>
          <button type="button" aria-label="Increase quantity" onClick={() => setQty(qty + 1)} className="p-3">
            <Plus size={14} />
          </button>
        </div>
        <AddToCartButton part={part} qty={qty} className="w-full py-3 text-sm" />
      </div>
      <button
        type="button"
        onClick={() => {
          add({ slug: part.slug, name: part.name, partNumber: part.partNumber, price: part.price as number, image: part.image }, qty);
          router.push(routes.checkout);
        }}
        className={`${actionClasses} bg-brand-orange hover:brightness-95`}
      >
        Buy now
      </button>
    </div>
  );
}
