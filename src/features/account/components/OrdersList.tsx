"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/core/components/Badge";
import { formatPrice } from "@/core/lib/format";
import { loadOrders } from "@/features/cart/lib/orders";
import type { Order } from "@/features/cart/types";

export function OrdersList() {
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read localStorage after mount
    setOrders(loadOrders());
  }, []);

  if (orders === null) return null;
  if (!orders.length) {
    return (
      <p className="rounded-md border border-dashed border-brand-border p-10 text-center text-sm text-brand-muted">
        No orders yet. Orders you place will appear here.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {orders.map((order) => (
        <article key={order.id} className="rounded-md border border-brand-border bg-white p-4">
          <header className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-bold">{order.id}</p>
              <p className="text-xs text-brand-muted">Placed {order.placed}</p>
            </div>
            <Badge tone="orange">{order.status}</Badge>
          </header>
          <ul className="mt-3 border-t border-brand-border pt-3 text-sm">
            {order.items.map((i) => (
              <li key={i.slug} className="flex justify-between py-0.5">
                <span>{i.qty} × {i.name}</span>
                <span>{formatPrice(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-right text-sm font-extrabold">Total {formatPrice(order.total)}</p>
        </article>
      ))}
    </div>
  );
}
