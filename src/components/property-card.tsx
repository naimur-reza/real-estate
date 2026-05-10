import { BathIcon, BedDoubleIcon, MapPinIcon, MaximizeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { StatusBadge } from "@/components/status-badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { properties } from "@/lib/demo-data";

type Property = (typeof properties)[number];

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Card className="overflow-hidden rounded-lg border-slate-200 py-0 shadow-sm">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image alt={property.title} className="object-cover" fill src={property.image} unoptimized />
        <div className="absolute left-3 top-3">
          <StatusBadge>{property.purpose}</StatusBadge>
        </div>
      </div>
      <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex flex-col gap-1">
          <h3 className="line-clamp-1 text-base font-semibold text-[#0F2A4A]">{property.title}</h3>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPinIcon data-icon="inline-start" />
            {property.location}
          </p>
        </div>
        <p className="text-lg font-semibold text-[#0A7EA4]">{property.price}</p>
        <div className="flex gap-3 text-xs text-slate-600">
          <span className="flex items-center gap-1"><BedDoubleIcon data-icon="inline-start" />{property.bedrooms || "-"} beds</span>
          <span className="flex items-center gap-1"><BathIcon data-icon="inline-start" />{property.bathrooms || "-"} baths</span>
          <span className="flex items-center gap-1"><MaximizeIcon data-icon="inline-start" />{property.area} sqft</span>
        </div>
        <Link className={buttonVariants({ className: "mt-1 w-full bg-[#0F2A4A]" })} href={`/properties/${property.slug}`}>
          View Details
        </Link>
      </CardContent>
    </Card>
  );
}
