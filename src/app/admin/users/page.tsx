import { DashboardShell } from "@/components/dashboard-shell";
import { DemoTable } from "@/components/demo-table";
import { StatusBadge } from "@/components/status-badge";
import { adminNav } from "@/lib/dashboard-nav";
import { demoUsers } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function AdminUsersPage() {
  const session = await requireRole("ADMIN");
  return (
    <DashboardShell role="ADMIN" name={session.user.name ?? "Admin"} title="Users" nav={adminNav}>
      <DemoTable headers={["Name", "Email", "Role", "Joined", "Status"]} rows={demoUsers.map((user) => [user.name, user.email, <StatusBadge key="r">{user.role}</StatusBadge>, user.joined, <StatusBadge key="s">{user.status}</StatusBadge>])} />
    </DashboardShell>
  );
}
