import { DashboardShell } from "@/components/dashboard-shell";
import { InstallmentTable } from "@/components/installment-table";
import { Card, CardContent } from "@/components/ui/card";
import { userNav } from "@/lib/dashboard-nav";
import { landPurchases } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function LandDetailPage() {
  const session = await requireRole("USER");
  const purchase = landPurchases[0];
  return (
    <DashboardShell role="USER" name={session.user.name ?? "Demo User"} title="Installment Details" nav={userNav}>
      <div className="mb-6 grid grid-cols-4 gap-4">
        {[
          ["Total price", purchase.totalPrice],
          ["Paid so far", purchase.paid],
          ["Remaining", purchase.remaining],
          ["Ownership status", purchase.ownership],
        ].map(([label, value]) => (
          <Card className="rounded-lg" key={label}><CardContent className="p-5"><p className="text-sm text-muted-foreground">{label}</p><p className="mt-1 font-semibold text-[#0F2A4A]">{value}</p></CardContent></Card>
        ))}
      </div>
      <InstallmentTable />
    </DashboardShell>
  );
}
