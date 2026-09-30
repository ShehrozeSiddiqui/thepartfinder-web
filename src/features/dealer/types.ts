export type ListingStatus = "Active" | "Ended" | "Pending";

export type Listing = {
  partNumber: string;
  title: string;
  /** Price in the channel's currency. */
  price: number;
  quantity: number;
  status: ListingStatus;
};

export type Integration = {
  slug: "ebay" | "amazon";
  name: string;
  account: string;
  connected: boolean;
  currency: string;
  metrics: { label: string; value: string }[];
  listings: Listing[];
};
