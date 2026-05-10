import { Building2Icon, MenuIcon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function PublicNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link className="flex items-center gap-3 font-bold tracking-[-0.03em] text-[#0F2A4A]" href="/">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F2A4A] to-[#0A7EA4] text-white shadow-lg shadow-[#0A7EA4]/20">
            <Building2Icon className="size-5" />
          </span>
          <span className="text-xl">PropBD</span>
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/70 p-1 text-sm font-medium text-slate-600 shadow-sm md:flex">
          <Link className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-[#0F2A4A]" href="/properties">Properties</Link>
          <Link className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-[#0F2A4A]" href="/properties">Rent</Link>
          <Link className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-[#0F2A4A]" href="/properties">Buy</Link>
          <Link className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-[#0F2A4A]" href="/properties">Land</Link>
          <Link className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-[#0F2A4A]" href="/agent">Agents</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link className={buttonVariants({ className: "hidden rounded-full bg-[#0F2A4A] px-6 shadow-lg shadow-[#0F2A4A]/15 hover:bg-[#12365f] sm:inline-flex" })} href="/auth/login">
            Login
          </Link>
          <button className="inline-flex size-11 items-center justify-center rounded-full border bg-white md:hidden" aria-label="Open menu">
            <MenuIcon className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
