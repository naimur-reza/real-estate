"use client";

import { useState, type FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { findDemoUser, roleDashboard, type Role } from "@/lib/demo-data";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    console.log("Form submitted");
    event.preventDefault();
    setError("");
    setIsPending(true);
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    // Validate credentials exist
    const demoUser = findDemoUser(email, password);
    if (!demoUser) {
      setIsPending(false);
      setError("Invalid demo credentials");
      return;
    }

    // Attempt sign in
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setIsPending(false);

    if (!result?.ok) {
      setError("Login failed. Please try again.");
      return;
    }

    // Navigate to role dashboard
    const redirectUrl = roleDashboard[demoUser.role as Role];
    router.push(redirectUrl);
  }

  return (
    <Card className="w-full max-w-md rounded-lg shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-[#0F2A4A]">
          Login to PropBD
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2">
            <Label>Email or demo ID</Label>
            <Input
              name="email"
              placeholder="user or user@propbd.com"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Password</Label>
            <Input name="password" placeholder="demo123" type="password" />
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <Button type="submit" className="bg-[#0A7EA4]" disabled={isPending}>
            {isPending ? "Logging in..." : "Login"}
          </Button>
        </form>
        <div className="mt-5 rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
          <p className="font-medium text-[#0F2A4A]">Demo accounts</p>
          <p>Use user, owner, agent, or admin - all password: demo123</p>
          <p className="mt-2">
            user@propbd.com, owner@propbd.com, agent@propbd.com,
            admin@propbd.com
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
