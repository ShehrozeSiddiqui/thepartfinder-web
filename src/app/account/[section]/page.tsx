import { notFound } from "next/navigation";
import { AccountShell } from "@/features/account/components/AccountShell";
import { comingSoonSections } from "@/features/account/data/nav";

export const generateStaticParams = () => Object.keys(comingSoonSections).map((section) => ({ section }));

export default async function AccountSectionPage({ params }: PageProps<"/account/[section]">) {
  const title = comingSoonSections[(await params).section];
  if (!title) notFound();
  return (
    <AccountShell title={title}>
      <p className="rounded-md border border-dashed border-brand-border p-10 text-center text-sm text-brand-muted">
        {title} arrives with customer sign-in in a later phase.
      </p>
    </AccountShell>
  );
}
