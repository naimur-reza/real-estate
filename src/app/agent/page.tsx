import { BarChart3Icon, CalendarCheckIcon, CheckCircle2Icon, ClipboardListIcon, PhoneCallIcon, TrophyIcon } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { agentNav } from "@/lib/dashboard-nav";
import { leads, properties, visitRequests } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

const pipeline = [
  { stage: "New", count: 12, width: "82%" },
  { stage: "Contacted", count: 9, width: "64%" },
  { stage: "Visit booked", count: 6, width: "48%" },
  { stage: "Negotiation", count: 4, width: "32%" },
];

const tasks = ["Call Sadia Rahman", "Confirm Banani visit", "Send Gazipur plot docs", "Follow up Mirpur buyer"];

export default async function AgentPage() {
  const session = await requireRole("AGENT");
  return (
    <DashboardShell role="AGENT" name={session.user.name ?? "Agent"} title="Agent Dashboard" nav={agentNav}>
      <section className="mb-8 rounded-[2rem] bg-gradient-to-br from-[#0F2A4A] to-[#0A7EA4] p-8 text-white shadow-[0_28px_80px_rgba(15,42,74,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f1c77d]">Agent overview</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.06em]">Manage leads faster.</h2>
        <p className="mt-3 max-w-xl text-white/70">Pipeline, visits, calls and performance at a glance.</p>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active Leads" value={leads.length} icon={ClipboardListIcon} />
        <StatCard label="Visits" value={visitRequests.length} icon={CalendarCheckIcon} />
        <StatCard label="Deals Closed" value="2" icon={CheckCircle2Icon} />
        <StatCard label="Conversion" value="33%" icon={BarChart3Icon} />
      </div>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Lead pipeline</h3>
          <div className="mt-6 space-y-5">
            {pipeline.map((item) => (
              <div key={item.stage}>
                <div className="mb-2 flex justify-between text-sm"><strong>{item.stage}</strong><span className="text-muted-foreground">{item.count} leads</span></div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100"><span className="block h-full rounded-full bg-[#0A7EA4]" style={{ width: item.width }} /></div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Today&apos;s work</h3>
          <div className="mt-5 space-y-3">
            {tasks.map((task) => (
              <div key={task} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"><PhoneCallIcon className="size-5 text-[#0A7EA4]" /><strong>{task}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm xl:col-span-2">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Assigned properties</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {properties.slice(0, 4).map((property) => (
              <div key={property.slug} className="rounded-2xl bg-slate-50 p-4"><strong>{property.title}</strong><p className="mt-1 text-sm text-muted-foreground">{property.location}</p><p className="mt-3 font-bold text-[#0A7EA4]">{property.price}</p></div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">Performance</h3>
          <div className="mt-5 rounded-3xl bg-[#0F2A4A] p-5 text-white"><TrophyIcon className="size-8 text-[#d7a44f]" /><strong className="mt-4 block text-4xl tracking-[-0.06em]">#1</strong><p className="text-sm text-white/60">Top agent this month.</p></div>
        </div>
      </section>
    </DashboardShell>
  );
}
