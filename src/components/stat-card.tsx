import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  icon: LucideIcon;
}) {
  return (
    <Card className="rounded-lg border-slate-200 shadow-sm">
      <CardContent className="flex items-center justify-between p-5">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-1 text-2xl font-semibold text-[#0F2A4A]">{value}</p>
        </div>
        <div className="flex size-10 items-center justify-center rounded-lg bg-[#0A7EA4]/10 text-[#0A7EA4]">
          <Icon />
        </div>
      </CardContent>
    </Card>
  );
}
