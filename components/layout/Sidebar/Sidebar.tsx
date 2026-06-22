"use client";

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
  Cloud,
  Calendar,
  ChevronDown,
} from "lucide-react";

export const Sidebar = () => {
  const menuItems = [
    {
      section: "Main",
      items: [{ icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" }],
    },
    {
      section: "Management",
      items: [
        { icon: Users, label: "Users", href: "/users" },
        { icon: Briefcase, label: "Applications", href: "/applications" },
        { icon: UserCog, label: "Team Members", href: "#" },
        { icon: Server, label: "Services", href: "#" },
        { icon: FolderKanban, label: "Projects", href: "#" },
        { icon: FileText, label: "Blog Posts", href: "#" },
        { icon: Briefcase, label: "Careers", href: "#" },
        { icon: MessageSquare, label: "Testimonials", href: "#" },
        { icon: Layers, label: "Technologies", href: "#" },
        { icon: Calendar, label: "Contact Inquiries", href: "#" },
        { icon: Activity, label: "Newsletter", href: "#" },
      ],
    },
    {
      section: "Settings",
      items: [
        { icon: Settings, label: "Website Settings", href: "#" },
        { icon: Lock, label: "SEO Settings", href: "#" },
        { icon: Activity, label: "Analytics", href: "#" },
        { icon: Layers, label: "Roles & Permissions", href: "#" },
        { icon: Activity, label: "Activity Logs", href: "#" },
        { icon: CreditCard, label: "Backups", href: "#" },
      ],
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800 z-50 overflow-y-auto hidden lg:block [&::-webkit-scrollbar]:hidden">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-slate-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <Cloud className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">CLOUDWENT</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-6">
        {menuItems.map((group) => (
          <div key={group.section}>
            <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {group.section}
            </div>
            <div className="space-y-1 mt-2">
              {group.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    item.label === "Dashboard"
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* User Profile */}
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