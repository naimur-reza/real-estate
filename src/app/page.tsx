import { ArrowRightIcon, Building2Icon, CheckCircle2Icon, MapPinIcon, SearchIcon, ShieldCheckIcon, SparklesIcon, TrendingUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PropertyCard } from "@/components/property-card";
import { PublicNav } from "@/components/public-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { properties } from "@/lib/demo-data";

const stats = [
  { label: "Verified listings", value: "47+" },
  { label: "Happy clients", value: "120+" },
  { label: "Prime areas", value: "18" },
  { label: "Avg. response", value: "12h" },
];

const categories = [
  { title: "Land plots", count: "18 listings", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80" },
  { title: "Luxury homes", count: "12 listings", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80" },
  { title: "Apartments", count: "24 listings", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ea] text-[#0F2A4A]">
      <PublicNav />

      <section className="relative px-6 py-10 lg:px-8 lg:py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(10,126,164,0.18),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(215,164,79,0.22),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold text-[#8a5a1f] shadow-sm backdrop-blur">
              <SparklesIcon className="size-4" /> Modern Bangladesh real estate platform
            </div>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.075em] text-[#0F2A4A] md:text-7xl lg:text-8xl">
                Find land, homes and investment-ready spaces faster.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                PropBD brings verified properties, smart filters, clean owner flows, and a classy dashboard into one smooth experience for buyers, agents and admins.
              </p>
            </div>

            <Card className="max-w-4xl rounded-[2rem] border-white/70 bg-white/85 py-0 shadow-[0_30px_90px_rgba(15,42,74,0.16)] backdrop-blur">
              <CardContent className="grid gap-3 p-3 md:grid-cols-[1fr_180px_auto]">
                <Input className="h-13 rounded-2xl border-slate-200 bg-slate-50 px-5" placeholder="Search by location, property name or land type" />
                <select className="h-13 rounded-2xl border border-input bg-slate-50 px-4 text-sm text-foreground">
                  <option>All properties</option>
                  <option>Rent</option>
                  <option>Sale</option>
                  <option>Land</option>
                </select>
                <Button className="h-13 rounded-2xl bg-[#0A7EA4] px-7 hover:bg-[#096b8c]">
                  <SearchIcon className="size-4" /> Search
                </Button>
              </CardContent>
            </Card>

            <div className="grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur">
                  <p className="text-3xl font-black tracking-[-0.05em]">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[640px]">
            <div className="absolute right-0 top-0 w-[84%] overflow-hidden rounded-[3rem] shadow-[0_40px_110px_rgba(15,42,74,0.28)]">
              <Image alt="Green land in Bangladesh" className="h-[620px] object-cover" height={900} src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" unoptimized width={900} />
            </div>
            <div className="absolute left-0 top-20 w-72 rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-[0_24px_80px_rgba(15,42,74,0.18)] backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#0A7EA4]/10 text-[#0A7EA4]"><MapPinIcon className="size-5" /></span>
                <div><p className="font-bold">Hot zone</p><p className="text-sm text-slate-500">Purbachal · Bashundhara</p></div>
              </div>
              <p className="text-3xl font-black tracking-[-0.05em]">৳2.2Cr</p>
              <p className="text-sm text-slate-500">Premium plot starting price</p>
            </div>
            <div className="absolute bottom-10 left-10 right-8 rounded-[2rem] border border-white/70 bg-[#0F2A4A]/90 p-5 text-white shadow-[0_24px_80px_rgba(15,42,74,0.25)] backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div><p className="text-sm text-white/60">Monthly growth</p><p className="text-3xl font-black tracking-[-0.05em]">+28%</p></div>
                <TrendingUpIcon className="size-10 text-[#d7a44f]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a5a1f]">Curated marketplace</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-5xl">Featured properties</h2>
            <p className="mt-3 max-w-2xl text-slate-600">Fresh demo data with real online property images, so the landing page finally looks alive.</p>
          </div>
          <Link className="inline-flex items-center gap-2 rounded-full bg-[#0F2A4A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#0F2A4A]/20" href="/properties">
            Explore all <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {properties.slice(0, 4).map((property, index) => (
            <PropertyCard key={property.slug} property={property} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-3 lg:px-8">
        {categories.map((category) => (
          <article key={category.title} className="group relative min-h-80 overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-[0_24px_80px_rgba(15,42,74,0.14)]">
            <Image alt={category.title} className="absolute inset-0 h-full object-cover transition duration-700 group-hover:scale-110" height={600} src={category.image} unoptimized width={900} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-7 text-white">
              <p className="text-sm font-bold text-white/65">{category.count}</p>
              <h3 className="mt-2 text-3xl font-black tracking-[-0.05em]">{category.title}</h3>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-10 rounded-[3rem] bg-[#0F2A4A] p-8 text-white shadow-[0_30px_100px_rgba(15,42,74,0.25)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div className="space-y-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a44f]">Why PropBD</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.06em] md:text-5xl">A classy platform for serious real-estate teams.</h2>
            <p className="text-white/70">From public browsing to owner, agent and admin workflows, the UI now feels like a polished product instead of a basic demo.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {["Verified listing flow", "Modern dashboard", "Visit & lead tracking", "Land installment data"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/10 p-5">
                <CheckCircle2Icon className="size-5 text-[#d7a44f]" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <strong className="flex items-center gap-2 text-[#0F2A4A]"><Building2Icon className="size-4" /> PropBD</strong>
          <span>Copyright 2026 PropBD. Modern real estate demo.</span>
          <span className="flex items-center gap-2"><ShieldCheckIcon className="size-4" /> Verified marketplace concept</span>
        </div>
      </footer>
    </main>
  );
}
