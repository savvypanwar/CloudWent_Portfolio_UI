import { redirect } from "next/navigation";
import { Plus, Eye, Pencil, Trash2, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button/Button";
import { prisma } from "@/lib/prisma/prisma";

async function deleteUserAction(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  await prisma.user.delete({ where: { id } });
  redirect("/users");
}

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      lastLoginAt: true,
      createdAt: true,
    },
  });

  const roleColors: Record<string, string> = {
    admin: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
    hr: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-primary",
    employee: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    user: "bg-surface text-foreground dark:bg-gray-900/30 dark:text-gray-300",
  };

  const statusColors: Record<string, string> = {
    ACTIVE: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    PENDING_EMAIL_VERIFY: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    SUSPENDED: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    BLOCKED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Users</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage system users, roles, and permissions.
          </p>
        </div>
        <Button asChild variant="primary" size="sm" className="glass-effect shadow-md">
          <Link href="/users/new">
            <Plus className="w-4 h-4 mr-2" /> Add User
          </Link>
        </Button>
      </div>

      <div className="glass-effect border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Last Login</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-muted-foreground">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-primary-foreground font-bold text-sm">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{user.name || "—"}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${roleColors[(user.role as string).toLowerCase()] || roleColors.user}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[user.status] || statusColors.ACTIVE}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {user.lastLoginAt ? new Date(user.lastLoginAt).toLocaleDateString() : "Never"}
                    </td>
                    <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-muted/50" asChild>
                        <Link href={`/users/${user.id}`}>
                          <Eye className="w-3.5 h-3.5 text-muted-foreground" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-muted/50" asChild>
                        <Link href={`/users/${user.id}/edit`}>
                          <Pencil className="w-3.5 h-3.5 text-muted-foreground" />
                        </Link>
                      </Button>
                      <form action={deleteUserAction}>
                        <input type="hidden" name="id" value={user.id} />
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
          <span>Showing 1 to {users.length} of {users.length} entries</span>
        </div>
      </div>
    </div>
  );
}
