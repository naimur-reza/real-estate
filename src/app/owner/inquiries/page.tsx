import { DashboardShell } from "@/components/dashboard-shell";
import { DemoTable } from "@/components/demo-table";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { ownerNav } from "@/lib/dashboard-nav";
import { inquiries } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function OwnerInquiriesPage() {
  const session = await requireRole("OWNER");
  return (
    <DashboardShell role="OWNER" name={session.user.name ?? "Owner"} title="Inquiries" nav={ownerNav}>
      <DemoTable headers={["From", "Property", "Message Preview", "Date", "Status", "Action"]} rows={inquiries.map((item) => [item.user, item.property, item.message, item.date, <StatusBadge key="s">{item.status}</StatusBadge>, <Button key="b" size="sm" variant="outline">Mark Read</Button>])} />
    </DashboardShell>
  );
}
