/** Mock dashboard figures for the Phase 1 dealer portal UI. Real data comes from Supabase in Phase 2+. */
export const dashboardStats = [
  { label: "New requests", value: "24", tone: "bg-brand-green/10" },
  { label: "Quotes pending", value: "15", tone: "bg-brand-orange/10" },
  { label: "Orders today", value: "12", tone: "bg-sky-500/10" },
  { label: "Total sales", value: "TT$128,450", tone: "bg-violet-500/10" },
];

export const recentOrders = [
  { id: "#PF-00123", customer: "John Doe", amount: 8450, status: "Processing" },
  { id: "#PF-00122", customer: "Mark Smith", amount: 585, status: "Shipped" },
  { id: "#PF-00121", customer: "Brian Brown", amount: 1250, status: "Delivered" },
  { id: "#PF-00120", customer: "Chris Lee", amount: 980, status: "Processing" },
  { id: "#PF-00119", customer: "David Joseph", amount: 3450, status: "Shipped" },
];

/** Sales per month (TT$ thousands) for the overview chart. */
export const salesSeries = [
  { label: "Jan", value: 42 },
  { label: "Feb", value: 55 },
  { label: "Mar", value: 48 },
  { label: "Apr", value: 71 },
  { label: "May", value: 64 },
  { label: "Jun", value: 92 },
  { label: "Jul", value: 84 },
];

export const topSelling = [
  { name: "Oil Filters", units: 240 },
  { name: "Brake Pads", units: 180 },
  { name: "Air Filters", units: 156 },
  { name: "Spark Plugs", units: 132 },
];
