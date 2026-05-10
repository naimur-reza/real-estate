import { Building2Icon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function PublicNav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        <Link className="flex items-center gap-3 font-semibold text-[#0F2A4A]" href="/">
          <span className="flex size-9 items-center justify-center rounded-lg bg-[#0A7EA4] text-white">
            <Building2Icon />
          </span>
          PropBD
        </Link>
        <nav className="flex items-center gap-7 text-sm text-slate-600">
          <Link href="/properties">Properties</Link>
          <Link href="/properties">Rent</Link>
          <Link href="/properties">Buy</Link>
          <Link href="/properties">Land</Link>
          <Link href="/agent">Agents</Link>
        </nav>
        <Link className={buttonVariants({ className: "bg-[#0F2A4A]" })} href="/auth/login">
          Login
        </Link>
      </div>
    </header>
  );
}
