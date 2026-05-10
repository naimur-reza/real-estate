import { Building2Icon, CalendarCheckIcon, ClipboardListIcon, CreditCardIcon, LandmarkIcon, MessageSquareIcon, UserPlusIcon, UsersIcon } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { adminNav } from "@/lib/dashboard-nav";
import { adminStats, inquiries, leads, pendingProperties, properties, visitRequests } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function AdminPage() {
  const session = await requireRole("ADMIN");

  return (
    <DashboardShell role="ADMIN" name={session.user.name ?? "Admin"} title="Executive Overview" nav={adminNav}>
      <section className="mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0F2A4A] via-[#12365f] to-[#0A7EA4] p-8 text-white shadow-[0_30px_100px_rgba(15,42,74,0.28)]">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a44f]">Admin command center</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-[-0.06em] md:text-6xl">
              Monitor listings, leads and land sales from one clean dashboard.
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Demo data is filled across the dashboard so every section feels like a real production product preview.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-3xl bg-white/10 p-4 backdrop-blur"><strong className="text-3xl">98%</strong><span className="block text-xs text-white/60">Approval rate</span></div>
            <div className="rounded-3xl bg-white/10 p-4 backdrop-blur"><strong className="text-3xl">12h</strong><span className="block text-xs text-white/60">Avg reply</span></div>
          </div>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Properties" value={adminStats.totalProperties} icon={Building2Icon} />
        <StatCard label="Pending Approval" value={adminStats.pendingApproval} icon={ClipboardListIcon} />
        <StatCard label="Total Users" value="38" icon={UsersIcon} />
        <StatCard label="Active Agents" value="5" icon={UserPlusIcon} />
        <StatCard label="Inquiries This Month" value={adminStats.inquiriesThisMonth} icon={MessageSquareIcon} />
        <StatCard label="Visit Requests" value={adminStats.visitRequests} icon={CalendarCheckIcon} />
        <StatCard label="Land Purchases" value={adminStats.landPurchases} icon={LandmarkIcon} />
        <StatCard label="Revenue Collected" value={adminStats.revenue} icon={CreditCardIcon} />
      </div>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-black tracking-[-0.04em] text-[#0F2A4A]">Latest property pipeline</h3>
              <p className="text-sm text-muted-foreground">Live-looking demo rows for listings and approvals.</p>
            </div>
            <span className="rounded-full bg-[#f3eadc] px-3 py-1 text-xs font-bold text-[#8a5a1f]">{properties.length} listings</span>
          </div>
          <div className="space-y-3">
            {properties.slice(0, 5).map((property) => (
              <div key={property.slug} className="grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm md:grid-cols-[1.2fr_0.8fr_0.7fr_0.5fr] md:items-center">
                <strong className="text-[#0F2A4A]">{property.title}</strong>
                <span className="text-muted-foreground">{property.location}</span>
                <span className="font-bold text-[#0A7EA4]">{property.price}</span>
                <span className="rounded-full bg-white px-3 py-1 text-center text-xs font-bold text-[#0F2A4A]">{property.purpose}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.04em] text-[#0F2A4A]">Pending approvals</h3>
          <div className="mt-5 space-y-4">
            {pendingProperties.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div><strong className="text-[#0F2A4A]">{item.title}</strong><p className="text-sm text-muted-foreground">{item.owner} · {item.submitted}</p></div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm xl:col-span-2">
          <h3 className="text-2xl font-black tracking-[-0.04em] text-[#0F2A4A]">Lead activity</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {leads.slice(0, 4).map((lead) => (
              <div key={`${lead.user}-${lead.property}`} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3"><strong>{lead.user}</strong><span className="text-xs font-bold text-[#0A7EA4]">{lead.status}</span></div>
                <p className="mt-1 text-sm text-muted-foreground">{lead.property}</p>
                <p className="mt-3 text-xs text-slate-500">{lead.note} · {lead.updated}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.04em] text-[#0F2A4A]">Upcoming visits</h3>
          <div className="mt-5 space-y-3">
            {visitRequests.slice(0, 3).map((visit) => (
              <div key={`${visit.user}-${visit.date}`} className="rounded-2xl bg-slate-50 p-4">
                <strong>{visit.user}</strong>
                <p className="text-sm text-muted-foreground">{visit.property}</p>
                <p className="mt-2 text-xs font-bold text-[#8a5a1f]">{visit.date} · {visit.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-black tracking-[-0.04em] text-[#0F2A4A]">Recent inquiries</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {inquiries.map((item) => (
            <div key={`${item.user}-${item.date}`} className="rounded-2xl bg-slate-50 p-4">
              <strong>{item.user}</strong>
              <p className="mt-1 text-sm text-muted-foreground">{item.message}</p>
              <p className="mt-3 text-xs font-bold text-[#0A7EA4]">{item.property} · {item.status}</p>
            </div>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
