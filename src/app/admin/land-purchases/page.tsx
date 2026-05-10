import { DashboardShell } from "@/components/dashboard-shell";
import { DemoTable } from "@/components/demo-table";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { adminNav } from "@/lib/dashboard-nav";
import { landPurchases } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function AdminLandPurchasesPage() {
  const session = await requireRole("ADMIN");
  return (
    <DashboardShell role="ADMIN" name={session.user.name ?? "Admin"} title="Land Purchases" nav={adminNav}>
      <DemoTable
        headers={["Buyer", "Property", "Total Price", "Installments", "Status", "Action"]}
        rows={landPurchases.map((item) => [
          item.buyer,
          item.property,
          item.totalPrice,
          item.installments,
          <StatusBadge key="s">{item.status}</StatusBadge>,
          item.status === "ACTIVE" ? <Button key="v" size="sm" variant="outline">View</Button> : <StatusBadge key="o">Ownership Granted</StatusBadge>,
        ])}
      />
    </DashboardShell>
  );
}
