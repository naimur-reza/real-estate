import { CreditCardIcon, MapPinIcon, MousePointerClickIcon, TrendingUpIcon, TrophyIcon, UsersIcon } from "lucide-react";

import { AdminAnalyticsCharts } from "@/components/analytics-charts";
import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { adminNav } from "@/lib/dashboard-nav";
import { requireRole } from "@/lib/session";

const areaInsights = [
  { area: "Purbachal", growth: "+19%", demand: "High", leads: 342 },
  { area: "Gulshan", growth: "+14%", demand: "High", leads: 218 },
  { area: "Banani", growth: "+11%", demand: "Medium", leads: 184 },
  { area: "Savar", growth: "+8%", demand: "Medium", leads: 126 },
];

export default async function AdminAnalyticsPage() {
  const session = await requireRole("ADMIN");
  return (
    <DashboardShell role="ADMIN" name={session.user.name ?? "Admin"} title="Analytics" nav={adminNav}>
      <section className="mb-8 rounded-[2rem] bg-gradient-to-br from-[#0F2A4A] to-[#0A7EA4] p-8 text-white shadow-[0_28px_80px_rgba(15,42,74,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f1c77d]">Analytics</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">Measure growth.</h2>
        <p className="mt-3 max-w-xl text-white/70">Listings, users, revenue and area performance.</p>
      </section>

      <div className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Revenue" value="৳3,20,000" icon={CreditCardIcon} />
        <StatCard label="Top area" value="Purbachal" icon={MapPinIcon} />
        <StatCard label="Top agent" value="Rafi" icon={TrophyIcon} />
        <StatCard label="Lead growth" value="28%" icon={TrendingUpIcon} />
      </div>

      <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
        <AdminAnalyticsCharts />
      </div>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Area insights</h3>
          <div className="mt-5 space-y-3">
            {areaInsights.map((item) => (
              <div key={item.area} className="grid gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-[1fr_0.5fr_0.5fr_0.5fr] md:items-center">
                <strong>{item.area}</strong>
                <span className="font-bold text-emerald-600">{item.growth}</span>
                <span className="text-sm text-muted-foreground">{item.demand}</span>
                <span className="rounded-full bg-white px-3 py-1 text-center text-xs font-bold text-[#0F2A4A]">{item.leads} leads</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
          <div className="rounded-[2rem] bg-[#0F2A4A] p-6 text-white shadow-sm"><UsersIcon className="size-8 text-[#d7a44f]" /><h3 className="mt-5 text-2xl font-black tracking-[-0.05em]">Buyer activity</h3><p className="mt-2 text-sm text-white/60">62% of leads are looking for land or sale apartments.</p></div>
          <div className="rounded-[2rem] bg-white p-6 shadow-sm"><MousePointerClickIcon className="size-8 text-[#0A7EA4]" /><h3 className="mt-5 text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Search intent</h3><p className="mt-2 text-sm text-muted-foreground">Purbachal, Gulshan and Uttara are the top searched locations.</p></div>
        </div>
      </section>
    </DashboardShell>
  );
}
