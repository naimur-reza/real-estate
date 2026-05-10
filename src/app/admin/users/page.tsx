import { MailIcon, ShieldCheckIcon, UserCheckIcon, UsersIcon } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { DemoTable } from "@/components/demo-table";
import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { adminNav } from "@/lib/dashboard-nav";
import { demoUsers } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function AdminUsersPage() {
  const session = await requireRole("ADMIN");
  return (
    <DashboardShell role="ADMIN" name={session.user.name ?? "Admin"} title="Users" nav={adminNav}>
      <section className="mb-8 rounded-[2rem] bg-gradient-to-br from-[#0F2A4A] to-[#0A7EA4] p-8 text-white shadow-[0_28px_80px_rgba(15,42,74,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f1c77d]">User management</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">Manage accounts.</h2>
        <p className="mt-3 max-w-xl text-white/70">Users, owners, agents and admins with account status.</p>
      </section>

      <div className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total users" value={demoUsers.length} icon={UsersIcon} />
        <StatCard label="Active" value="7" icon={UserCheckIcon} />
        <StatCard label="Roles" value="4" icon={ShieldCheckIcon} />
        <StatCard label="Emails" value="8" icon={MailIcon} />
      </div>

      <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">All users</h3>
        <DemoTable headers={["Name", "Email", "Role", "Joined", "Status"]} rows={demoUsers.map((user) => [user.name, user.email, <StatusBadge key="r">{user.role}</StatusBadge>, user.joined, <StatusBadge key="s">{user.status}</StatusBadge>])} />
      </div>
    </DashboardShell>
  );
}
