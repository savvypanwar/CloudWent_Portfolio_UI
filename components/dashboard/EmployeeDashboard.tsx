"use client";

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

export const EmployeeDashboard = () => {
  return (
    <div className="p-6 lg:p-8">
      {/* Welcome Banner */}
      <section className="mb-8 rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
              <UserCog className="h-3.5 w-3.5" />
              Employee Workspace
            </div>
            <h1 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-950 dark:text-white">
              Employee Dashboard
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
              Your personal work hub — tasks, projects, and announcements.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 px-4 py-3">
            <p className="text-xs text-gray-500 dark:text-gray-400">Signed in as</p>
            <p className="text-sm font-semibold text-gray-950 dark:text-white">Employee</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <DashboardStatCard
          label="My Tasks"
          value="8"
          note="3 due today"
          icon={<CheckCircle className="h-5 w-5" />}
          color="bg-blue-500"
        />
        <DashboardStatCard
          label="Messages"
          value="5"
          note="2 unread"
          icon={<MessageSquare className="h-5 w-5" />}
          color="bg-emerald-500"
        />
        <DashboardStatCard
          label="Assigned Projects"
          value="3"
          note="active"
          icon={<FolderKanban className="h-5 w-5" />}
          color="bg-violet-500"
        />
        <DashboardStatCard
          label="Profile"
          value="90%"
          note="almost complete"
          icon={<ShieldCheck className="h-5 w-5" />}
          color="bg-orange-500"
        />
      </section>

      {/* Actions + Focus */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <div>
              <h2 className="text-lg font-semibold text-gray-950 dark:text-white">Quick Actions</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manage your profile and projects.</p>
            </div>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/profile" className="rounded-xl border border-gray-200 dark:border-slate-800 p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-gray-50 dark:bg-slate-900 p-3 text-blue-600 dark:text-blue-300">
                <UserCog className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">Open Profile</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Update your personal information</p>
            </Link>
            <Link href="#" className="rounded-xl border border-gray-200 dark:border-slate-800 p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-gray-50 dark:bg-slate-900 p-3 text-blue-600 dark:text-blue-300">
                <FolderKanban className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">My Projects</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">View assigned project work</p>
            </Link>
            <Link href="#" className="rounded-xl border border-gray-200 dark:border-slate-800 p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-gray-50 dark:bg-slate-900 p-3 text-blue-600 dark:text-blue-300">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">Announcements</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Read company updates</p>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
          <h2 className="text-lg font-semibold text-gray-950 dark:text-white">Employee Priorities</h2>
          <div className="mt-5 space-y-3">
            {[
              { label: "Complete weekly update", meta: "Team sync", status: "Today" },
              { label: "Review project handoff notes", meta: "Client portal", status: "Open" },
              { label: "Finish profile skills section", meta: "Directory", status: "Soon" },
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