import { AccountShell } from "@/features/account/components/AccountShell";
import { AccountDashboard } from "@/features/account/components/AccountDashboard";

export default function AccountPage() {
  return (
    <AccountShell title="Dashboard">
      <AccountDashboard />
    </AccountShell>
  );
}
