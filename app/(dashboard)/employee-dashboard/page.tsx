import { RoleDashboardPage } from "../dashboard/page";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Employee Dashboard | CloudWent",
  description: "Employee dashboard for personal work, tasks, and updates.",
};

export default function EmployeeDashboardPage() {
  return <RoleDashboardPage roleOverride="employee" />;
}
