import { CalendarCheckIcon, HeartIcon, MessageSquareIcon } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { userNav } from "@/lib/dashboard-nav";
import { requireRole } from "@/lib/session";

export default async function UserDashboardPage() {
  const session = await requireRole("USER");
  return (
    <DashboardShell role="USER" name={session.user.name ?? "Demo User"} title="Overview" nav={userNav}>
      <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#0F2A4A]">Welcome, {session.user.name}</h2>
        <p className="mt-1 text-muted-foreground">Track inquiries, visits, and installment progress.</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <StatCard label="Inquiries Sent" value="3" icon={MessageSquareIcon} />
        <StatCard label="Visits Booked" value="2" icon={CalendarCheckIcon} />
        <StatCard label="Saved Properties" value="4" icon={HeartIcon} />
      </div>
    </DashboardShell>
  );
}
