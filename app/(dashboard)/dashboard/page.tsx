import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { HRDashboard } from "@/components/dashboard/HRDashboard";
import { EmployeeDashboard } from "@/components/dashboard/EmployeeDashboard";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const { user } = await auth();

  if (!user) {
    redirect("/login");
  }

  const role = user.role;

  if (role === "admin") {
    return <AdminDashboard />;
  }

  if (role === "hr") {
    return <HRDashboard />;
  }

  return <EmployeeDashboard />;
}
