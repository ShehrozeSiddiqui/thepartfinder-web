import { notFound } from "next/navigation";
import { DealerShell } from "@/features/dealer/components/DealerShell";
import { dealerComingSoon } from "@/features/dealer/data/nav";

export const generateStaticParams = () => Object.keys(dealerComingSoon).map((section) => ({ section }));

export default async function DealerSectionPage({ params }: PageProps<"/dealer/[section]">) {
  const title = dealerComingSoon[(await params).section];
  if (!title) notFound();
  return (
    <DealerShell title={title}>
      <p className="rounded-md border border-dashed border-brand-border bg-white p-10 text-center text-sm text-brand-muted">
        {title} arrives with dealer sign-in and the live catalog in a later phase.
      </p>
    </DealerShell>
  );
}
