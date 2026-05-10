import { DashboardShell } from "@/components/dashboard-shell";
import { DemoTable } from "@/components/demo-table";
import { StatusBadge } from "@/components/status-badge";
import { userNav } from "@/lib/dashboard-nav";
import { visitRequests } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function UserVisitRequestsPage() {
  const session = await requireRole("USER");
  return (
    <DashboardShell role="USER" name={session.user.name ?? "Demo User"} title="My Visit Requests" nav={userNav}>
      <DemoTable headers={["Property", "Date", "Time", "Status"]} rows={visitRequests.slice(0, 2).map((item) => [item.property, item.date, item.time, <StatusBadge key="s">{item.status}</StatusBadge>])} />
    </DashboardShell>
  );
}
