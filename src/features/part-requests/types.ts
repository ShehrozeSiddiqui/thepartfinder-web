export type RequestStatus = "Pending" | "Sourcing" | "Quoted" | "Closed";

export type QuoteLine = {
  part: string;
  partNumber: string;
  supplier: string;
  price: number | null;
};

export type PartRequest = {
  id: string;
  submitted: string;
  status: RequestStatus;
  vehicle: string;
  partName: string;
  notes: string;
  quotes: QuoteLine[];
};
