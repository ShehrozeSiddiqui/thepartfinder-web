"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Trash2 } from "lucide-react";
import { Container } from "@/core/components/Container";
import { routes } from "@/core/constants/routes";
import { formatPrice } from "@/core/lib/format";
import { CHECKOUT_STEPS, paymentMethods, shippingMethods } from "../data/checkout";
import { useCart } from "../lib/CartProvider";
import { saveOrder } from "../lib/orders";
import type { Order, ShippingDetails } from "../types";

const labelClasses = "flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wide";
const fieldClasses =
  "rounded-md border border-brand-border bg-white px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-brand-green";
const primaryClasses =
  "rounded-md bg-brand-green px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-green-dark disabled:opacity-60";

export function CheckoutFlow() {
  const { items, subtotal, setQty, remove, clear } = useCart();
  const [step, setStep] = useState(0);
  const [shipping, setShipping] = useState<ShippingDetails>({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    method: shippingMethods[0].id,
  });
  const [payment, setPayment] = useState(paymentMethods[0].id);
  const [placed, setPlaced] = useState<Order | null>(null);

  const method = shippingMethods.find((m) => m.id === shipping.method) ?? shippingMethods[0];
  const total = subtotal + method.cost;

  const placeOrder = () => {
    const order: Order = {
      id: `PF-ORD-${String(Date.now()).slice(-6)}`,
      placed: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      items,
      shipping: { ...shipping, method: method.label },
      paymentMethod: paymentMethods.find((p) => p.id === payment)?.label ?? payment,
      subtotal,
      shippingCost: method.cost,
      total,
      status: "Processing",
    };
    saveOrder(order);
    clear();
    setPlaced(order);
  };

  if (placed) {
    return (
      <Container className="flex flex-col items-center gap-4 py-20 text-center">
        <CheckCircle2 size={48} className="text-brand-green" />
        <h1 className="text-3xl font-extrabold uppercase">Order placed</h1>
        <p className="max-w-md text-brand-muted">
          Thanks! Your order <strong className="text-brand-ink">{placed.id}</strong> for{" "}
          {formatPrice(placed.total)} is being processed. This is a demo checkout — no payment was
          taken and nothing was sent to a server.
        </p>
        <div className="flex gap-3">
          <Link href={routes.accountOrders} className={primaryClasses}>View my orders</Link>
          <Link href={routes.parts} className="rounded-md border border-brand-border px-8 py-3 text-sm font-bold uppercase tracking-wide">
            Keep shopping
          </Link>
        </div>
      </Container>
    );
  }

  if (!items.length) {
    return (
      <Container className="flex flex-col items-center gap-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold uppercase">Your cart is empty</h1>
        <p className="text-brand-muted">Browse parts and add what you need.</p>
        <Link href={routes.parts} className={primaryClasses}>Browse parts</Link>
      </Container>
    );
  }

  const next = (event?: FormEvent) => {
    event?.preventDefault();
    setStep((s) => s + 1);
  };

  return (
    <Container className="flex flex-col gap-6 py-10">
      <h1 className="text-3xl font-extrabold uppercase">Checkout</h1>

      <ol className="grid grid-cols-2 overflow-hidden rounded-md bg-black/5 text-xs font-bold uppercase tracking-wide sm:grid-cols-4">
        {CHECKOUT_STEPS.map((label, index) => (
          <li key={label}>
            <button
              type="button"
              disabled={index > step}
              onClick={() => setStep(index)}
              className={`w-full px-4 py-3 ${index === step ? "bg-brand-green text-white" : index < step ? "text-brand-ink" : "text-brand-muted"}`}
            >
              {index + 1}. {label}
            </button>
          </li>
        ))}
      </ol>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-md border border-brand-border bg-white p-5">
          {step === 0 && (
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-wide">
                Your cart ({items.reduce((n, i) => n + i.qty, 0)} items)
              </p>
              {items.map((item) => (
                <div key={item.slug} className="flex items-center gap-4 border-t border-brand-border pt-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded bg-black/5">
                    <Image src={item.image} alt={item.name} fill unoptimized sizes="64px" className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-brand-muted">{item.partNumber}</p>
                  </div>
                  <input
                    type="number"
                    min={1}
                    value={item.qty}
                    aria-label={`Quantity for ${item.name}`}
                    onChange={(e) => setQty(item.slug, Number(e.target.value) || 1)}
                    className="w-16 rounded-md border border-brand-border px-2 py-1.5 text-sm"
                  />
                  <p className="w-24 text-right text-sm font-bold">{formatPrice(item.price * item.qty)}</p>
                  <button type="button" aria-label={`Remove ${item.name}`} onClick={() => remove(item.slug)} className="text-brand-muted hover:text-brand-orange">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => next()} className={`${primaryClasses} self-end`}>
                Proceed to shipping
              </button>
            </div>
          )}

          {step === 1 && (
            <form onSubmit={next} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className={labelClasses}>Full name *
                <input required value={shipping.fullName} onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })} className={fieldClasses} />
              </label>
              <label className={labelClasses}>Phone *
                <input required type="tel" value={shipping.phone} onChange={(e) => setShipping({ ...shipping, phone: e.target.value })} className={fieldClasses} />
              </label>
              <label className={`${labelClasses} sm:col-span-2`}>Address *
                <input required value={shipping.address} onChange={(e) => setShipping({ ...shipping, address: e.target.value })} className={fieldClasses} />
              </label>
              <label className={`${labelClasses} sm:col-span-2`}>City / town *
                <input required value={shipping.city} onChange={(e) => setShipping({ ...shipping, city: e.target.value })} className={fieldClasses} />
              </label>
              <fieldset className="flex flex-col gap-2 sm:col-span-2">
                <legend className="mb-1 text-xs font-bold uppercase tracking-wide">Delivery method</legend>
                {shippingMethods.map((m) => (
                  <label key={m.id} className="flex items-center justify-between rounded-md border border-brand-border px-4 py-3 text-sm">
                    <span className="flex items-center gap-2">
                      <input type="radio" name="method" checked={shipping.method === m.id} onChange={() => setShipping({ ...shipping, method: m.id })} className="accent-brand-green" />
                      {m.label}
                    </span>
                    <span className="font-semibold">{m.cost ? formatPrice(m.cost) : "Free"}</span>
                  </label>
                ))}
              </fieldset>
              <button type="submit" className={`${primaryClasses} sm:col-span-2 sm:justify-self-end`}>Continue to payment</button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={next} className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-wide">Payment method</p>
              {paymentMethods.map((m) => (
                <label key={m.id} className="flex items-center gap-2 rounded-md border border-brand-border px-4 py-3 text-sm">
                  <input type="radio" name="payment" checked={payment === m.id} onChange={() => setPayment(m.id)} className="accent-brand-green" />
                  {m.label}
                </label>
              ))}
              <p className="text-xs text-brand-muted">
                Demo checkout: no card details are collected and no payment is processed. A real
                payment provider is connected when ordering goes live.
              </p>
              <button type="submit" className={`${primaryClasses} self-end`}>Review order</button>
            </form>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide">Ship to</p>
                <p>{shipping.fullName} &middot; {shipping.phone}</p>
                <p className="text-brand-muted">{shipping.address}, {shipping.city}</p>
                <p className="text-brand-muted">{method.label}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide">Payment</p>
                <p className="text-brand-muted">{paymentMethods.find((p) => p.id === payment)?.label}</p>
              </div>
              <ul className="border-t border-brand-border pt-3">
                {items.map((i) => (
                  <li key={i.slug} className="flex justify-between py-1">
                    <span>{i.qty} × {i.name}</span>
                    <span className="font-semibold">{formatPrice(i.price * i.qty)}</span>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={placeOrder} className={`${primaryClasses} self-end`}>Place order</button>
            </div>
          )}
        </div>

        <aside className="self-start rounded-md border border-brand-border bg-white p-5 text-sm">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide">Order summary</p>
          <div className="flex justify-between py-1"><span className="text-brand-muted">Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="flex justify-between py-1">
            <span className="text-brand-muted">Shipping</span>
            <span>{step === 0 ? "Calculated next" : method.cost ? formatPrice(method.cost) : "Free"}</span>
          </div>
          <div className="mt-2 flex justify-between border-t border-brand-border pt-3 text-base font-extrabold">
            <span>Total</span><span>{formatPrice(step === 0 ? subtotal : total)}</span>
          </div>
        </aside>
      </div>
    </Container>
  );
}
