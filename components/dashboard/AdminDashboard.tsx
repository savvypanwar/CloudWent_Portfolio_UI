"use client";

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

export const AdminDashboard = () => {
  return (
    <div className="p-6 lg:p-8">
      {/* Welcome Banner */}
      <section className="mb-8 rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
              <Users className="h-3.5 w-3.5" />
              Admin Control Center
            </div>
            <h1 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-950 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
              Manage the full CloudWent workspace — users, content, hiring, and settings.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 px-4 py-3">
            <p className="text-xs text-gray-500 dark:text-gray-400">Signed in as</p>
            <p className="text-sm font-semibold text-gray-950 dark:text-white">Admin</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <DashboardStatCard
          label="Total Users"
          value="24"
          note="3 roles active"
          icon={<Users className="h-5 w-5" />}
          color="bg-blue-500"
        />
        <DashboardStatCard
          label="Open Leads"
          value="18"
          note="6 need review"
          icon={<MessageSquare className="h-5 w-5" />}
          color="bg-emerald-500"
        />
        <DashboardStatCard
          label="Projects"
          value="32"
          note="8 in progress"
          icon={<FolderKanban className="h-5 w-5" />}
          color="bg-violet-500"
        />
        <DashboardStatCard
          label="System Health"
          value="99.9%"
          note="stable"
          icon={<Activity className="h-5 w-5" />}
          color="bg-cyan-500"
        />
      </section>

      {/* Actions + Focus */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <div>
              <h2 className="text-lg font-semibold text-gray-950 dark:text-white">Quick Actions</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manage users, settings, and more.</p>
            </div>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/users" className="rounded-xl border border-gray-200 dark:border-slate-800 p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-gray-50 dark:bg-slate-900 p-3 text-blue-600 dark:text-blue-300">
                <UserCog className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">Manage Users</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Create users and review permissions</p>
            </Link>
            <Link href="/applications" className="rounded-xl border border-gray-200 dark:border-slate-800 p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-gray-50 dark:bg-slate-900 p-3 text-blue-600 dark:text-blue-300">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">Review Applications</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">See all job applications</p>
            </Link>
            <Link href="#" className="rounded-xl border border-gray-200 dark:border-slate-800 p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-gray-50 dark:bg-slate-900 p-3 text-blue-600 dark:text-blue-300">
                <Settings className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">Website Settings</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Update global business settings</p>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
          <h2 className="text-lg font-semibold text-gray-950 dark:text-white">Admin Priorities</h2>
          <div className="mt-5 space-y-3">
            {[
              { label: "Approve new HR access", meta: "Security queue", status: "Pending" },
              { label: "Publish June case study", meta: "Portfolio", status: "Ready" },
              { label: "Review analytics report", meta: "Traffic summary", status: "Today" },
            ].map((item) => (
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
    </div>
  );
};