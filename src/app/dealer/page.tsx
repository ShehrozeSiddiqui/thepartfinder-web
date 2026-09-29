import { DealerShell } from "@/features/dealer/components/DealerShell";
import { DashboardView } from "@/features/dealer/components/DashboardView";

export default function DealerPage() {
  return (
    <DealerShell title="Dashboard">
      <DashboardView />
    </DealerShell>
  );
}
