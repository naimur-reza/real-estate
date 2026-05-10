import { AdminApprovals } from "@/components/admin-approvals";
import { DashboardShell } from "@/components/dashboard-shell";
import { DemoTable } from "@/components/demo-table";
import { StatusBadge } from "@/components/status-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { adminNav } from "@/lib/dashboard-nav";
import { properties } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function AdminPropertiesPage() {
  const session = await requireRole("ADMIN");
  return (
    <DashboardShell role="ADMIN" name={session.user.name ?? "Admin"} title="Properties" nav={adminNav}>
      <Tabs defaultValue="pending">
        <TabsList>
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
    </DashboardShell>
  );
}
