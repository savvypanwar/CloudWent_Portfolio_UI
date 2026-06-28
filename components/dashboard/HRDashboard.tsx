import Link from "next/link";
import {
  BarChart3,
  Briefcase,
  CheckCircle,
  Clock,
  FileText,
  Users,
} from "lucide-react";
import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { prisma } from "@/lib/prisma/prisma";

export const HRDashboard = async () => {
  const [appCount, interviewCount, shortlistedCount, openRolesCount] = await Promise.all([
    prisma.application.count(),
    prisma.application.count({ where: { status: "interview" } }),
    prisma.application.count({ where: { status: "reviewed" } }),
    prisma.jobOpening.count({ where: { status: "PUBLISHED" } }),
  ]);

  const stats = [
    { label: "Applications", value: String(appCount), note: "total submissions", icon: <Briefcase className="h-5 w-5" />, color: "bg-emerald-500" },
    { label: "Interviews", value: String(interviewCount), note: "scheduled", icon: <Clock className="h-5 w-5" />, color: "bg-amber-500" },
    { label: "Shortlisted", value: String(shortlistedCount), note: "awaiting feedback", icon: <CheckCircle className="h-5 w-5" />, color: "bg-blue-500" },
    { label: "Open Roles", value: String(openRolesCount), note: "active careers", icon: <FileText className="h-5 w-5" />, color: "bg-pink-500" },
  ];

  return (
    <div className="p-6 lg:p-8">
      <section className="mb-8 rounded-2xl bg-background border border-border p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-primary">
              <Users className="h-3.5 w-3.5" />
              HR Hiring Desk
            </div>
            <h1 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-950 dark:text-primary-foreground">
              HR Dashboard
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Review candidates and hiring activity — applications, interviews, and team growth.
            </p>
          </div>
          <div className="rounded-xl border border-border px-4 py-3">
            <p className="text-xs text-muted-foreground">Signed in as</p>
            <p className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">HR</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <DashboardStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            note={stat.note}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 rounded-2xl bg-background border border-border p-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <div>
              <h2 className="text-lg font-semibold text-gray-950 dark:text-primary-foreground">Quick Actions</h2>
              <p className="text-sm text-muted-foreground">Manage hiring and team.</p>
            </div>
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/applications" className="rounded-xl border border-border p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-surface p-3 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">View Applications</h3>
              <p className="mt-1 text-xs text-muted-foreground">Screen candidate submissions</p>
            </Link>
            <Link href="/careers" className="rounded-xl border border-border p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-surface p-3 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">Careers Content</h3>
              <p className="mt-1 text-xs text-muted-foreground">Update open roles and hiring copy</p>
            </Link>
            <Link href="/myteam" className="rounded-xl border border-border p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-surface p-3 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">Team Directory</h3>
              <p className="mt-1 text-xs text-muted-foreground">Review employee profiles</p>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-background border border-border p-6">
          <h2 className="text-lg font-semibold text-gray-950 dark:text-primary-foreground">HR Priorities</h2>
          <div className="mt-5 space-y-3">
            {[
              { label: "Screen pending applications", meta: "Hiring queue", status: "New" },
              { label: "Update open job listings", meta: "Careers page", status: "Today" },
              { label: "Review team directory", meta: "Team management", status: "Draft" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-surface p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-gray-950 dark:text-primary-foreground">{item.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.meta}</p>
                  </div>
                  <span className="rounded-full bg-background px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-primary">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
