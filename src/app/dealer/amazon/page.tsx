import { DealerShell } from "@/features/dealer/components/DealerShell";
import { IntegrationDashboard } from "@/features/dealer/components/IntegrationDashboard";
import { integrations } from "@/features/dealer/data/integrations";

export default function AmazonPage() {
  return (
    <DealerShell title="Amazon integration">
      <IntegrationDashboard integration={integrations.amazon} />
    </DealerShell>
  );
}
