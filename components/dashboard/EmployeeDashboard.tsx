import Link from "next/link";
import {
  BarChart3,
  CheckCircle,
  FolderKanban,
  MessageSquare,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { prisma } from "@/lib/prisma/prisma";

export const EmployeeDashboard = async () => {
  const [projectCount, blogCount, serviceCount] = await Promise.all([
    prisma.project.count(),
    prisma.blogPost.count(),
    prisma.service.count(),
  ]);

  const stats = [
    { label: "My Tasks", value: "—", note: "3 due today", icon: <CheckCircle className="h-5 w-5" />, color: "bg-blue-500" },
    { label: "Messages", value: "—", note: "2 unread", icon: <MessageSquare className="h-5 w-5" />, color: "bg-emerald-500" },
    { label: "Assigned Projects", value: String(projectCount), note: "active", icon: <FolderKanban className="h-5 w-5" />, color: "bg-violet-500" },
    { label: "Profile", value: "90%", note: "almost complete", icon: <ShieldCheck className="h-5 w-5" />, color: "bg-orange-500" },
  ];

  return (
    <div className="p-6 lg:p-8">
      <section className="mb-8 rounded-2xl bg-background border border-border p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-primary">
              <UserCog className="h-3.5 w-3.5" />
              Employee Workspace
            </div>
            <h1 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-950 dark:text-primary-foreground">
              Employee Dashboard
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Your personal work hub — tasks, projects, and announcements.
            </p>
          </div>
          <div className="rounded-xl border border-border px-4 py-3">
            <p className="text-xs text-muted-foreground">Signed in as</p>
            <p className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">Employee</p>
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
              <p className="text-sm text-muted-foreground">Manage your profile and projects.</p>
            </div>
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/profile" className="rounded-xl border border-border p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-surface p-3 text-primary">
                <UserCog className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">Open Profile</h3>
              <p className="mt-1 text-xs text-muted-foreground">Update your personal information</p>
            </Link>
            <Link href="/portfolio" className="rounded-xl border border-border p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-surface p-3 text-primary">
                <FolderKanban className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">My Projects</h3>
              <p className="mt-1 text-xs text-muted-foreground">View assigned project work</p>
            </Link>
            <Link href="/blog" className="rounded-xl border border-border p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-surface p-3 text-primary">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-primary-foreground">Announcements</h3>
              <p className="mt-1 text-xs text-muted-foreground">Read company updates</p>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-background border border-border p-6">
          <h2 className="text-lg font-semibold text-gray-950 dark:text-primary-foreground">Employee Priorities</h2>
          <div className="mt-5 space-y-3">
            {[
              { label: "Complete weekly update", meta: "Team sync", status: "Today" },
              { label: "Review project handoff notes", meta: "Client portal", status: "Open" },
              { label: "Finish profile skills section", meta: "Directory", status: "Soon" },
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
