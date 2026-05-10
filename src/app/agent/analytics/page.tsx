import { AgentAnalyticsCharts } from "@/components/analytics-charts";
import { DashboardShell } from "@/components/dashboard-shell";
import { agentNav } from "@/lib/dashboard-nav";
import { requireRole } from "@/lib/session";

export default async function AgentAnalyticsPage() {
  const session = await requireRole("AGENT");
  return (
    <DashboardShell role="AGENT" name={session.user.name ?? "Agent"} title="Analytics" nav={agentNav}>
      <AgentAnalyticsCharts />
    </DashboardShell>
  );
}
