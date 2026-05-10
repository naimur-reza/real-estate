import { ArrowUpRightIcon, FileCheck2Icon, LandmarkIcon, WalletIcon } from "lucide-react";

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
    <DashboardShell role="USER" name={session.user.name ?? "Demo User"} title="Land Details" nav={userNav}>
      <section className="mb-8 rounded-[2rem] bg-gradient-to-br from-[#0F2A4A] to-[#0A7EA4] p-8 text-white shadow-[0_28px_80px_rgba(15,42,74,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f1c77d]">Ownership progress</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">{purchase.property}</h2>
        <p className="mt-3 max-w-xl text-white/70">Payment history, documents and value growth.</p>
      </section>

      <div className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Total price", purchase.totalPrice, WalletIcon],
          ["Paid so far", purchase.paid, WalletIcon],
          ["Remaining", purchase.remaining, WalletIcon],
          ["Value growth", "+19.2%", ArrowUpRightIcon],
        ].map(([label, value, Icon]) => (
          <Card className="rounded-[2rem] border-white/70 bg-white/90 shadow-sm" key={String(label)}>
            <CardContent className="p-6">
              {/* @ts-expect-error icon is a Lucide component from tuple */}
              <Icon className="size-6 text-[#0A7EA4]" />
              <p className="mt-4 text-sm text-muted-foreground">{String(label)}</p>
              <p className="mt-1 text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">{String(value)}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mb-8 grid gap-6 xl:grid-cols-3">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm xl:col-span-2">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Evaluation summary</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-5 text-emerald-700"><ArrowUpRightIcon className="size-7" /><p className="mt-3 text-sm">Current estimate</p><strong className="text-3xl tracking-[-0.05em]">৳29.8 lakh</strong></div>
            <div className="rounded-2xl bg-slate-50 p-5"><LandmarkIcon className="size-7 text-[#0A7EA4]" /><p className="mt-3 text-sm text-muted-foreground">Area trend</p><strong>Increasing</strong></div>
            <div className="rounded-2xl bg-slate-50 p-5"><FileCheck2Icon className="size-7 text-[#0A7EA4]" /><p className="mt-3 text-sm text-muted-foreground">Documents</p><strong>3 of 4 verified</strong></div>
          </div>
        </div>
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Ownership</h3>
          <p className="mt-4 text-sm text-muted-foreground">{purchase.ownership}</p>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100"><span className="block h-full w-[68%] rounded-full bg-[#0A7EA4]" /></div>
          <p className="mt-3 text-sm font-bold text-[#0F2A4A]">68% document progress</p>
        </div>
      </section>

      <InstallmentTable />
    </DashboardShell>
  );
}
