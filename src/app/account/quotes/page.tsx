import { AccountShell } from "@/features/account/components/AccountShell";
import { AccountQuotes } from "@/features/account/components/AccountQuotes";

export default function AccountQuotesPage() {
  return (
    <AccountShell title="Quotes & Requests">
      <AccountQuotes />
    </AccountShell>
  );
}
