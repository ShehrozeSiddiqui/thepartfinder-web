import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRequest } from "@/features/part-requests/data/mockRequests";
import { QuoteDetail } from "@/features/part-requests/components/QuoteDetail";

export const metadata: Metadata = { title: "Request Tracking | The Pathfinder Auto Parts Sales" };

export default async function QuotePage({ params }: PageProps<"/quotes/[id]">) {
  const request = getRequest((await params).id);
  if (!request) notFound();
  return <QuoteDetail request={request} />;
}
