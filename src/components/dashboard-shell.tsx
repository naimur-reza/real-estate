import type { LucideIcon } from "lucide-react";
import { Building2Icon } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RoleSwitcher } from "@/components/role-switcher";
import { type Role } from "@/lib/demo-data";

type NavItem = { href: string; label: string; icon: LucideIcon };

export function DashboardShell({
  role,
  name,
  title,
  nav,
  children,
}: {
  role: Role;
  name: string;
  title: string;
  nav: NavItem[];
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-slate-50">
      <aside className="flex w-72 shrink-0 flex-col bg-[#0F2A4A] p-6 text-white">
        <Link className="mb-8 flex items-center gap-3" href="/">
          <span className="flex size-10 items-center justify-center rounded-lg bg-[#0A7EA4]">
            <Building2Icon />
          </span>
          <span className="text-xl font-semibold">PropBD</span>
        </Link>
        <nav className="flex flex-1 flex-col gap-1">
          {nav.map((item) => (
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              href={item.href}
              key={item.href}
            >
              <item.icon />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex items-center gap-3 rounded-lg bg-white/10 p-3">
          <Avatar className="size-9">
            <AvatarFallback className="bg-[#0A7EA4] text-white">{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-white/60">{role}</p>
          </div>
        </div>
      </aside>
      <section className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-20 items-center justify-between border-b bg-white px-8">
          <div>
            <p className="text-sm text-muted-foreground">{role} dashboard</p>
            <h1 className="text-2xl font-semibold tracking-normal text-[#0F2A4A]">{title}</h1>
          </div>
          <RoleSwitcher />
        </header>
        <div className="p-8">{children}</div>
      </section>
    </main>
  );
}
