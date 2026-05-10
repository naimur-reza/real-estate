import { SlidersHorizontalIcon, SparklesIcon } from "lucide-react";

import { PropertyCard } from "@/components/property-card";
import { PublicNav } from "@/components/public-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { properties } from "@/lib/demo-data";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#0F2A4A]">
      <PublicNav />

      <section className="relative overflow-hidden px-6 py-16 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(10,126,164,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(215,164,79,0.22),transparent_28%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-bold text-[#8a5a1f] shadow-sm backdrop-blur">
              <SparklesIcon className="size-4" /> Verified demo listings
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.075em] md:text-7xl">
              Browse premium properties with a cleaner buying flow.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Land, apartments and commercial spaces are now filled with polished demo data and online property imagery.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-[310px_1fr] lg:px-8">
        <Card className="h-fit rounded-[2rem] border-white/70 bg-white/85 py-0 shadow-[0_24px_80px_rgba(15,42,74,0.10)] backdrop-blur lg:sticky lg:top-28">
          <CardHeader className="border-b p-6">
            <CardTitle className="flex items-center gap-2 text-xl font-black tracking-[-0.04em] text-[#0F2A4A]">
              <SlidersHorizontalIcon className="size-5 text-[#0A7EA4]" /> Smart filters
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 p-6">
            {["Purpose", "Property Type", "Bedrooms", "Location"].map((label) => (
              <div className="flex flex-col gap-2" key={label}>
                <Label className="font-bold text-[#0F2A4A]">{label}</Label>
                <select className="h-11 rounded-2xl border border-input bg-slate-50 px-4 text-sm">
                  <option>Any {label}</option>
                  <option>Rent</option>
                  <option>Sale</option>
                  <option>Land</option>
                </select>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <Label className="font-bold text-[#0F2A4A]">Min Price</Label>
                <Input className="h-11 rounded-2xl bg-slate-50" placeholder="৳" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="font-bold text-[#0F2A4A]">Max Price</Label>
                <Input className="h-11 rounded-2xl bg-slate-50" placeholder="৳" />
              </div>
            </div>
            <Button className="h-12 rounded-2xl bg-[#0F2A4A] hover:bg-[#12365f]">Apply filters</Button>
          </CardContent>
        </Card>

        <section>
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.06em] text-[#0F2A4A]">All properties</h2>
              <p className="mt-2 text-muted-foreground">{properties.length} verified demo listings for the presentation flow.</p>
            </div>
            <div className="flex gap-2 overflow-x-auto text-sm font-bold text-[#8a5a1f]">
              {['All', 'Rent', 'Sale', 'Land'].map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-2 shadow-sm">{item}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((property, index) => (
              <PropertyCard key={property.slug} property={property} featured={index === 0} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
