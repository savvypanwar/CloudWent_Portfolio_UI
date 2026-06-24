import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { HRDashboard } from "@/components/dashboard/HRDashboard";
import { EmployeeDashboard } from "@/components/dashboard/EmployeeDashboard";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  // ✅ auth() se user fetch kiya, kyunki import wohi hai
  const { user } = await auth();

  if (!user) {
    redirect("/login");
  }

  const role = user.role; // "admin" | "hr" | "employee"
  const name = user.name;

  let DashboardComponent;
  if (role === "admin") {
    DashboardComponent = AdminDashboard;
  } else if (role === "hr") {
    DashboardComponent = HRDashboard;
  } else {
    DashboardComponent = EmployeeDashboard;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B101B]">
      <Sidebar name={name} role={role} />
      <div className="lg:ml-64">
        <DashboardComponent />
      </div>
    </div>
  );
}