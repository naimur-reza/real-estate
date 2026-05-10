import { BathIcon, BedDoubleIcon, CheckIcon, MapPinIcon, MaximizeIcon, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PropertyActions } from "@/components/property-actions";
import { PropertyCard } from "@/components/property-card";
import { PublicNav } from "@/components/public-nav";
import { StatusBadge } from "@/components/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { properties } from "@/lib/demo-data";

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <PublicNav />
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="relative mb-8 aspect-[16/7] overflow-hidden rounded-lg">
          <Image alt={property.title} className="object-cover" fill src={property.image} unoptimized />
        </div>
        <div className="grid grid-cols-[1fr_340px] gap-8">
          <section className="flex flex-col gap-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="mb-3"><StatusBadge>{property.purpose}</StatusBadge></div>
                <h1 className="text-4xl font-semibold tracking-normal text-[#0F2A4A]">{property.title}</h1>
                <p className="mt-3 flex items-center gap-2 text-muted-foreground">
                  <MapPinIcon data-icon="inline-start" />
                  {property.location}
                </p>
              </div>
              <p className="text-3xl font-semibold text-[#0A7EA4]">{property.price}</p>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {([
                ["Bedrooms", property.bedrooms || "-", BedDoubleIcon],
                ["Bathrooms", property.bathrooms || "-", BathIcon],
                ["Size", `${property.area} sqft`, MaximizeIcon],
                ["Floor", property.floor, MapPinIcon],
                ["Type", property.type, MapPinIcon],
              ] satisfies [string, string | number, LucideIcon][]).map(([label, value, Icon]) => (
                <Card className="rounded-lg" key={String(label)}>
                  <CardContent className="flex flex-col gap-2 p-4">
                    <Icon className="text-[#0A7EA4]" />
                    <span className="text-sm text-muted-foreground">{String(label)}</span>
                    <strong className="text-[#0F2A4A]">{String(value)}</strong>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="rounded-lg">
              <CardHeader><CardTitle>Description</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground">{property.description}</CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardHeader><CardTitle>Amenities</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-3 gap-3">
                {property.amenities.map((item) => (
                  <span className="flex items-center gap-2 text-sm" key={item}>
                    <CheckIcon className="text-emerald-600" />
                    {item}
                  </span>
                ))}
              </CardContent>
            </Card>
            <div>
              <h2 className="mb-4 text-2xl font-semibold tracking-normal text-[#0F2A4A]">Similar properties</h2>
              <div className="grid grid-cols-2 gap-6">
                {properties.filter((item) => item.slug !== property.slug).slice(0, 2).map((item) => (
                  <PropertyCard key={item.slug} property={item} />
                ))}
              </div>
            </div>
          </section>
          <aside>
            <Card className="sticky top-24 rounded-lg">
              <CardHeader><CardTitle>Owner & Agent</CardTitle></CardHeader>
              <CardContent className="flex flex-col gap-5">
                <div>
                  <p className="text-sm text-muted-foreground">Owner</p>
                  <p className="font-semibold text-[#0F2A4A]">{property.ownerName}</p>
                  <p className="text-sm text-muted-foreground">017xx-xxxxx</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Agent</p>
                  <p className="font-semibold text-[#0F2A4A]">{property.agentName}</p>
                  <p className="text-sm text-muted-foreground">017xx-xxxxx</p>
                </div>
                <PropertyActions />
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
