import { redirect } from "next/navigation";
import { Plus, Pencil, Trash2, Server } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button/Button";
import { prisma } from "@/lib/prisma/prisma";

async function deleteServiceAction(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  await prisma.service.delete({ where: { id } });
  redirect("/allservices");
}

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Services</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage service offerings and features.
          </p>
        </div>
        <Button asChild variant="primary" size="sm" className="glass-effect shadow-md">
          <Link href="/allservices/new">
            <Plus className="w-4 h-4 mr-2" /> Add Service
          </Link>
        </Button>
      </div>

      <div className="glass-effect border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Active</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {services.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-muted-foreground">
                    No services found.
                  </td>
                </tr>
              ) : (
                services.map((service) => (
                  <tr key={service.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-primary-foreground">
                          <Server className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{service.name}</p>
                          <p className="text-xs text-muted-foreground">{service.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground max-w-xs truncate">{service.description}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${service.active ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" : "bg-surface text-foreground dark:bg-gray-900/30 dark:text-gray-300"}`}>
                        {service.active ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-muted/50" asChild>
                        <Link href={`/allservices/${service.id}/edit`}>
                          <Pencil className="w-3.5 h-3.5 text-muted-foreground" />
                        </Link>
                      </Button>
                      <form action={deleteServiceAction}>
                        <input type="hidden" name="id" value={service.id} />
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
          <span>Showing 1 to {services.length} of {services.length} entries</span>
        </div>
      </div>
    </div>
  );
}
