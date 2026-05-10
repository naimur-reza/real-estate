import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  PUBLISHED: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Published: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Confirmed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  PAID: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Active: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Pending: "bg-amber-50 text-amber-700 ring-amber-200",
  DUE: "bg-red-50 text-red-700 ring-red-200",
  Rejected: "bg-red-50 text-red-700 ring-red-200",
  New: "bg-sky-50 text-sky-700 ring-sky-200",
  Read: "bg-slate-50 text-slate-700 ring-slate-200",
  Replied: "bg-teal-50 text-teal-700 ring-teal-200",
  UPCOMING: "bg-slate-50 text-slate-600 ring-slate-200",
  COMPLETED: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  ACTIVE: "bg-sky-50 text-sky-700 ring-sky-200",
  Suspended: "bg-red-50 text-red-700 ring-red-200",
};

export function StatusBadge({ children }: { children: string }) {
  return (
    <Badge className={cn("border-0 ring-1", styles[children] ?? "bg-slate-50 text-slate-700")}>
      {children}
    </Badge>
  );
}
