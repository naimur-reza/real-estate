import { ArrowUpRightIcon, CalendarDaysIcon, LandmarkIcon, ShieldCheckIcon, TrendingUpIcon } from "lucide-react";
import Link from "next/link";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatusBadge } from "@/components/status-badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { userNav } from "@/lib/dashboard-nav";
import { landPurchases } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

const valuation = {
  purchase: "৳25 lakh",
  current: "৳29.8 lakh",
  gain: "৳4.8 lakh",
  growth: "+19.2%",
  areaTrend: "Increasing",
  demand: "High",
};

export default async function UserLandPage() {
  const session = await requireRole("USER");
  const purchase = landPurchases[0];
  return (
    <DashboardShell role="USER" name={session.user.name ?? "Demo User"} title="My Land" nav={userNav}>
      <section className="mb-8 rounded-[2rem] bg-gradient-to-br from-[#0F2A4A] to-[#0A7EA4] p-8 text-white shadow-[0_28px_80px_rgba(15,42,74,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f1c77d]">Land portfolio</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">{purchase.property}</h2>
        <p className="mt-3 max-w-xl text-white/70">Current value, payment progress and ownership status.</p>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[['Purchase price', valuation.purchase], ['Current value', valuation.current], ['Estimated gain', valuation.gain], ['Growth', valuation.growth]].map(([label, value]) => (
          <Card key={label} className="rounded-[2rem] border-white/70 bg-white/90 shadow-sm"><CardContent className="p-6"><p className="text-sm text-muted-foreground">{label}</p><p className="mt-2 text-3xl font-black tracking-[-0.05em] text-[#0F2A4A]">{value}</p></CardContent></Card>
        ))}
      </div>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <Card className="rounded-[2rem] border-white/70 bg-white/90 shadow-sm">
          <CardContent className="p-6">
            <div className="mb-6 flex items-start justify-between gap-4"><div><h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Value movement</h3><p className="text-sm text-muted-foreground">Market estimate based on area demand.</p></div><StatusBadge>{valuation.areaTrend}</StatusBadge></div>
            <div className="rounded-[2rem] bg-emerald-50 p-6 text-emerald-700"><TrendingUpIcon className="size-9" /><p className="mt-5 text-sm font-bold uppercase tracking-[0.14em]">Price movement</p><strong className="mt-1 flex items-center gap-2 text-5xl tracking-[-0.07em]"><ArrowUpRightIcon className="size-8" />{valuation.growth}</strong><p className="mt-2 text-sm">Your land estimate is up by {valuation.gain}.</p></div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border p-4"><LandmarkIcon className="size-5 text-[#0A7EA4]" /><p className="mt-3 text-sm text-muted-foreground">Location</p><strong>{purchase.location}</strong></div>
              <div className="rounded-2xl border p-4"><ShieldCheckIcon className="size-5 text-[#0A7EA4]" /><p className="mt-3 text-sm text-muted-foreground">Risk</p><strong>Low</strong></div>
              <div className="rounded-2xl border p-4"><CalendarDaysIcon className="size-5 text-[#0A7EA4]" /><p className="mt-3 text-sm text-muted-foreground">Demand</p><strong>{valuation.demand}</strong></div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] border-white/70 bg-white/90 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Installment progress</h3>
            <p className="mt-1 text-sm text-muted-foreground">{purchase.installments} installments paid.</p>
            <div className="mt-6"><Progress value={37} /><p className="mt-3 font-medium text-[#0F2A4A]">37% completed</p></div>
            <div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-muted-foreground">Paid</p><strong>{purchase.paid}</strong></div><div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-muted-foreground">Remaining</p><strong>{purchase.remaining}</strong></div></div>
            <p className="mt-5">Next due <StatusBadge>Due</StatusBadge></p>
            <Link className={buttonVariants({ className: "mt-6 w-full rounded-2xl bg-[#0F2A4A]" })} href="/dashboard/land/detail">View details</Link>
          </CardContent>
        </Card>
      </section>
    </DashboardShell>
  );
}
