import { redirect } from "next/navigation";
import { Plus, Pencil, Trash2, Cpu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button/Button";
import { prisma } from "@/lib/prisma/prisma";

async function deleteTechnologyAction(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  await (prisma as any).technology.delete({ where: { id } });
  redirect("/technologies");
}

export default async function TechnologiesPage() {
  const items: any[] = await (prisma as any).technology.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Technologies</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage tech stack and technologies used in projects.
          </p>
        </div>
        <Button asChild variant="primary" size="sm" className="glass-effect shadow-md">
          <Link href="/technologies/new">
            <Plus className="w-4 h-4 mr-2" /> Add Technology
          </Link>
        </Button>
      </div>

      <div className="glass-effect border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Active</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {items.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-muted-foreground">
                    No technologies found.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.icon}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">{item.category}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground max-w-xs truncate">{item.description || "—"}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${item.active ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" : "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300"}`}>
                        {item.active ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-muted/50" asChild>
                        <Link href={`/technologies/${item.id}/edit`}>
                          <Pencil className="w-3.5 h-3.5 text-muted-foreground" />
                        </Link>
                      </Button>
                      <form action={deleteTechnologyAction}>
                        <input type="hidden" name="id" value={item.id} />
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
          <span>Showing 1 to {items.length} of {items.length} entries</span>
        </div>
      </div>
    </div>
  );
}
