"use client";

import { ChevronDownIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { demoUsers, roleDashboard, type Role } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

export function RoleSwitcher() {
  const router = useRouter();

  async function switchRole(role: Role) {
    const user = demoUsers.find((item) => item.role === role && "password" in item);

    if (!user || !("password" in user)) {
      return;
    }

    await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    });
    router.push(roleDashboard[role]);
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(buttonVariants({ variant: "outline" }), "gap-2")}>
        Switch Role
        <ChevronDownIcon data-icon="inline-end" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(["USER", "OWNER", "AGENT", "ADMIN"] as Role[]).map((role) => (
          <DropdownMenuItem key={role} onClick={() => switchRole(role)}>
            {role}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
