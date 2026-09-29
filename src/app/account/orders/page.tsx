import { AccountShell } from "@/features/account/components/AccountShell";
import { OrdersList } from "@/features/account/components/OrdersList";

export default function OrdersPage() {
  return (
    <AccountShell title="Orders">
      <OrdersList />
    </AccountShell>
  );
}
