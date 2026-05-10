import { Building2Icon, CalendarCheckIcon, ClipboardListIcon, CreditCardIcon, LandmarkIcon, MessageSquareIcon, UserPlusIcon, UsersIcon } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { adminNav } from "@/lib/dashboard-nav";
import { adminStats } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function AdminPage() {
  const session = await requireRole("ADMIN");
  return (
    <DashboardShell role="ADMIN" name={session.user.name ?? "Admin"} title="Overview" nav={adminNav}>
      <div className="grid grid-cols-4 gap-6">
        <StatCard label="Total Properties" value={adminStats.totalProperties} icon={Building2Icon} />
        <StatCard label="Pending Approval" value={adminStats.pendingApproval} icon={ClipboardListIcon} />
        <StatCard label="Total Users" value="38" icon={UsersIcon} />
        <StatCard label="Active Agents" value="5" icon={UserPlusIcon} />
        <StatCard label="Inquiries This Month" value={adminStats.inquiriesThisMonth} icon={MessageSquareIcon} />
        <StatCard label="Visit Requests" value={adminStats.visitRequests} icon={CalendarCheckIcon} />
        <StatCard label="Land Purchases" value={adminStats.landPurchases} icon={LandmarkIcon} />
        <StatCard label="Revenue Collected" value={adminStats.revenue} icon={CreditCardIcon} />
      </div>
    </DashboardShell>
  );
}
