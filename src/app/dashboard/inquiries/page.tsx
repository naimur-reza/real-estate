import { DashboardShell } from "@/components/dashboard-shell";
import { DemoTable } from "@/components/demo-table";
import { StatusBadge } from "@/components/status-badge";
import { userNav } from "@/lib/dashboard-nav";
import { inquiries } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function UserInquiriesPage() {
  const session = await requireRole("USER");
  return (
    <DashboardShell role="USER" name={session.user.name ?? "Demo User"} title="My Inquiries" nav={userNav}>
      <DemoTable headers={["Property", "Message Preview", "Date", "Status"]} rows={inquiries.slice(0, 3).map((item) => [item.property, item.message, item.date, <StatusBadge key="s">{item.status}</StatusBadge>])} />
    </DashboardShell>
  );
}
