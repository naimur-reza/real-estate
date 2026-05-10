import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { roleDashboard, type Role } from "@/lib/demo-data";

const routeRoles: Record<string, Role> = {
  "/dashboard": "USER",
  "/owner": "OWNER",
  "/agent": "AGENT",
  "/admin": "ADMIN",
};

export async function proxy(request: NextRequest) {
  const match = Object.entries(routeRoles).find(([path]) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (!match) {
    return NextResponse.next();
  }

  const [, requiredRole] = match;
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (token.role !== requiredRole) {
    return NextResponse.redirect(new URL(roleDashboard[token.role], request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/owner/:path*", "/agent/:path*", "/admin/:path*"],
};
