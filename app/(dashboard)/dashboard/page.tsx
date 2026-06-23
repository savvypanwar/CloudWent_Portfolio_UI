import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import {
  Activity,
  BarChart3,
  Briefcase,
  CheckCircle,
  Clock,
  FileText,
  FolderKanban,
  MessageSquare,
  Settings,
  ShieldCheck,
  UserCog,
  Users,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

type DashboardRole = "admin" | "hr" | "employee";

type DashboardConfig = {
  eyebrow: string;
  title: string;
  description: string;
  stats: { label: string; value: string; note: string; icon: React.ReactNode; color: string }[];
  actions: { label: string; description: string; href: string; icon: React.ReactNode }[];
  focus: { title: string; items: { label: string; meta: string; status: string }[] };
};

const roleLabels: Record<DashboardRole, string> = {
  admin: "Admin",
  hr: "HR",
  employee: "Employee",
};

const dashboards: Record<DashboardRole, DashboardConfig> = {
  admin: {
    eyebrow: "Admin Control Center",
    title: "Manage the full CloudWent workspace",
    description: "Track site activity, users, content, hiring, and operational settings from one place.",
    stats: [
      { label: "Total Users", value: "24", note: "3 roles active", icon: <Users className="h-5 w-5" />, color: "bg-blue-500" },
      { label: "Open Leads", value: "18", note: "6 need review", icon: <MessageSquare className="h-5 w-5" />, color: "bg-emerald-500" },
      { label: "Projects", value: "32", note: "8 in progress", icon: <FolderKanban className="h-5 w-5" />, color: "bg-violet-500" },
      { label: "System Health", value: "99.9%", note: "stable", icon: <Activity className="h-5 w-5" />, color: "bg-cyan-500" },
    ],
    actions: [
      { label: "Manage Users", description: "Create users and review permissions", href: "/users", icon: <UserCog className="h-5 w-5" /> },
      { label: "Review Applications", description: "See all job applications", href: "/applications", icon: <Briefcase className="h-5 w-5" /> },
      { label: "Website Settings", description: "Update global business settings", href: "#", icon: <Settings className="h-5 w-5" /> },
    ],
    focus: {
      title: "Admin Priorities",
      items: [
        { label: "Approve new HR access", meta: "Security queue", status: "Pending" },
        { label: "Publish June case study", meta: "Portfolio", status: "Ready" },
        { label: "Review analytics report", meta: "Traffic summary", status: "Today" },
      ],
    },
  },
  hr: {
    eyebrow: "HR Hiring Desk",
    title: "Review candidates and hiring activity",
    description: "Focus on job applications, candidate status, interviews, and team growth.",
    stats: [
      { label: "Applications", value: "42", note: "12 new this week", icon: <Briefcase className="h-5 w-5" />, color: "bg-emerald-500" },
      { label: "Interviews", value: "7", note: "scheduled", icon: <Clock className="h-5 w-5" />, color: "bg-amber-500" },
      { label: "Shortlisted", value: "9", note: "awaiting feedback", icon: <CheckCircle className="h-5 w-5" />, color: "bg-blue-500" },
      { label: "Open Roles", value: "5", note: "active careers", icon: <FileText className="h-5 w-5" />, color: "bg-pink-500" },
    ],
    actions: [
      { label: "View Applications", description: "Screen candidate submissions", href: "/applications", icon: <Briefcase className="h-5 w-5" /> },
      { label: "Careers Content", description: "Update open roles and hiring copy", href: "#", icon: <FileText className="h-5 w-5" /> },
      { label: "Team Directory", description: "Review employee profiles", href: "#", icon: <Users className="h-5 w-5" /> },
    ],
    focus: {
      title: "HR Priorities",
      items: [
        { label: "Screen UI/UX Designer applicants", meta: "12 profiles", status: "New" },
        { label: "Send interview slots", meta: "Engineering candidates", status: "Today" },
        { label: "Update remote policy note", meta: "Careers page", status: "Draft" },
      ],
    },
  },
  employee: {
    eyebrow: "Employee Workspace",
    title: "Your CloudWent work hub",
    description: "See personal tasks, profile details, announcements, and the work that needs your attention.",
    stats: [
      { label: "My Tasks", value: "8", note: "3 due today", icon: <CheckCircle className="h-5 w-5" />, color: "bg-blue-500" },
      { label: "Messages", value: "5", note: "2 unread", icon: <MessageSquare className="h-5 w-5" />, color: "bg-emerald-500" },
      { label: "Assigned Projects", value: "3", note: "active", icon: <FolderKanban className="h-5 w-5" />, color: "bg-violet-500" },
      { label: "Profile", value: "90%", note: "almost complete", icon: <ShieldCheck className="h-5 w-5" />, color: "bg-orange-500" },
    ],
    actions: [
      { label: "Open Profile", description: "Update your personal information", href: "/profile", icon: <UserCog className="h-5 w-5" /> },
      { label: "My Projects", description: "View assigned project work", href: "#", icon: <FolderKanban className="h-5 w-5" /> },
      { label: "Announcements", description: "Read company updates", href: "#", icon: <MessageSquare className="h-5 w-5" /> },
    ],
    focus: {
      title: "Employee Priorities",
      items: [
        { label: "Complete weekly update", meta: "Team sync", status: "Today" },
        { label: "Review project handoff notes", meta: "Client portal", status: "Open" },
        { label: "Finish profile skills section", meta: "Directory", status: "Soon" },
      ],
    },
  },
};

const normalizeRole = (role?: string | null): DashboardRole => {
  if (role === "admin" || role === "hr" || role === "employee") return role;
  return "employee";
};

export async function RoleDashboardPage({
  roleOverride,
}: {
  roleOverride?: DashboardRole;
} = {}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  const role = roleOverride ?? normalizeRole(session.user.role);
  const dashboard = dashboards[role];
  const name = session.user.name ?? "there";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B101B]">
      <Sidebar name={name} role={role} />
      <div className="lg:ml-64">
        <main className="p-6 lg:p-8">
          <section className="mb-8 rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {dashboard.eyebrow}
                </div>
                <h1 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-950 dark:text-white">
                  Welcome, {name}
                </h1>
                <p className="mt-2 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
                  {dashboard.title}. {dashboard.description}
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-slate-800 px-4 py-3">
                <p className="text-xs text-gray-500 dark:text-gray-400">Signed in as</p>
                <p className="text-sm font-semibold text-gray-950 dark:text-white">{roleLabels[role]}</p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {dashboard.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <p className="mt-2 text-2xl font-bold text-gray-950 dark:text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{stat.note}</p>
                  </div>
                  <div className={`${stat.color} text-white rounded-xl p-3`}>{stat.icon}</div>
                </div>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
              <div className="flex items-center justify-between gap-3 mb-5">
                <div>
                  <h2 className="text-lg font-semibold text-gray-950 dark:text-white">Quick Actions</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Role-specific shortcuts for your work.</p>
                </div>
                <BarChart3 className="h-5 w-5 text-gray-400" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dashboard.actions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="rounded-xl border border-gray-200 dark:border-slate-800 p-4 hover:border-blue-400 hover:shadow-sm transition-all"
                  >
                    <div className="mb-4 inline-flex rounded-lg bg-gray-50 dark:bg-slate-900 p-3 text-blue-600 dark:text-blue-300">
                      {action.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-950 dark:text-white">{action.label}</h3>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{action.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
              <h2 className="text-lg font-semibold text-gray-950 dark:text-white">{dashboard.focus.title}</h2>
              <div className="mt-5 space-y-3">
                {dashboard.focus.items.map((item) => (
                  <div key={item.label} className="rounded-xl bg-gray-50 dark:bg-slate-900 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-gray-950 dark:text-white">{item.label}</p>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.meta}</p>
                      </div>
                      <span className="rounded-full bg-white dark:bg-slate-950 px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default async function DashboardPage() {
  return <RoleDashboardPage />;
}
