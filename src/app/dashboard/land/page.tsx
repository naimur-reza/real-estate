import Link from "next/link";

import { DashboardShell } from "@/components/dashboard-shell";
import { StatusBadge } from "@/components/status-badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { userNav } from "@/lib/dashboard-nav";
import { landPurchases } from "@/lib/demo-data";
import { requireRole } from "@/lib/session";

export default async function UserLandPage() {
  const session = await requireRole("USER");
  const purchase = landPurchases[0];
  return (
    <DashboardShell role="USER" name={session.user.name ?? "Demo User"} title="My Land" nav={userNav}>
      <Card className="max-w-2xl rounded-lg">
        <CardHeader><CardTitle>{purchase.property}</CardTitle></CardHeader>
        <CardContent className="flex flex-col gap-5">
          <p className="text-muted-foreground">{purchase.location}</p>
          <Progress value={37} />
          <p className="font-medium text-[#0F2A4A]">3 of 8 installments paid (37%)</p>
          <p>Next due: April installment <StatusBadge>Due</StatusBadge></p>
          <Link className={buttonVariants({ className: "w-fit bg-[#0A7EA4]" })} href="/dashboard/land/detail">View Details</Link>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
