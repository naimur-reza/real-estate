import { PropertyCard } from "@/components/property-card";
import { PublicNav } from "@/components/public-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { properties } from "@/lib/demo-data";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PublicNav />
      <div className="mx-auto grid max-w-7xl grid-cols-[280px_1fr] gap-8 px-8 py-10">
        <Card className="h-fit rounded-lg">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {["Purpose", "Property Type", "Bedrooms", "Location"].map((label) => (
              <div className="flex flex-col gap-2" key={label}>
                <Label>{label}</Label>
                <select className="h-8 rounded-lg border border-input bg-background px-3 text-sm">
                  <option>Any {label}</option>
                  <option>Rent</option>
                  <option>Sale</option>
                  <option>Land</option>
                </select>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <Label>Min Price</Label>
                <Input placeholder="৳" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Max Price</Label>
                <Input placeholder="৳" />
              </div>
            </div>
          </CardContent>
        </Card>
        <section>
          <div className="mb-6">
            <h1 className="text-3xl font-semibold tracking-normal text-[#0F2A4A]">All properties</h1>
            <p className="mt-2 text-muted-foreground">8 verified demo listings for the presentation flow.</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
