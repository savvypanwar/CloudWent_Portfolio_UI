"use client";

import { useState } from "react";
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
  Menu,
  X,
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
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
              { icon: MessageSquare, label: "Testimonials", href: "/testimonials" },
              { icon: Calendar, label: "Contact", href: "/leads" },
              { icon: Activity, label: "Newsletter", href: "/newsletter" },
              { icon: DollarSign, label: "Manage Blog", href: "/manage-blog" },
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
    <>
      {/* Hamburger Menu Button - Mobile Only */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="border-border/20 bg-black/50 backdrop-blur-md hover:bg-black/70"
        >
          {isMobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 z-50 overflow-y-auto [&::-webkit-scrollbar]:hidden md:backdrop-blur-0 backdrop-blur-md md:border-r md:border-border md:bg-background bg-black/85 border-r border-border/20 transition-transform duration-300 ${
        isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
      {/* Logo */}
      {/* Logo – original component, centered */}
<div className="border-b md:border-border border-border/20 h-16 flex items-center justify-center p-12">
  <Logo />
</div>

      {/* Navigation */}
      <nav className="p-3 md:p-4 space-y-6">
        {menuItems.map((group) => (
          <div key={group.section}>
            <div className="px-2 md:px-3 py-2 text-xs font-semibold text-muted-foreground/80 md:text-muted-foreground uppercase tracking-wider">
              {group.section}
            </div>
            <div className="space-y-1 mt-2">
              {group.items.map((item) => {
                const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center gap-3 px-2 md:px-3 py-2 md:py-2.5 rounded-lg transition-colors text-sm md:text-base ${
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground/80 md:text-muted-foreground hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Theme Toggle + User Profile + Logout */}
      <div className="p-3 md:p-4 border-t md:border-border border-border/20 mt-auto space-y-3">
        {/* Theme Toggle */}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className="w-full glass-effect border-border/20 md:border-border hover:bg-surface transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
        >
          {resolvedTheme === "dark" ? (
            <>
              <Sun className="w-4 h-4 text-amber-500" /> 
              <span className="hidden sm:inline">Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-primary" /> 
              <span className="hidden sm:inline">Dark Mode</span>
            </>
          )}
        </Button>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold text-sm">
            {initials}
          </div>
          <div className="flex-1 min-w-0 hidden sm:block">
            <p className="text-sm font-semibold text-foreground truncate">{name}</p>
            <p className="text-xs text-muted-foreground/80 md:text-muted-foreground">{roleLabels[role]}</p>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground/80 md:text-muted-foreground hidden sm:block" />
        </div>
        
        {/* Logout Button */}
        <form action={handleLogout}>
          <Button
            type="submit"
            variant="outline"
            size="sm"
            className="w-full glass-effect border-border/20 md:border-border hover:bg-destructive/10 hover:text-destructive transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </form>
      </div>
      </aside>

      {/* Mobile Overlay - Click to Close */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};