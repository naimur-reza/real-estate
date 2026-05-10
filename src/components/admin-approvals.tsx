"use client";

import { useState } from "react";
import { toast } from "sonner";

import { DemoTable } from "@/components/demo-table";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { pendingProperties } from "@/lib/demo-data";

export function AdminApprovals() {
  const [rows, setRows] = useState(pendingProperties);

  function approve(index: number) {
    setRows((items) => items.map((item, itemIndex) => (itemIndex === index ? { ...item, status: "Published" } : item)));
    toast.success("Approved!");
  }

  return (
    <DemoTable
      headers={["Property", "Owner", "Purpose", "Submitted", "Status", "Actions"]}
      rows={rows.map((item, index) => [
        item.title,
        item.owner,
        item.purpose,
        item.submitted,
        <StatusBadge key="status">{item.status}</StatusBadge>,
        <div className="flex gap-2" key="actions">
          <Button size="sm" className="bg-[#0A7EA4]" onClick={() => approve(index)}>Approve</Button>
          <Dialog>
            <DialogTrigger render={<Button size="sm" variant="outline" />}>Reject</DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Rejection reason</DialogTitle></DialogHeader>
              <Textarea placeholder="Explain why this property is rejected" />
              <DialogFooter>
                <Button variant="destructive" onClick={() => toast.error("Rejected")}>Reject</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>,
      ])}
    />
  );
}
