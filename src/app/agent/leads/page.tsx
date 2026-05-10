import { AgentLeads } from "@/components/agent-leads";
import { DashboardShell } from "@/components/dashboard-shell";
import { agentNav } from "@/lib/dashboard-nav";
import { requireRole } from "@/lib/session";

export default async function AgentLeadsPage() {
  const session = await requireRole("AGENT");
  return (
    <DashboardShell role="AGENT" name={session.user.name ?? "Agent"} title="Lead Pipeline" nav={agentNav}>
      <AgentLeads />
    </DashboardShell>
  );
}
