"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listingChart } from "@/lib/demo-data";

const leadStatus = [
  { status: "New", count: 2 },
  { status: "Contacted", count: 1 },
  { status: "Visit Scheduled", count: 1 },
  { status: "Negotiation", count: 1 },
  { status: "Closed", count: 1 },
];

export function AgentAnalyticsCharts() {
  return (
    <div className="grid grid-cols-[1fr_300px] gap-6">
      <Card className="rounded-lg">
        <CardHeader><CardTitle>Leads by status</CardTitle></CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={leadStatus}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#0A7EA4" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid gap-6">
        <Card className="rounded-lg"><CardContent className="p-6"><p className="text-sm text-muted-foreground">Conversion rate</p><p className="text-5xl font-semibold text-[#0F2A4A]">33%</p></CardContent></Card>
        <Card className="rounded-lg"><CardContent className="p-6"><p className="text-sm text-muted-foreground">This month vs last month</p><p className="text-3xl font-semibold text-[#0A7EA4]">6 vs 4 ↑</p></CardContent></Card>
      </div>
    </div>
  );
}

export function AdminAnalyticsCharts() {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-2 gap-6">
        <Card className="rounded-lg">
          <CardHeader><CardTitle>New listings per month</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={listingChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="listings" fill="#0A7EA4" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="rounded-lg">
          <CardHeader><CardTitle>New users per month</CardTitle></CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={listingChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#0F2A4A" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
