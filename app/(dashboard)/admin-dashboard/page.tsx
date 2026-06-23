import { RoleDashboardPage } from "../dashboard/page";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Dashboard | CloudWent",
  description: "Admin dashboard for managing the CloudWent workspace.",
};

export default function AdminDashboardPage() {
  return <RoleDashboardPage roleOverride="admin" />;
}
