import { Building2Icon, CalendarCheckIcon, MessageSquareIcon, PlusIcon } from "lucide-react";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatCard } from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { ownerNav } from "@/lib/dashboard-nav";
import { requireRole } from "@/lib/session";

export default async function OwnerPage() {
  const session = await requireRole("OWNER");
  return (
    <DashboardShell role="OWNER" name={session.user.name ?? "Owner"} title="Overview" nav={ownerNav}>
      <div className="mb-6 flex justify-end">
        <Button className="bg-[#0A7EA4]"><PlusIcon data-icon="inline-start" />Add New Property</Button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <StatCard label="Listed Properties" value="3" icon={Building2Icon} />
        <StatCard label="Pending Inquiries" value="4" icon={MessageSquareIcon} />
        <StatCard label="Visits This Week" value="2" icon={CalendarCheckIcon} />
      </div>
    </DashboardShell>
  );
}
