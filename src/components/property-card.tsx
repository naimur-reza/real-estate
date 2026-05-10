import { BathIcon, BedDoubleIcon, MapPinIcon, MaximizeIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { StatusBadge } from "@/components/status-badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { properties } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

type Property = (typeof properties)[number];

export function PropertyCard({ property, featured = false }: { property: Property; featured?: boolean }) {
  return (
    <Card className={cn("group overflow-hidden rounded-[2rem] border-white/70 bg-white/90 py-0 shadow-[0_24px_80px_rgba(15,42,74,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,42,74,0.2)]", featured && "ring-2 ring-[#d7a44f]/40")}>
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image alt={property.title} className="object-cover transition duration-700 group-hover:scale-110" fill src={property.image} unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <StatusBadge>{property.purpose}</StatusBadge>
          {featured ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0F2A4A] shadow-sm">
              <SparklesIcon className="size-3" /> Featured
            </span>
          ) : null}
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-sm font-medium text-white/75">{property.type}</p>
          <h3 className="line-clamp-1 text-xl font-semibold tracking-[-0.04em]">{property.title}</h3>
        </div>
      </div>
      <CardContent className="flex flex-col gap-4 p-5">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPinIcon className="size-4 text-[#0A7EA4]" />
          {property.location}
        </p>
        <div className="flex items-end justify-between gap-4">
          <p className="text-2xl font-bold tracking-[-0.04em] text-[#0A7EA4]">{property.price}</p>
          <p className="rounded-full bg-[#f3eadc] px-3 py-1 text-xs font-bold text-[#8a5a1f]">{property.status}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs font-medium text-slate-600">
          <span className="flex items-center gap-1 rounded-2xl bg-slate-50 px-3 py-2"><BedDoubleIcon className="size-3" />{property.bedrooms || "-"} beds</span>
          <span className="flex items-center gap-1 rounded-2xl bg-slate-50 px-3 py-2"><BathIcon className="size-3" />{property.bathrooms || "-"} baths</span>
          <span className="flex items-center gap-1 rounded-2xl bg-slate-50 px-3 py-2"><MaximizeIcon className="size-3" />{property.area}</span>
        </div>
        <Link className={buttonVariants({ className: "mt-1 w-full rounded-2xl bg-[#0F2A4A] py-5 hover:bg-[#12365f]" })} href={`/properties/${property.slug}`}>
          View Details
        </Link>
      </CardContent>
    </Card>
  );
}
