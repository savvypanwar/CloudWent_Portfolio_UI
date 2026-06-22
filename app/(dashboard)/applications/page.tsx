import { getApplications } from "@/app/actions/get-applications";
import Link from "next/link";
import { Eye, Trash2, Calendar, User, Briefcase, CheckCircle, XCircle, Clock, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Applications | CloudWent Dashboard",
  description: "Manage all job applications submitted to CloudWent.",
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    case "reviewed":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "accepted":
    case "approved":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    case "rejected":
      return "bg-red-500/10 text-red-500 border-red-500/20";
    default:
      return "bg-gray-500/10 text-gray-500 border-gray-500/20";
  }
};

export default async function ApplicationsPage() {
  const { success, applications } = await getApplications();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Applications</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage all job applications submitted through the portal.
          </p>
        </div>
        <Button asChild variant="outline" size="sm" className="glass-effect border-border hover:bg-muted/50">
          <Link href="/careers/apply">
            + New Application
          </Link>
        </Button>
      </div>

      <div className="glass-effect border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Applicant
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Job Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Applied On
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {applications.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-muted-foreground">
                    No applications found.
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr key={app.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                          {app.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{app.name}</p>
                          <p className="text-xs text-muted-foreground">{app.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {app.jobTitle}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
                        {app.status === "pending" ? <Clock className="w-3 h-3" /> : 
                         app.status === "accepted" || app.status === "approved" ? <CheckCircle className="w-3 h-3" /> : 
                         app.status === "rejected" ? <XCircle className="w-3 h-3" /> : 
                         <MoreHorizontal className="w-3 h-3" />}
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(app.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-muted/50">
                        <Eye className="w-3.5 h-3.5 text-muted-foreground" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-destructive/20 hover:text-destructive">
                        <Trash2 className="w-3.5 h-3.5 text-muted-foreground" />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer (Static) */}
        <div className="p-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Showing 1 to {applications.length} of {applications.length} entries</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 glass-effect border-border rounded hover:bg-muted/50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 glass-effect border-border rounded bg-primary/10 text-primary">1</button>
            <button className="px-3 py-1 glass-effect border-border rounded hover:bg-muted/50 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
