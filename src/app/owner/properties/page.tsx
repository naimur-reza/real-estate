import { DashboardShell } from "@/components/dashboard-shell";
import { DemoTable } from "@/components/demo-table";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { ownerNav } from "@/lib/dashboard-nav";
import { properties } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function OwnerPropertiesPage() {
  const session = await requireRole("OWNER");
  const rows = properties.slice(0, 3);
  return (
    <DashboardShell role="OWNER" name={session.user.name ?? "Owner"} title="My Properties" nav={ownerNav}>
      <DemoTable
        headers={["Title", "Purpose", "Price", "Status", "Views", "Actions"]}
        rows={rows.map((item, index) => [
          item.title,
          item.purpose,
          item.price,
          <StatusBadge key="s">{index === 2 ? "Pending" : "Published"}</StatusBadge>,
          [842, 611, 230][index],
          <div className="flex gap-2" key="a"><Button size="sm" variant="outline">Edit</Button><Button size="sm" variant="outline">Archive</Button></div>,
        ])}
      />
    </DashboardShell>
  );
}
