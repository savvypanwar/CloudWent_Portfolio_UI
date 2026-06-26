"use client";

import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";

type DashboardFormShellProps = {
  backHref: string;
  backLabel?: string;
  title: string;
  loading?: boolean;
  children: React.ReactNode;
};

export function DashboardFormShell({
  backHref,
  backLabel = "Back",
  title,
  loading,
  children,
}: DashboardFormShellProps) {
  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> {backLabel}
        </Link>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      </div>
      {children}
    </div>
  );
}

export const dashboardInputClass = "border-border bg-surface";
export const dashboardSelectClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all";
export const dashboardTextareaClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y";

export function parseCommaList(value: string): string[] {
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function joinCommaList(arr: string[] | undefined | null): string {
  return arr?.join(", ") ?? "";
}
