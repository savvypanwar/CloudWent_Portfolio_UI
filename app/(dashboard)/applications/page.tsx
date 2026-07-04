import { redirect } from "next/navigation";
import { Eye, Pencil, Trash2, Briefcase } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button/Button";
import { prisma } from "@/lib/prisma/prisma";

async function deleteApplicationAction(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  await prisma.application.delete({ where: { id } });
  redirect("/applications");
}

export default async function ApplicationsPage() {
  const applications = await prisma.application.findMany({
    orderBy: { createdAt: "desc" },
  });

  const statusColors: Record<string, string> = {
    pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    reviewed: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-primary",
    interview: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    offered: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    rejected: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Applications</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Review and manage job applications.
          </p>
        </div>
      </div>

      <div className="glass-effect border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Applicant</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Job Title</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Applied</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
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
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-primary-foreground font-bold text-sm">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{app.name}</p>
                          <p className="text-xs text-muted-foreground">{app.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">{app.jobTitle || "—"}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[app.status] || statusColors.pending}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-muted/50" asChild>
                        <Link href={`/applications/${app.id}`}>
                          <Eye className="w-3.5 h-3.5 text-muted-foreground" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-muted/50" asChild>
                        <Link href={`/applications/${app.id}/edit`}>
                          <Pencil className="w-3.5 h-3.5 text-muted-foreground" />
                        </Link>
                      </Button>
                      <form action={deleteApplicationAction}>
                        <input type="hidden" name="id" value={app.id} />
                        <Button type="submit" variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-destructive/20 hover:text-destructive">
                          <Trash2 className="w-3.5 h-3.5 text-muted-foreground" />
                        </Button>
                      </form>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Showing 1 to {applications.length} of {applications.length} entries</span>
        </div>
      </div>
    </div>
  );
}
