import { Building2Icon, CheckCircle2Icon, ClockIcon, HomeIcon } from "lucide-react";

import { AdminApprovals } from "@/components/admin-approvals";
import { DashboardShell } from "@/components/dashboard-shell";
import { DemoTable } from "@/components/demo-table";
import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adminNav } from "@/lib/dashboard-nav";
import { pendingProperties, properties } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function AdminPropertiesPage() {
  const session = await requireRole("ADMIN");
  return (
    <DashboardShell role="ADMIN" name={session.user.name ?? "Admin"} title="Properties" nav={adminNav}>
      <section className="mb-8 rounded-[2rem] bg-gradient-to-br from-[#0F2A4A] to-[#0A7EA4] p-8 text-white shadow-[0_28px_80px_rgba(15,42,74,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f1c77d]">Property control</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">Manage listings.</h2>
        <p className="mt-3 max-w-xl text-white/70">Review approvals, status, type and listing quality.</p>
      </section>

      <div className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total listings" value={properties.length} icon={Building2Icon} />
        <StatCard label="Pending" value={pendingProperties.length} icon={ClockIcon} />
        <StatCard label="Published" value="8" icon={CheckCircle2Icon} />
        <StatCard label="Land plots" value="2" icon={HomeIcon} />
      </div>

      <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
        <Tabs defaultValue="pending">
          <TabsList className="rounded-2xl">
            <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            <TabsTrigger value="all">All Properties</TabsTrigger>
          </TabsList>
          <TabsContent value="pending" className="mt-6">
            <AdminApprovals />
          </TabsContent>
          <TabsContent value="all" className="mt-6">
            <DemoTable headers={["Title", "Location", "Purpose", "Type", "Status"]} rows={properties.map((item) => [item.title, item.location, item.purpose, item.type, <StatusBadge key="s">{item.status}</StatusBadge>])} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}
