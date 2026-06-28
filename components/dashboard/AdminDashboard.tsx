import Link from "next/link";
import {
  Activity,
  BarChart3,
  Briefcase,
  FolderKanban,
  MessageSquare,
  Settings,
  UserCog,
  Users,
} from "lucide-react";
import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { prisma } from "@/lib/prisma/prisma";

export const AdminDashboard = async () => {
  const [userCount, contactCount, projectCount, appCount] = await Promise.all([
    prisma.user.count(),
    prisma.contact.count(),
    prisma.project.count(),
    prisma.application.count(),
  ]);

  const stats = [
    { label: "Total Users", value: String(userCount), note: "registered accounts", icon: <Users className="h-5 w-5" />, color: "bg-blue-500" },
    { label: "Open Leads", value: String(contactCount), note: "contact inquiries", icon: <MessageSquare className="h-5 w-5" />, color: "bg-emerald-500" },
    { label: "Projects", value: String(projectCount), note: "in portfolio", icon: <FolderKanban className="h-5 w-5" />, color: "bg-violet-500" },
    { label: "Applications", value: String(appCount), note: "job submissions", icon: <Briefcase className="h-5 w-5" />, color: "bg-cyan-500" },
  ];

  return (
    <div className="p-6 lg:p-8">
      <section className="mb-8 rounded-2xl bg-background border border-border p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-primary">
              <Users className="h-3.5 w-3.5" />
              Admin Control Center
            </div>
            <h1 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-950 dark:text-primary-foreground">
              Admin Dashboard
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Manage the full CloudWent workspace — users, content, hiring, and settings.
            </p>
          </div>
          <div className="rounded-xl border border-border px-4 py-3">
            <p className="text-xs text-muted-foreground">Signed in as</p>
            <p className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">Admin</p>
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
              <p className="text-sm text-muted-foreground">Manage users, settings, and more.</p>
            </div>
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/users" className="rounded-xl border border-border p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-surface p-3 text-primary">
                <UserCog className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">Manage Users</h3>
              <p className="mt-1 text-xs text-muted-foreground">Create users and review permissions</p>
            </Link>
            <Link href="/applications" className="rounded-xl border border-border p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-surface p-3 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">Review Applications</h3>
              <p className="mt-1 text-xs text-muted-foreground">See all job applications</p>
            </Link>
            <Link href="/services" className="rounded-xl border border-border p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-surface p-3 text-primary">
                <Settings className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">Website Services</h3>
              <p className="mt-1 text-xs text-muted-foreground">Update services and offerings</p>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-background border border-border p-6">
          <h2 className="text-lg font-semibold text-gray-950 dark:text-primary-foreground">Admin Priorities</h2>
          <div className="mt-5 space-y-3">
            {[
              { label: "Review new applications", meta: "Hiring queue", status: "Pending" },
              { label: "Check contact inquiries", meta: "Leads", status: "Today" },
              { label: "Update portfolio projects", meta: "Content", status: "Ready" },
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
