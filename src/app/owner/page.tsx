import { Building2Icon, CalendarCheckIcon, MessageSquareIcon, PlusIcon, TrendingUpIcon, WalletIcon } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { ownerNav } from "@/lib/dashboard-nav";
import { inquiries, properties, visitRequests } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

const ownerProperties = properties.slice(0, 4);
const ownerRevenue = [
  { label: "Rental income", value: "৳1.35L", change: "+8%" },
  { label: "Sale pipeline", value: "৳3.4Cr", change: "+12%" },
  { label: "Avg. response", value: "9h", change: "Fast" },
];

export default async function OwnerPage() {
  const session = await requireRole("OWNER");
  return (
    <DashboardShell role="OWNER" name={session.user.name ?? "Owner"} title="Owner Dashboard" nav={ownerNav}>
      <section className="mb-8 rounded-[2rem] bg-gradient-to-br from-[#0F2A4A] to-[#0A7EA4] p-8 text-white shadow-[0_28px_80px_rgba(15,42,74,0.25)]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f1c77d]">Owner overview</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">Manage your listings.</h2>
            <p className="mt-3 max-w-xl text-white/70">Performance, inquiries, visits and revenue in one place.</p>
          </div>
          <Button className="w-fit rounded-full bg-white px-6 text-[#0F2A4A] hover:bg-white/90"><PlusIcon className="size-4" /> Add property</Button>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Listed" value="4" icon={Building2Icon} />
        <StatCard label="Inquiries" value={inquiries.length} icon={MessageSquareIcon} />
        <StatCard label="Visits" value={visitRequests.length} icon={CalendarCheckIcon} />
        <StatCard label="Revenue" value="৳1.35L" icon={WalletIcon} />
      </div>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Listing performance</h3>
          <div className="mt-5 space-y-3">
            {ownerProperties.map((property, index) => (
              <div key={property.slug} className="grid gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-[1fr_0.6fr_0.5fr_0.5fr] md:items-center">
                <div><strong>{property.title}</strong><p className="text-sm text-muted-foreground">{property.location}</p></div>
                <span className="font-bold text-[#0A7EA4]">{property.price}</span>
                <span className="rounded-full bg-white px-3 py-1 text-center text-xs font-bold text-[#0F2A4A]">{18 - index * 3} leads</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-center text-xs font-bold text-emerald-700">Live</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Owner finance</h3>
          <div className="mt-5 grid gap-3">
            {ownerRevenue.map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <div className="mt-2 flex items-end justify-between"><strong className="text-3xl tracking-[-0.05em] text-[#0F2A4A]">{item.value}</strong><span className="text-sm font-bold text-emerald-600">{item.change}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm xl:col-span-2">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Recent inquiries</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {inquiries.map((item) => (
              <div key={`${item.user}-${item.date}`} className="rounded-2xl bg-slate-50 p-4"><strong>{item.user}</strong><p className="mt-1 text-sm text-muted-foreground">{item.message}</p><p className="mt-3 text-xs font-bold text-[#0A7EA4]">{item.property}</p></div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Growth signal</h3>
          <div className="mt-5 rounded-3xl bg-emerald-50 p-5 text-emerald-700"><TrendingUpIcon className="size-8" /><strong className="mt-4 block text-3xl tracking-[-0.05em]">+14%</strong><p className="text-sm">Average listing engagement this month.</p></div>
        </div>
      </section>
    </DashboardShell>
  );
}
