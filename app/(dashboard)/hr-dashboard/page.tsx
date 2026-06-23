import { RoleDashboardPage } from "../dashboard/page";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "HR Dashboard | CloudWent",
  description: "HR dashboard for managing candidates and hiring activity.",
};

export default function HrDashboardPage() {
  return <RoleDashboardPage roleOverride="hr" />;
}
