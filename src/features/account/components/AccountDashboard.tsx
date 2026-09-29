"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { routes } from "@/core/constants/routes";
import { loadOrders } from "@/features/cart/lib/orders";

export function AccountDashboard() {
  const [orderCount, setOrderCount] = useState(0);
  const [vehicleCount, setVehicleCount] = useState(0);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- read localStorage after mount */
    setOrderCount(loadOrders().length);
    try {
      setVehicleCount(JSON.parse(localStorage.getItem("pf-garage") ?? "[]").length);
    } catch {
      setVehicleCount(0);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const cards = [
    { label: "Orders", value: orderCount, href: routes.accountOrders },
    { label: "Vehicles in garage", value: vehicleCount, href: routes.accountGarage },
    { label: "Open requests", value: 1, href: routes.accountQuotes },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-brand-muted">
        Demo account — there is no sign-in yet, so this data lives only in this browser.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.label} href={card.href} className="rounded-md border border-brand-border bg-white p-5 hover:border-brand-green">
            <p className="text-3xl font-extrabold text-brand-green">{card.value}</p>
            <p className="text-xs font-bold uppercase tracking-wide text-brand-muted">{card.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
