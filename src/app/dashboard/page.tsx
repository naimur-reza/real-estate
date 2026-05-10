import { ArrowDownRightIcon, ArrowUpRightIcon, CalendarCheckIcon, HeartIcon, LandmarkIcon, MessageSquareIcon, TrendingUpIcon, WalletIcon } from "lucide-react";
import Link from "next/link";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { buttonVariants } from "@/components/ui/button";
import { userNav } from "@/lib/dashboard-nav";
import { inquiries, landPurchases, properties, visitRequests } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

const projectEvaluation = {
  title: "Gazipur Residential Land Plot",
  purchasePrice: "৳25 lakh",
  currentValue: "৳29.8 lakh",
  change: "+19.2%",
  monthlyTrend: "+৳1.4 lakh",
  areaDemand: "High",
  risk: "Low",
};

const saved = properties.slice(0, 3);

export default async function UserDashboardPage() {
  const session = await requireRole("USER");
  const purchase = landPurchases[0];

  return (
    <DashboardShell role="USER" name={session.user.name ?? "Demo User"} title="My Dashboard" nav={userNav}>
      <section className="mb-8 rounded-[2rem] bg-gradient-to-br from-[#0F2A4A] to-[#0A7EA4] p-8 text-white shadow-[0_28px_80px_rgba(15,42,74,0.25)]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f1c77d]">Welcome back</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">{session.user.name ?? "Demo User"}</h2>
            <p className="mt-3 max-w-xl text-white/70">Track inquiries, visits, saved properties and your land investment.</p>
          </div>
          <Link className={buttonVariants({ className: "w-fit rounded-full bg-white px-6 text-[#0F2A4A] hover:bg-white/90" })} href="/properties">
            Browse properties
          </Link>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Inquiries" value={inquiries.length} icon={MessageSquareIcon} />
        <StatCard label="Visits" value={visitRequests.length} icon={CalendarCheckIcon} />
        <StatCard label="Saved" value="4" icon={HeartIcon} />
        <StatCard label="Land Value" value={projectEvaluation.currentValue} icon={LandmarkIcon} />
      </div>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Project evaluation</h3>
              <p className="text-sm text-muted-foreground">Current value estimate for your land.</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Increasing</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-5"><p className="text-sm text-muted-foreground">Purchase price</p><strong className="mt-2 block text-3xl tracking-[-0.05em] text-[#0F2A4A]">{projectEvaluation.purchasePrice}</strong></div>
            <div className="rounded-3xl bg-slate-50 p-5"><p className="text-sm text-muted-foreground">Current value</p><strong className="mt-2 block text-3xl tracking-[-0.05em] text-[#0A7EA4]">{projectEvaluation.currentValue}</strong></div>
            <div className="rounded-3xl bg-emerald-50 p-5"><p className="text-sm text-emerald-700">Growth</p><strong className="mt-2 flex items-center gap-2 text-3xl tracking-[-0.05em] text-emerald-700"><ArrowUpRightIcon className="size-6" />{projectEvaluation.change}</strong></div>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {[['Monthly trend', projectEvaluation.monthlyTrend], ['Area demand', projectEvaluation.areaDemand], ['Risk level', projectEvaluation.risk], ['Ownership', purchase.ownership]].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-100 p-4"><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{label}</p><strong className="mt-1 block text-[#0F2A4A]">{value}</strong></div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Payment progress</h3>
          <p className="mt-1 text-sm text-muted-foreground">{purchase.installments} installments paid.</p>
          <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-100"><span className="block h-full w-[37%] rounded-full bg-[#0A7EA4]" /></div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-muted-foreground">Paid</p><strong>{purchase.paid}</strong></div>
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-muted-foreground">Remaining</p><strong>{purchase.remaining}</strong></div>
          </div>
          <Link className={buttonVariants({ className: "mt-6 w-full rounded-2xl bg-[#0F2A4A]" })} href="/dashboard/land/detail">View land details</Link>
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm xl:col-span-2">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Saved properties</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {saved.map((property) => (
              <div key={property.slug} className="rounded-2xl bg-slate-50 p-4">
                <strong className="line-clamp-1 text-[#0F2A4A]">{property.title}</strong>
                <p className="mt-1 text-sm text-muted-foreground">{property.location}</p>
                <p className="mt-3 font-bold text-[#0A7EA4]">{property.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Market signal</h3>
          <div className="mt-5 space-y-3">
            <div className="flex items-center justify-between rounded-2xl bg-emerald-50 p-4 text-emerald-700"><span className="font-bold">Gazipur land</span><span className="flex items-center gap-1 font-black"><ArrowUpRightIcon className="size-4" /> 19%</span></div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 text-[#0F2A4A]"><span className="font-bold">Apartment rent</span><span className="flex items-center gap-1 font-black"><TrendingUpIcon className="size-4" /> 8%</span></div>
            <div className="flex items-center justify-between rounded-2xl bg-rose-50 p-4 text-rose-700"><span className="font-bold">Office demand</span><span className="flex items-center gap-1 font-black"><ArrowDownRightIcon className="size-4" /> 3%</span></div>
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
