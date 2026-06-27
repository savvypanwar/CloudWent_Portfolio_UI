"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // ✅ Router import kiya
import { logout } from "@/app/actions/auth"; // ✅ Logout action import kiya

import Logo from "@/components/common/Logo/Logo";
import {
  LayoutDashboard,
  ShieldCheck,
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
  BarChart3,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

type SidebarRole = "admin" | "hr" | "employee";

type SidebarProps = {
  name?: string | null;
  role?: SidebarRole;
};

const roleLabels: Record<SidebarRole, string> = {
  admin: "Admin",
  hr: "HR",
  employee: "Employee",
};

const getInitials = (name?: string | null) => {
  if (!name) return "CW";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
};

export const Sidebar = ({ name = "CloudWent User", role = "admin" }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const initials = getInitials(name);

  // ✅ Logout handler
  const handleLogout = async () => {
    // 1. Client-side storage clear karo (safe fallback)
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      localStorage.removeItem("authUser");
    }

    // 2. Server-side cookie clear karo aur redirect karo
    await logout();
  };

  // Role ke hisaab se menu items
  const menuItems =
    role === "admin"
      ? [
          {
            section: "Main",
            items: [{ icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" }],
          },
          {
            section: "Management",
            items: [
              { icon: Users, label: "Users", href: "/users" },
              { icon: Briefcase, label: "Applications", href: "/applications" },
              { icon: UserCog, label: "Team Members", href: "/myteam" },
              { icon: Server, label: "Services", href: "/allservices" },
              { icon: FolderKanban, label: "Projects", href: "/portfolio" },
              { icon: FileText, label: "Blog Posts", href: "/addblog" },
              { icon: Briefcase, label: "Careers", href: "/careersapplications" },
              { icon: MessageSquare, label: "Testimonials", href: "/testimonials" },
              { icon: Layers, label: "Technologies", href: "/technologies" },
              { icon: Calendar, label: "Contact Inquiries", href: "/leads" },
              { icon: Activity, label: "Newsletter", href: "/newsletter" },
            ],
          },
          {
            section: "Settings",
            items: [
              { icon: Settings, label: "Website Settings", href: "/website-settings" },
              { icon: Lock, label: "SEO Settings", href: "/seo-settings" },
              { icon: BarChart3, label: "Analytics", href: "/analytics" },
              { icon: ShieldCheck, label: "Roles & Permissions", href: "/roles-permissions" },
              { icon: Activity, label: "Activity Logs", href: "/activity-logs" },
              { icon: CreditCard, label: "Backups", href: "/backups" },
            ],
          },
        ]
      : role === "hr"
      ? [
          {
            section: "Main",
            items: [{ icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" }],
          },
          {
            section: "Hiring",
            items: [
              { icon: Briefcase, label: "Applications", href: "/applications" },
              { icon: FileText, label: "Careers", href: "/careersapplications" },
              { icon: Users, label: "Team Directory", href: "/myteam" },
            ],
          },
          {
            section: "Tools",
            items: [
              { icon: Calendar, label: "Interview Calendar", href: "#" },
              { icon: Activity, label: "Hiring Reports", href: "#" },
            ],
          },
        ]
      : [
          {
            section: "Main",
            items: [{ icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" }],
          },
          {
            section: "Workspace",
            items: [
              { icon: UserCog, label: "Profile", href: "/profile" },
              { icon: FolderKanban, label: "My Projects", href: "/portfolio" },
              { icon: MessageSquare, label: "Announcements", href: "/blog" },
            ],
          },
        ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800 z-50 overflow-y-auto hidden lg:block [&::-webkit-scrollbar]:hidden">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-slate-800 h-10">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-6">
        {menuItems.map((group) => (
          <div key={group.section}>
            <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {group.section}
            </div>
            <div className="space-y-1 mt-2">
              {group.items.map((item) => {
                const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User Profile + Logout Button */}
      <div className="p-4 border-t border-gray-200 dark:border-slate-800 mt-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{roleLabels[role]}</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        
        {/* ✅ Logout Button */}
        <form action={handleLogout}>
          <Button
            type="submit"
            variant="outline"
            size="sm"
            className="w-full glass-effect border-border hover:bg-destructive/10 hover:text-destructive transition-colors flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </form>
      </div>
    </aside>
  );
};