import {
  AlertTriangleIcon,
  ArrowUpRightIcon,
  BanknoteIcon,
  Building2Icon,
  CalendarCheckIcon,
  CheckCircle2Icon,
  ClipboardListIcon,
  CreditCardIcon,
  FileCheck2Icon,
  LandmarkIcon,
  MegaphoneIcon,
  MessageSquareIcon,
  PieChartIcon,
  ShieldCheckIcon,
  TargetIcon,
  TrendingUpIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { adminNav } from "@/lib/dashboard-nav";
import { adminStats, inquiries, leads, pendingProperties, properties, visitRequests } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

const revenueMetrics = [
  { label: "Gross sales", value: "৳18.4Cr", change: "+18.2%" },
  { label: "Booking tokens", value: "৳42.8L", change: "+9.4%" },
  { label: "Rent pipeline", value: "৳7.2L", change: "+12.8%" },
  { label: "Commission due", value: "৳18.6L", change: "+6.1%" },
];

const areaPerformance = [
  { area: "Purbachal", leads: 342, deals: 18, value: "৳5.8Cr", progress: 88 },
  { area: "Gulshan", leads: 218, deals: 11, value: "৳4.1Cr", progress: 76 },
  { area: "Banani", leads: 184, deals: 9, value: "৳2.6Cr", progress: 63 },
  { area: "Uttara", leads: 151, deals: 7, value: "৳1.9Cr", progress: 52 },
  { area: "Savar", leads: 126, deals: 5, value: "৳1.2Cr", progress: 44 },
];

const agentLeaderboard = [
  { name: "Rafi Agent", zone: "Gulshan & Banani", deals: 14, revenue: "৳7.8Cr", score: 96 },
  { name: "Maliha Karim", zone: "Uttara & Mirpur", deals: 11, revenue: "৳4.6Cr", score: 89 },
  { name: "Nusrat Owner", zone: "Purbachal", deals: 8, revenue: "৳3.4Cr", score: 82 },
  { name: "Tanvir Hossain", zone: "Savar", deals: 6, revenue: "৳1.7Cr", score: 74 },
];

const documentQueue = [
  { title: "Mutation certificate", property: "Gazipur Residential Land Plot", owner: "Nusrat Owner", status: "Verified" },
  { title: "Deed scan", property: "Savar Highway Adjacent Plot", owner: "Tanvir Hossain", status: "Pending" },
  { title: "RAJUK approval", property: "Uttara Premium Corner Flat", owner: "Tanvir Hossain", status: "Review" },
  { title: "Tax receipt", property: "Purbachal Future Plot", owner: "Rashed Properties", status: "Missing" },
];

const paymentSchedule = [
  { buyer: "Demo User", property: "Gazipur Land Plot", due: "৳96,000", date: "May 10", status: "Due today" },
  { buyer: "Arif Islam", property: "Savar Highway Plot", due: "৳0", date: "Completed", status: "Paid" },
  { buyer: "Nabila Khan", property: "Mirpur Apartment", due: "৳2,20,000", date: "May 18", status: "Upcoming" },
  { buyer: "Tania Sultana", property: "Purbachal Plot", due: "৳1,50,000", date: "May 22", status: "Upcoming" },
];

const marketingSources = [
  { source: "Website", leads: 420, rate: "18%", color: "bg-[#0A7EA4]", width: "82%" },
  { source: "Facebook", leads: 265, rate: "12%", color: "bg-[#d7a44f]", width: "64%" },
  { source: "Agent call", leads: 188, rate: "21%", color: "bg-[#0F2A4A]", width: "55%" },
  { source: "Referral", leads: 94, rate: "27%", color: "bg-emerald-500", width: "38%" },
];

const tasks = [
  { title: "Approve 3 new listings", owner: "Admin team", priority: "High" },
  { title: "Follow up Purbachal hot leads", owner: "Rafi Agent", priority: "High" },
  { title: "Verify Savar deed scan", owner: "Legal team", priority: "Medium" },
  { title: "Prepare weekly owner report", owner: "Ops", priority: "Low" },
];

const alerts = [
  { title: "4 listings need document review", type: "Legal" },
  { title: "2 site visits are still unconfirmed", type: "Visit" },
  { title: "1 installment payment due today", type: "Payment" },
];

function SectionCard({ title, subtitle, children, action }: { title: string; subtitle?: string; children: React.ReactNode; action?: string }) {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_22px_70px_rgba(15,42,74,0.08)] backdrop-blur">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black tracking-[-0.05em] text-[#0F2A4A]">{title}</h3>
          {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
        {action ? <span className="rounded-full bg-[#f3eadc] px-3 py-1 text-xs font-bold text-[#8a5a1f]">{action}</span> : null}
      </div>
      {children}
    </section>
  );
}

function MiniBadge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-[#0F2A4A]">{children}</span>;
}

export default async function AdminPage() {
  const session = await requireRole("ADMIN");

  return (
    <DashboardShell role="ADMIN" name={session.user.name ?? "Admin"} title="Executive Command Center" nav={adminNav}>
      <section className="mb-8 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0F2A4A] via-[#12365f] to-[#0A7EA4] p-8 text-white shadow-[0_35px_110px_rgba(15,42,74,0.32)]">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-[#f1c77d] backdrop-blur">
              <ShieldCheckIcon className="size-4" /> Real estate operations cockpit
            </div>
            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.075em] md:text-6xl">
              A huge, classy dashboard for listings, sales, leads, legal docs and payments.
            </h2>
            <p className="mt-5 max-w-2xl text-white/70">
              Built with rich demo modules so the admin area feels like a serious SaaS product, not just a few empty cards.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {revenueMetrics.map((metric) => (
              <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">{metric.label}</p>
                <strong className="mt-2 block text-3xl tracking-[-0.05em]">{metric.value}</strong>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-emerald-200"><ArrowUpRightIcon className="size-3" /> {metric.change}</span>
              </div>
            ))}
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

      <section className="mt-8 grid gap-6 2xl:grid-cols-[1.35fr_0.65fr]">
        <SectionCard title="Revenue & listing intelligence" subtitle="Month-to-date performance across sales, rent and land inventory." action="Live demo">
          <div className="grid gap-4 md:grid-cols-4">
            {revenueMetrics.map((metric) => (
              <div key={metric.label} className="rounded-[1.5rem] bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{metric.label}</p>
                <strong className="mt-2 block text-3xl tracking-[-0.05em] text-[#0F2A4A]">{metric.value}</strong>
                <span className="text-xs font-bold text-emerald-600">{metric.change} this month</span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3">
            {areaPerformance.map((area) => (
              <div key={area.area} className="grid gap-4 rounded-2xl border border-slate-100 p-4 md:grid-cols-[0.8fr_1fr_0.6fr_0.5fr] md:items-center">
                <div><strong>{area.area}</strong><p className="text-sm text-muted-foreground">{area.leads} leads</p></div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100"><span className="block h-full rounded-full bg-[#0A7EA4]" style={{ width: `${area.progress}%` }} /></div>
                <span className="font-bold text-[#0A7EA4]">{area.value}</span>
                <MiniBadge>{area.deals} deals</MiniBadge>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="System alerts" subtitle="Important admin actions that need eyes." action="3 active">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.title} className="flex gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4">
                <AlertTriangleIcon className="mt-1 size-5 shrink-0 text-amber-600" />
                <div><strong className="text-[#0F2A4A]">{alert.title}</strong><p className="text-sm text-amber-700">{alert.type} module</p></div>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="mt-8 grid gap-6 2xl:grid-cols-[1fr_1fr]">
        <SectionCard title="Latest property pipeline" subtitle="Track listing movement, price and publication type." action={`${properties.length} listings`}>
          <div className="space-y-3">
            {properties.map((property) => (
              <div key={property.slug} className="grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm xl:grid-cols-[1.2fr_0.8fr_0.7fr_0.5fr] xl:items-center">
                <strong className="text-[#0F2A4A]">{property.title}</strong>
                <span className="text-muted-foreground">{property.location}</span>
                <span className="font-bold text-[#0A7EA4]">{property.price}</span>
                <MiniBadge>{property.purpose}</MiniBadge>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Agent leaderboard" subtitle="Performance score, closed deals and zone ownership." action="Top agents">
          <div className="space-y-3">
            {agentLeaderboard.map((agent, index) => (
              <div key={agent.name} className="rounded-2xl border border-slate-100 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-[#0F2A4A] text-sm font-black text-white">#{index + 1}</span>
                    <div><strong>{agent.name}</strong><p className="text-sm text-muted-foreground">{agent.zone}</p></div>
                  </div>
                  <MiniBadge>{agent.score}% score</MiniBadge>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-slate-50 p-3"><span className="text-muted-foreground">Deals</span><strong className="block text-[#0F2A4A]">{agent.deals}</strong></div>
                  <div className="rounded-2xl bg-slate-50 p-3"><span className="text-muted-foreground">Revenue</span><strong className="block text-[#0A7EA4]">{agent.revenue}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        <SectionCard title="Lead activity" subtitle="Hot buyers, sources and latest notes." action="CRM">
          <div className="space-y-3">
            {leads.map((lead) => (
              <div key={`${lead.user}-${lead.property}`} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3"><strong>{lead.user}</strong><span className="text-xs font-bold text-[#0A7EA4]">{lead.status}</span></div>
                <p className="mt-1 text-sm text-muted-foreground">{lead.property}</p>
                <p className="mt-3 text-xs text-slate-500">{lead.note} · {lead.updated}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Marketing sources" subtitle="Lead volume and conversion rate by channel." action="Growth">
          <div className="space-y-5">
            {marketingSources.map((source) => (
              <div key={source.source}>
                <div className="mb-2 flex justify-between text-sm"><strong>{source.source}</strong><span className="text-muted-foreground">{source.leads} leads · {source.rate}</span></div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100"><span className={`block h-full rounded-full ${source.color}`} style={{ width: source.width }} /></div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Upcoming visits" subtitle="Site visits waiting for admin coordination." action="Schedule">
          <div className="space-y-3">
            {visitRequests.map((visit) => (
              <div key={`${visit.user}-${visit.date}`} className="rounded-2xl bg-slate-50 p-4">
                <strong>{visit.user}</strong>
                <p className="text-sm text-muted-foreground">{visit.property}</p>
                <p className="mt-2 text-xs font-bold text-[#8a5a1f]">{visit.date} · {visit.time} · {visit.status}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="mt-8 grid gap-6 2xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Document & legal review" subtitle="Mutation, deed, approval and tax document status." action="Legal">
          <div className="space-y-3">
            {documentQueue.map((doc) => (
              <div key={`${doc.title}-${doc.property}`} className="grid gap-3 rounded-2xl border border-slate-100 p-4 md:grid-cols-[0.8fr_1fr_0.6fr] md:items-center">
                <div className="flex items-center gap-3"><FileCheck2Icon className="size-5 text-[#0A7EA4]" /><strong>{doc.title}</strong></div>
                <span className="text-sm text-muted-foreground">{doc.property}</span>
                <MiniBadge>{doc.status}</MiniBadge>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Payment & installment control" subtitle="Track due payments, upcoming installments and closed purchase plans." action="Finance">
          <div className="space-y-3">
            {paymentSchedule.map((payment) => (
              <div key={`${payment.buyer}-${payment.property}`} className="grid gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-[0.8fr_1fr_0.6fr_0.6fr] md:items-center">
                <div className="flex items-center gap-3"><BanknoteIcon className="size-5 text-[#0A7EA4]" /><strong>{payment.buyer}</strong></div>
                <span className="text-sm text-muted-foreground">{payment.property}</span>
                <span className="font-bold text-[#0F2A4A]">{payment.due}</span>
                <MiniBadge>{payment.status}</MiniBadge>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Recent inquiries" subtitle="Messages from buyers and investors." action="Inbox">
          <div className="grid gap-3 md:grid-cols-2">
            {inquiries.map((item) => (
              <div key={`${item.user}-${item.date}`} className="rounded-2xl bg-slate-50 p-4">
                <strong>{item.user}</strong>
                <p className="mt-1 text-sm text-muted-foreground">{item.message}</p>
                <p className="mt-3 text-xs font-bold text-[#0A7EA4]">{item.property} · {item.status}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Operations task board" subtitle="Internal work queue for admin, agents and legal team." action="Tasks">
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.title} className="flex items-start justify-between gap-4 rounded-2xl border border-slate-100 p-4">
                <div className="flex gap-3"><CheckCircle2Icon className="mt-1 size-5 text-emerald-500" /><div><strong>{task.title}</strong><p className="text-sm text-muted-foreground">{task.owner}</p></div></div>
                <MiniBadge>{task.priority}</MiniBadge>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] bg-[#0F2A4A] p-6 text-white shadow-[0_24px_80px_rgba(15,42,74,0.2)]"><PieChartIcon className="size-8 text-[#d7a44f]" /><h3 className="mt-5 text-2xl font-black tracking-[-0.05em]">Inventory health</h3><p className="mt-2 text-sm text-white/60">71% published, 18% pending, 11% draft listings.</p></div>
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_22px_70px_rgba(15,42,74,0.08)]"><TargetIcon className="size-8 text-[#0A7EA4]" /><h3 className="mt-5 text-2xl font-black tracking-[-0.05em]">Sales target</h3><p className="mt-2 text-sm text-muted-foreground">৳18.4Cr achieved out of ৳25Cr monthly goal.</p></div>
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_22px_70px_rgba(15,42,74,0.08)]"><MegaphoneIcon className="size-8 text-[#d7a44f]" /><h3 className="mt-5 text-2xl font-black tracking-[-0.05em]">Campaign pulse</h3><p className="mt-2 text-sm text-muted-foreground">Purbachal land campaign is outperforming by 32%.</p></div>
      </section>
    </DashboardShell>
  );
}
