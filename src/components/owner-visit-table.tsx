"use client";

import { useState } from "react";
import { toast } from "sonner";

import { DemoTable } from "@/components/demo-table";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { visitRequests } from "@/lib/demo-data";

export function OwnerVisitTable() {
  const [rows, setRows] = useState(visitRequests);

  function update(index: number, status: string) {
    setRows((items) => items.map((item, itemIndex) => (itemIndex === index ? { ...item, status } : item)));
    toast.success(status === "Confirmed" ? "Visit confirmed!" : "Visit rejected!");
  }

  return (
    <DemoTable
      headers={["From", "Property", "Preferred Date", "Time", "Status", "Actions"]}
      rows={rows.map((item, index) => [
        item.user,
        item.property,
        item.date,
        item.time,
        <StatusBadge key="status">{item.status}</StatusBadge>,
        <div className="flex gap-2" key="actions">
          <Button size="sm" className="bg-[#0A7EA4]" onClick={() => update(index, "Confirmed")}>Confirm</Button>
          <Button size="sm" variant="outline" onClick={() => update(index, "Rejected")}>Reject</Button>
        </div>,
      ])}
    />
  );
}
