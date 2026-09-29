import { DealerShell } from "@/features/dealer/components/DealerShell";
import { IntegrationDashboard } from "@/features/dealer/components/IntegrationDashboard";
import { integrations } from "@/features/dealer/data/integrations";

export default function eBayPage() {
  return (
    <DealerShell title="eBay integration">
      <IntegrationDashboard integration={integrations.ebay} />
    </DealerShell>
  );
}
