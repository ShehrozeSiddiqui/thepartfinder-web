import type { Order } from "../types";

const STORAGE_KEY = "pf-orders";

export function loadOrders(): Order[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function saveOrder(order: Order): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([order, ...loadOrders()]));
  } catch {
    // storage unavailable — the confirmation screen still shows the order
  }
}
