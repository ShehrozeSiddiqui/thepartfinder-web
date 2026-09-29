import type { Metadata } from "next";
import { Container } from "@/core/components/Container";
import { mockRequests } from "@/features/part-requests/data/mockRequests";
import { QuoteLookup } from "@/features/part-requests/components/QuoteLookup";

export const metadata: Metadata = {
  title: "Track a Request | The Pathfinder Auto Parts Sales",
  description: "Check the status of a part request or quote.",
};

export default function QuotesPage() {
  return (
    <Container className="flex flex-col gap-4 py-10">
      <h1 className="text-3xl font-extrabold uppercase">Track a request</h1>
      <p className="text-sm text-brand-muted">Enter the reference you received when you submitted your request.</p>
      <QuoteLookup example={mockRequests[0].id} />
    </Container>
  );
}
