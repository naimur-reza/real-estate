"use client";

import { toast } from "sonner";

import { DemoTable } from "@/components/demo-table";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { installments } from "@/lib/demo-data";

export function InstallmentTable() {
  return (
    <DemoTable
      headers={["Month", "Due Date", "Amount (BDT)", "Status", "Action"]}
      rows={installments.map((item) => [
        item.month,
        item.dueDate,
        item.amount,
        <StatusBadge key="status">{item.status}</StatusBadge>,
        item.status === "PAID" ? (
          <a className="font-medium text-[#0A7EA4]" href="#" key="receipt">Receipt</a>
        ) : item.status === "DUE" ? (
          <Button key="pay" size="sm" className="bg-[#0A7EA4]" onClick={() => toast.success("Payment recorded!")}>Pay Now</Button>
        ) : (
          <span key="dash" className="text-muted-foreground">-</span>
        ),
      ])}
    />
  );
}
