"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/app/actions/auth";
import { useThemeStore } from "@/store/theme.store";

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
  Sun,
  Moon,
  Route,
  HelpCircle,
  DollarSign,
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
  const { resolvedTheme, toggleTheme } = useThemeStore();

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
              { icon: Briefcase, label: "Careers", href: "/careersapplications" },
              { icon: Calendar, label: "Contact Inquiries", href: "/leads" },
            ],
          },
          {
            section: "Settings",
            items: [
              { icon: Settings, label: "Profile", href: "/profile" },
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
            ],
          },
        ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-background border-r border-border z-50 overflow-y-auto hidden lg:block [&::-webkit-scrollbar]:hidden">
      {/* Logo */}
      {/* Logo – original component, centered */}
<div className="border-b border-border h-16 flex items-center justify-center p-12">
  <Logo />
</div>

      {/* Navigation */}
      <nav className="p-4 space-y-6">
        {menuItems.map((group) => (
          <div key={group.section}>
            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground"
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

      {/* Theme Toggle + User Profile + Logout */}
      <div className="p-4 border-t border-border mt-auto space-y-3">
        {/* Theme Toggle */}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="w-full glass-effect border-border hover:bg-surface transition-colors flex items-center justify-center gap-2"
        >
          {resolvedTheme === "dark" ? (
            <>
              <Sun className="w-4 h-4 text-amber-500" /> Light Mode
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-primary" /> Dark Mode
            </>
          )}
        </Button>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{roleLabels[role]}</p>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
        
        {/* Logout Button */}
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