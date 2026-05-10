import { BarChart3Icon, CalendarCheckIcon, CheckCircle2Icon, ClipboardListIcon } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { agentNav } from "@/lib/dashboard-nav";
import { requireRole } from "@/lib/session";

export default async function AgentPage() {
  const session = await requireRole("AGENT");
  return (
    <DashboardShell role="AGENT" name={session.user.name ?? "Agent"} title="Overview" nav={agentNav}>
      <div className="grid grid-cols-4 gap-6">
        <StatCard label="Active Leads" value="6" icon={ClipboardListIcon} />
        <StatCard label="Visits This Week" value="3" icon={CalendarCheckIcon} />
        <StatCard label="Deals Closed" value="2" icon={CheckCircle2Icon} />
        <StatCard label="Conversion Rate" value="33%" icon={BarChart3Icon} />
      </div>
    </DashboardShell>
  );
}
