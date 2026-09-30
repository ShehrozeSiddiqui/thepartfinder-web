# Cart & checkout

Routes: `/checkout`. Code in `src/features/cart/`. Mockup 12.

- Cart lives in `CartProvider` (context + localStorage). "Add to cart" (`AddToCartButton`), the part
  detail buy panel ("Buy now" adds then goes to checkout) and the header cart count all use it.
- Checkout steps: Cart → Shipping → Payment → Review → order confirmation. Shipping rates and
  payment methods are placeholders in `data/checkout.ts`.
- Placing an order saves it to localStorage (`lib/orders.ts`), clears the cart, and shows it under
  Account → Orders. **No payment is taken and no card data is collected.** See ADR-004.

## Not built
Real payments, shipping rates, tax, order emails, stock checks — all need the backend (Phase 2/3).
Loading/error states are required once orders are server-backed.
