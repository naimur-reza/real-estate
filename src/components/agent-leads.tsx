"use client";

import { useState } from "react";

import { DemoTable } from "@/components/demo-table";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { leads } from "@/lib/demo-data";

export function AgentLeads() {
  const [selected, setSelected] = useState(leads[0]);

  return (
    <div className="grid grid-cols-[1fr_360px] gap-6">
      <DemoTable
        headers={["User", "Property", "Source", "Status", "Last Updated", "Action"]}
        rows={leads.map((item) => [
          item.user,
          item.property,
          item.source,
          <StatusBadge key="status">{item.status}</StatusBadge>,
          item.updated,
          <Button key="open" size="sm" variant="outline" onClick={() => setSelected(item)}>Open</Button>,
        ])}
      />
      <Card className="rounded-lg">
        <CardHeader><CardTitle>Lead details</CardTitle></CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Lead</p>
            <p className="font-semibold text-[#0F2A4A]">{selected.user}</p>
            <p className="text-sm">{selected.property}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Current status</Label>
            <select className="h-8 rounded-lg border px-3 text-sm" defaultValue={selected.status}>
              <option>New</option>
              <option>Contacted</option>
              <option>Visit Scheduled</option>
              <option>Negotiation</option>
              <option>Closed</option>
            </select>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-sm">
            <p className="font-medium">May 9 - Follow-up call</p>
            <p className="text-muted-foreground">Client requested price comparison.</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-sm">
            <p className="font-medium">May 7 - Initial note</p>
            <p className="text-muted-foreground">{selected.note}</p>
          </div>
          <Input placeholder="Add note" />
        </CardContent>
      </Card>
    </div>
  );
}
