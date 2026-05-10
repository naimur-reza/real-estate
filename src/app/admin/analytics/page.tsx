import { AdminAnalyticsCharts } from "@/components/analytics-charts";
import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { CreditCardIcon, MapPinIcon, TrophyIcon } from "lucide-react";
import { adminNav } from "@/lib/dashboard-nav";
import { requireRole } from "@/lib/session";

export default async function AdminAnalyticsPage() {
  const session = await requireRole("ADMIN");
  return (
    <DashboardShell role="ADMIN" name={session.user.name ?? "Admin"} title="Analytics" nav={adminNav}>
      <AdminAnalyticsCharts />
      <div className="mt-6 grid grid-cols-3 gap-6">
        <StatCard label="Total Revenue Collected" value="৳3,20,000" icon={CreditCardIcon} />
        <StatCard label="Most Active Area" value="Dhaka" icon={MapPinIcon} />
        <StatCard label="Top Agent" value="Demo Agent" icon={TrophyIcon} />
      </div>
    </DashboardShell>
  );
}
