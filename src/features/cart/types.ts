export type CartItem = {
  slug: string;
  name: string;
  partNumber: string;
  price: number;
  image: string;
  qty: number;
};

export type ShippingDetails = {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  method: string;
};

export type Order = {
  id: string;
  placed: string;
  items: CartItem[];
  shipping: ShippingDetails;
  paymentMethod: string;
  subtotal: number;
  shippingCost: number;
  total: number;
  status: "Processing" | "Shipped" | "Delivered";
};
