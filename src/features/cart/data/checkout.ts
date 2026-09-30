/** Checkout configuration. Rates are placeholders until real shipping logic exists. */
export const CHECKOUT_STEPS = ["Cart", "Shipping", "Payment", "Review"] as const;

export const shippingMethods = [
  { id: "standard", label: "Standard delivery (3–5 business days)", cost: 60 },
  { id: "express", label: "Express delivery (1–2 business days)", cost: 150 },
  { id: "pickup", label: "Collect from our Chaguanas location", cost: 0 },
];

export const paymentMethods = [
  { id: "card", label: "Credit / debit card" },
  { id: "transfer", label: "Bank transfer" },
  { id: "cash", label: "Cash on collection" },
];
