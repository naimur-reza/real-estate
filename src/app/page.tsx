import { SearchIcon } from "lucide-react";

import { PropertyCard } from "@/components/property-card";
import { PublicNav } from "@/components/public-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { properties } from "@/lib/demo-data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <PublicNav />
      <section className="bg-gradient-to-br from-[#0F2A4A] to-[#0A7EA4] px-8 py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_440px] gap-12">
          <div className="flex flex-col justify-center gap-7">
            <h1 className="max-w-3xl text-6xl font-semibold leading-tight tracking-normal">
              Find Your Perfect Property in Bangladesh
            </h1>
            <p className="max-w-2xl text-lg text-white/80">
              Explore verified apartments, land plots, and commercial spaces across Dhaka, Gazipur, and Savar.
            </p>
            <Card className="max-w-3xl rounded-lg bg-white py-0 shadow-xl">
              <CardContent className="grid grid-cols-[1fr_180px_auto] gap-3 p-3">
                <Input placeholder="Search by location or property name" />
                <select className="h-8 rounded-lg border border-input bg-background px-3 text-sm text-foreground">
                  <option>All</option>
                  <option>Rent</option>
                  <option>Sale</option>
                  <option>Land</option>
                </select>
                <Button className="bg-[#0A7EA4]">
                  <SearchIcon data-icon="inline-start" />
                  Search
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4">
            {properties.slice(0, 2).map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-b bg-slate-50 px-8 py-6">
        <div className="mx-auto flex max-w-7xl justify-between text-center font-semibold text-[#0F2A4A]">
          <span>47+ Properties</span>
          <span>120+ Happy Clients</span>
          <span>5 Star Rating</span>
          <span>3 Cities</span>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal text-[#0F2A4A]">Featured properties</h2>
            <p className="mt-2 text-muted-foreground">A curated set of ready-to-present marketplace listings.</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {properties.slice(0, 4).map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </section>
      <footer className="border-t bg-[#0F2A4A] px-8 py-8 text-white">
        <div className="mx-auto flex max-w-7xl justify-between">
          <strong>PropBD</strong>
          <span className="text-white/70">Copyright 2026 PropBD. Demo presentation.</span>
        </div>
      </footer>
    </main>
  );
}
