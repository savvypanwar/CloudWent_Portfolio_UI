"use client";

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

export const HRDashboard = () => {
  return (
    <div className="p-6 lg:p-8">
      {/* Welcome Banner */}
      <section className="mb-8 rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/40 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
              <Users className="h-3.5 w-3.5" />
              HR Hiring Desk
            </div>
            <h1 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-950 dark:text-white">
              HR Dashboard
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
              Review candidates and hiring activity — applications, interviews, and team growth.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 px-4 py-3">
            <p className="text-xs text-gray-500 dark:text-gray-400">Signed in as</p>
            <p className="text-sm font-semibold text-gray-950 dark:text-white">HR</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <DashboardStatCard
          label="Applications"
          value="42"
          note="12 new this week"
          icon={<Briefcase className="h-5 w-5" />}
          color="bg-emerald-500"
        />
        <DashboardStatCard
          label="Interviews"
          value="7"
          note="scheduled"
          icon={<Clock className="h-5 w-5" />}
          color="bg-amber-500"
        />
        <DashboardStatCard
          label="Shortlisted"
          value="9"
          note="awaiting feedback"
          icon={<CheckCircle className="h-5 w-5" />}
          color="bg-blue-500"
        />
        <DashboardStatCard
          label="Open Roles"
          value="5"
          note="active careers"
          icon={<FileText className="h-5 w-5" />}
          color="bg-pink-500"
        />
      </section>

      {/* Actions + Focus */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <div>
              <h2 className="text-lg font-semibold text-gray-950 dark:text-white">Quick Actions</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manage hiring and team.</p>
            </div>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/applications" className="rounded-xl border border-gray-200 dark:border-slate-800 p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-gray-50 dark:bg-slate-900 p-3 text-blue-600 dark:text-blue-300">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">View Applications</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Screen candidate submissions</p>
            </Link>
            <Link href="#" className="rounded-xl border border-gray-200 dark:border-slate-800 p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-gray-50 dark:bg-slate-900 p-3 text-blue-600 dark:text-blue-300">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">Careers Content</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Update open roles and hiring copy</p>
            </Link>
            <Link href="#" className="rounded-xl border border-gray-200 dark:border-slate-800 p-4 hover:border-blue-400 hover:shadow-sm transition-all">
              <div className="mb-4 inline-flex rounded-lg bg-gray-50 dark:bg-slate-900 p-3 text-blue-600 dark:text-blue-300">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">Team Directory</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Review employee profiles</p>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-6">
          <h2 className="text-lg font-semibold text-gray-950 dark:text-white">HR Priorities</h2>
          <div className="mt-5 space-y-3">
            {[
              { label: "Screen UI/UX Designer applicants", meta: "12 profiles", status: "New" },
              { label: "Send interview slots", meta: "Engineering candidates", status: "Today" },
              { label: "Update remote policy note", meta: "Careers page", status: "Draft" },
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