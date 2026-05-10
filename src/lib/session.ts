import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { roleDashboard, type Role } from "@/lib/demo-data";

export async function requireRole(role: Role) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/auth/login");
  }

  if (session.user.role !== role) {
    redirect(roleDashboard[session.user.role]);
  }

  return session;
}
