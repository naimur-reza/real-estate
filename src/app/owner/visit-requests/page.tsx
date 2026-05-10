import { DashboardShell } from "@/components/dashboard-shell";
import { OwnerVisitTable } from "@/components/owner-visit-table";
import { ownerNav } from "@/lib/dashboard-nav";
import { requireRole } from "@/lib/session";

export default async function OwnerVisitRequestsPage() {
  const session = await requireRole("OWNER");
  return (
    <DashboardShell role="OWNER" name={session.user.name ?? "Owner"} title="Visit Requests" nav={ownerNav}>
      <OwnerVisitTable />
    </DashboardShell>
  );
}
