import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/Button/Button";
import { deleteTeamMember, getManagedTeamMembers, revalidateTeamPages } from "@/lib/team";
import type { TeamMemberProfile } from "@/lib/team";

async function deleteTeamMemberAction(formData: FormData) {
  "use server";

  const id = formData.get("id") as string;

  try {
    await deleteTeamMember(id);
    revalidateTeamPages();
  } catch (error) {
    console.error("Delete team member failed:", error);
    throw new Error("Failed to delete team member");
  }

  redirect("/myteam");
}

export default async function TeamPage() {
  const members = await getManagedTeamMembers();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Team Management</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your team members, update roles, and bios.
          </p>
        </div>
        <Button asChild variant="primary" size="sm" className="glass-effect shadow-md">
          <Link href="/myteam/new">
            <Plus className="w-4 h-4 mr-2" /> Add New Member
          </Link>
        </Button>
      </div>

      <div className="glass-effect border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Team
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {members.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-muted-foreground">
                    No team members in the database yet. Run{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded">npm run db:seed</code>{" "}
                    or add your first member.
                  </td>
                </tr>
              ) : (
                members.map((member: TeamMemberProfile) => (
                  <tr key={member.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-sm`}>
                          {member.initials}
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.email || "—"}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {member.role}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {member.team.charAt(0).toUpperCase() + member.team.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-border hover:bg-muted/50"
                        asChild
                      >
                        <Link href={`/myteam/${member.id}/edit`}>
                          <Pencil className="w-3.5 h-3.5 text-muted-foreground" />
                        </Link>
                      </Button>

                      <form action={deleteTeamMemberAction}>
                        <input type="hidden" name="id" value={member.id} />
                        <Button
                          type="submit"
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 border-border hover:bg-destructive/20 hover:text-destructive"
                        >
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
          <span>Showing 1 to {members.length} of {members.length} entries</span>
        </div>
      </div>
    </div>
  );
}
