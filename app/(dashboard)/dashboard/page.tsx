"use client";

import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  UserCog,
  Server,
  FolderKanban,
  FileText,
  Briefcase,
  MessageSquare,
  Settings,
  Lock,
  Activity,
  Layers,
  CreditCard,
  Menu,
  Bell,
  Search,
  Calendar,
  ChevronDown,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Download,
  Cloud,
  Zap,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { useTheme } from "@/hooks/useTheme";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";

// --- Data ---
const statsData = [
  { title: "Total Visitors", value: "12.4K", change: "+18.2%", trend: "up", icon: <Cloud className="w-5 h-5 text-white" />, color: "bg-blue-500", period: "vs last 7 days" },
  { title: "New Inquiries", value: "84", change: "+22.5%", trend: "up", icon: <Zap className="w-5 h-5 text-white" />, color: "bg-emerald-500", period: "vs last 7 days" },
  { title: "Total Projects", value: "32", change: "-15.3%", trend: "down", icon: <FolderKanban className="w-5 h-5 text-white" />, color: "bg-purple-500", period: "vs last 7 days" },
  { title: "Active Clients", value: "24", change: "+12.1%", trend: "up", icon: <Users className="w-5 h-5 text-white" />, color: "bg-orange-500", period: "vs last 7 days" },
  { title: "Revenue (Est.)", value: "$48.2K", change: "+20.4%", trend: "up", icon: <CreditCard className="w-5 h-5 text-white" />, color: "bg-blue-600", period: "vs last 7 days" },
];

const lineChartData = [
  { name: "May 20", visitors: 4000, views: 2400, sessions: 2400 },
  { name: "May 21", visitors: 3000, views: 1398, sessions: 2210 },
  { name: "May 22", visitors: 2000, views: 9800, sessions: 2290 },
  { name: "May 23", visitors: 2780, views: 3908, sessions: 2000 },
  { name: "May 24", visitors: 1890, views: 4800, sessions: 2181 },
  { name: "May 25", visitors: 2390, views: 3800, sessions: 2500 },
  { name: "May 26", visitors: 3490, views: 4300, sessions: 2100 },
];

const pieChartData = [
  { name: "Web Development", value: 35, color: "#3b82f6" },
  { name: "Mobile Development", value: 25, color: "#a855f7" },
  { name: "Cloud & DevOps", value: 20, color: "#f59e0b" },
  { name: "AI & Automation", value: 12, color: "#10b981" },
  { name: "UI/UX Design", value: 8, color: "#ec4899" },
];

const recentActivity = [
  { id: 1, user: "John Doe", action: "new inquiry from", target: "Web Development", time: "2 minutes ago", type: "inquiry", icon: <MessageSquare className="w-4 h-4 text-emerald-600" /> },
  { id: 2, user: "EduSmart LMS", action: "new project", target: "added", time: "1 hour ago", type: "project", icon: <FolderKanban className="w-4 h-4 text-blue-600" /> },
  { id: 3, user: "Sarah Johnson", action: "applied for", target: "UI/UX Designer", time: "3 hours ago", type: "career", icon: <Briefcase className="w-4 h-4 text-purple-600" /> },
  { id: 4, user: "CloudWent", action: "new blog post", target: "Top 10 Cloud Trends", time: "5 hours ago", type: "blog", icon: <FileText className="w-4 h-4 text-orange-600" /> },
  { id: 5, user: "TechNova Inc.", action: "new testimonial from", target: "received", time: "1 day ago", type: "testimonial", icon: <MessageSquare className="w-4 h-4 text-pink-600" /> },
];

const quickActions = [
  { title: "Add New Project", desc: "Create a new case study", icon: <Plus className="w-5 h-5 text-blue-500" />, href: "#" },
  { title: "Add New Blog Post", desc: "Write & publish a blog", icon: <FileText className="w-5 h-5 text-purple-500" />, href: "#" },
  { title: "Add New Service", desc: "Create a new service", icon: <Server className="w-5 h-5 text-emerald-500" />, href: "#" },
  { title: "Add Team Member", desc: "Invite new team member", icon: <UserCog className="w-5 h-5 text-orange-500" />, href: "#" },
  { title: "View Inquiries", desc: "See all messages", icon: <MessageSquare className="w-5 h-5 text-pink-500" />, href: "#" },
];

const recentInquiries = [
  { id: 1, name: "John Doe", email: "john@example.com", subject: "Web Development", date: "May 26, 2024", status: "New", statusColor: "bg-blue-100 text-blue-700" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", subject: "Mobile App Development", date: "May 26, 2024", status: "In Progress", statusColor: "bg-yellow-100 text-yellow-700" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", subject: "Cloud Migration", date: "May 25, 2024", status: "Replied", statusColor: "bg-green-100 text-green-700" },
  { id: 4, name: "David Wilson", email: "david@example.com", subject: "AI/ML Solution", date: "May 25, 2024", status: "Closed", statusColor: "bg-gray-100 text-gray-700" },
  { id: 5, name: "Emily Davis", email: "emily@example.com", subject: "UI/UX Design", date: "May 24, 2024", status: "New", statusColor: "bg-blue-100 text-blue-700" },
];

// --- Components ---

const StatCard = ({ stat }: { stat: any }) => (
  <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-slate-800">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${stat.trend === "up" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
            {stat.change}
          </span>
          <span className="text-xs text-gray-400">{stat.period}</span>
        </div>
      </div>
      <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center shadow-lg shadow-blue-500/20`}>
        {stat.icon}
      </div>
    </div>
  </div>
);

export default function DashboardPage() {
  const { resolvedTheme } = useTheme();
  const strokeColor = resolvedTheme === "dark" ? "#1f2937" : "#e5e7eb";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B101B]">
      <Sidebar />
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search anything..." className="pl-9 pr-4 py-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"><Bell className="w-5 h-5" /></button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"><Clock className="w-5 h-5" /></button>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
              <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">May 20 - May 26, 2024</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, Uttam! 🎉</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Here's what's happening with CloudWent today.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {statsData.map((stat) => <StatCard key={stat.title} stat={stat} />)}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Website Analytics</h3>
                  <div className="flex items-center gap-3 mt-1 text-xs">
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400"><div className="w-2 h-2 rounded-full bg-blue-500" /> <span>Visitors</span></div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400"><div className="w-2 h-2 rounded-full bg-purple-500" /> <span>Page Views</span></div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400"><div className="w-2 h-2 rounded-full bg-emerald-500" /> <span>Sessions</span></div>
                  </div>
                </div>
                <button className="px-3 py-1.5 text-sm border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1">
                  Last 7 Days <ChevronDown className="w-3 h-3" />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%" initialDimension={{ width: 800, height: 256 }}>
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={strokeColor} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="visitors" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="views" stroke="#a855f7" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="sessions" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
                <Link href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View All</Link>
              </div>
              <div className="space-y-1">
                {recentActivity.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 py-3 border-b border-gray-100 dark:border-slate-800 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">{item.user}</span> {item.action} <span className="font-medium text-gray-900 dark:text-white">{item.target}</span></p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <div className="lg:col-span-1 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
                <Link href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View All</Link>
              </div>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  <Link key={action.title} href={action.href} className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 hover:shadow-md hover:border-blue-500 transition-all">
                    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-slate-800 flex items-center justify-center">{action.icon}</div><div><p className="text-sm font-semibold text-gray-900 dark:text-white">{action.title}</p><p className="text-xs text-gray-500 dark:text-gray-400">{action.desc}</p></div></div>
                    <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Recent Inquiries</h3>
                <Link href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View All</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead><tr className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"><th className="px-4 py-3">Name</th><th className="px-4 py-3">Email</th><th className="px-4 py-3">Subject</th><th className="px-4 py-3">Date</th><th className="px-4 py-3">Status</th><th className="px-4 py-3 text-right">Action</th></tr></thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    {recentInquiries.map((inquiry) => (
                      <tr key={inquiry.id} className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{inquiry.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{inquiry.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{inquiry.subject}</td>
                        <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{inquiry.date}</td>
                        <td className="px-4 py-3"><span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${inquiry.statusColor}`}>{inquiry.status}</span></td>
                        <td className="px-4 py-3 text-right"><button className="text-gray-400 hover:text-blue-600 transition-colors"><MoreHorizontal className="w-4 h-4" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Top Services</h3>
                <Link href="#" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View All</Link>
              </div>
              <div className="h-64 flex flex-col items-center justify-center">
                <ResponsiveContainer width="100%" height="100%" initialDimension={{ width: 260, height: 256 }}>
                  <PieChart>
                    <Pie data={pieChartData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={2} dataKey="value">
                      {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-center -mt-8"><p className="text-2xl font-bold text-gray-900 dark:text-white">128</p><p className="text-xs text-gray-500 dark:text-gray-400">Total Projects</p></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
