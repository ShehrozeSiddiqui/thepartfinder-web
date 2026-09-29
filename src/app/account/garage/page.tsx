import { AccountShell } from "@/features/account/components/AccountShell";
import { GarageManager } from "@/features/account/components/GarageManager";

export default function GaragePage() {
  return (
    <AccountShell title="My Garage">
      <GarageManager />
    </AccountShell>
  );
}
