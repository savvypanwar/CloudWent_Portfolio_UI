"use client";

import Link from "next/link";
import {
  Search,
  Bell,
  RefreshCw,
  ChevronDown,
  Plus,
  Download,
  Filter,
  MoreVertical,
  Users,
  UserCheck,
  UserX,
  ShieldCheck,
  LayoutDashboard,
  Settings,
  Lock,
  Server,
  FolderKanban,
  FileText,
  Briefcase,
  MessageSquare,
  Layers,
  Calendar,
  Activity,
  CreditCard,
  Menu,
} from "lucide-react";
import { usePathname } from "next/navigation";

// --- Mock Data ---
const statsData = [
  {
    label: "Total Users",
    count: 128,
    change: "+12.5%",
    trend: "up",
    icon: Users,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    label: "Active Users",
    count: 98,
    change: "+8.4%",
    trend: "up",
    icon: UserCheck,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    label: "Inactive Users",
    count: 24,
    change: "-4.2%",
    trend: "down",
    icon: UserX,
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    label: "Administrators",
    count: 12,
    change: "+3.8%",
    trend: "up",
    icon: ShieldCheck,
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

const usersData = [
  {
    id: 1,
    name: "Uttam Singh",
    handle: "@uttamsingh",
    email: "uttam@cloudwent.com",
    role: "Super Admin",
    roleColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    status: "Active",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    statusDotColor: "bg-green-500",
    joined: "May 20, 2024",
    lastLogin: "May 26, 2024 10:30 AM",
    initials: "US",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    handle: "@sarahjohnson",
    email: "sarah@cloudwent.com",
    role: "Author",
    roleColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    status: "Active",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    statusDotColor: "bg-green-500",
    joined: "May 21, 2024",
    lastLogin: "May 26, 2024 09:15 AM",
    initials: "SJ",
  },
  {
    id: 3,
    name: "Michael Brown",
    handle: "@michaelbrown",
    email: "michael@cloudwent.com",
    role: "Author",
    roleColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    status: "Active",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    statusDotColor: "bg-green-500",
    joined: "May 22, 2024",
    lastLogin: "May 26, 2024 11:45 AM",
    initials: "MB",
  },
  {
    id: 4,
    name: "Emily Davis",
    handle: "@emilydavis",
    email: "emily@cloudwent.com",
    role: "Author",
    roleColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    status: "Inactive",
    statusColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    statusDotColor: "bg-red-500",
    joined: "May 23, 2024",
    lastLogin: "May 20, 2024 04:20 PM",
    initials: "ED",
  },
  {
    id: 5,
    name: "David Wilson",
    handle: "@davidwilson",
    email: "david@cloudwent.com",
    role: "Editor",
    roleColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
    status: "Active",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    statusDotColor: "bg-green-500",
    joined: "May 24, 2024",
    lastLogin: "May 26, 2024 08:50 AM",
    initials: "DW",
  },
  {
    id: 6,
    name: "Jessica Taylor",
    handle: "@jessicataylor",
    email: "jessica@cloudwent.com",
    role: "Subscriber",
    roleColor: "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400",
    status: "Active",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    statusDotColor: "bg-green-500",
    joined: "May 24, 2024",
    lastLogin: "May 25, 2024 07:10 PM",
    initials: "JT",
  },
  {
    id: 7,
    name: "Daniel Martinez",
    handle: "@danielmartinez",
    email: "daniel@cloudwent.com",
    role: "Subscriber",
    roleColor: "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400",
    status: "Inactive",
    statusColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    statusDotColor: "bg-red-500",
    joined: "May 25, 2024",
    lastLogin: "May 18, 2024 02:30 PM",
    initials: "DM",
  },
  {
    id: 8,
    name: "Olivia Anderson",
    handle: "@oliviaanderson",
    email: "olivia@cloudwent.com",
    role: "Author",
    roleColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    status: "Active",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    statusDotColor: "bg-green-500",
    joined: "May 25, 2024",
    lastLogin: "May 26, 2024 12:00 PM",
    initials: "OA",
  },
];

// --- Sidebar Component ---
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800 z-50 overflow-y-auto hidden lg:block [&::-webkit-scrollbar]:hidden">
      <div className="p-6 border-b border-gray-200 dark:border-slate-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">CLOUDWENT</span>
        </Link>
      </div>

      <nav className="p-4 space-y-6">
        <div>
          <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Main</div>
          <div className="mt-2 space-y-1">
            <Link href="/dashboard" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${pathname === "/dashboard" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"}`}>
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </Link>
            <Link href="/users" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${pathname === "/users" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"}`}>
              <Users className="w-4 h-4" /> Users
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white">
              <UserCheck className="w-4 h-4" /> Team Members
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white">
              <Server className="w-4 h-4" /> Services
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white">
              <FolderKanban className="w-4 h-4" /> Projects
            </Link>
          </div>
        </div>

        <div>
          <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Settings</div>
          <div className="mt-2 space-y-1">
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white">
              <Settings className="w-4 h-4" /> Website Settings
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white">
              <Lock className="w-4 h-4" /> SEO Settings
            </Link>
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-slate-800 mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            US
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Uttam Singh</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Super Admin</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </aside>
  );
};

// --- Main Page ---
export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B101B]">
      <Sidebar />
      
      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-600 dark:text-gray-400"><Menu className="w-6 h-6" /></button>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search anything..." className="pl-9 pr-4 py-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"><Bell className="w-5 h-5" /></button>
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700">
              <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-8 h-8 rounded-full" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Users</h1>
              <nav className="text-sm text-gray-500 dark:text-gray-400">
                Dashboard &gt; Users
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 border border-gray-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <Download className="w-4 h-4" /> Export
              </button>
              <button className="flex items-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                <Plus className="w-4 h-4" /> Add New User
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {statsData.map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.count}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${stat.trend === "up" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-gray-400">from last month</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Filters */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm p-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search users by name, email or role..." className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative w-full md:w-auto">
                  <select className="appearance-none bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8 w-full">
                    <option>All Roles</option>
                    <option>Super Admin</option>
                    <option>Author</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <div className="relative w-full md:w-auto">
                  <select className="appearance-none bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8 w-full">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm px-3 py-2">
                  <Filter className="w-4 h-4" /> Filter
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600"><RefreshCw className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
                  <tr>
                    <th className="w-10 p-4"><input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" /></th>
                    <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider p-4">User</th>
                    <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider p-4">Email</th>
                    <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider p-4">Role</th>
                    <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider p-4">Status</th>
                    <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider p-4">Joined On</th>
                    <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider p-4">Last Login</th>
                    <th className="w-10 p-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                  {usersData.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors">
                      <td className="p-4 text-center"><input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" /></td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{user.initials}</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{user.handle}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-gray-500 dark:text-gray-400">{user.email}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.roleColor}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${user.statusColor}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${user.statusDotColor}`}></span>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-500 dark:text-gray-400">{user.joined}</td>
                      <td className="p-4 text-sm text-gray-500 dark:text-gray-400">{user.lastLogin}</td>
                      <td className="p-4 text-center">
                        <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">Showing 1 to 8 of 128 users</div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 border border-gray-200 dark:border-slate-700 rounded hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm disabled:opacity-50">Previous</button>
                <button className="px-3 py-1 border border-gray-200 dark:border-slate-700 rounded bg-blue-600 text-white text-sm">1</button>
                <button className="px-3 py-1 border border-gray-200 dark:border-slate-700 rounded hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">2</button>
                <button className="px-3 py-1 border border-gray-200 dark:border-slate-700 rounded hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">3</button>
                <span className="text-gray-400">...</span>
                <button className="px-3 py-1 border border-gray-200 dark:border-slate-700 rounded hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">16</button>
                <button className="px-3 py-1 border border-gray-200 dark:border-slate-700 rounded hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}