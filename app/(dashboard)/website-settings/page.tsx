import { redirect } from "next/navigation";
import { Plus, Pencil, Trash2, Globe, Code, Smartphone } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button/Button";
import { prisma } from "@/lib/prisma/prisma";

async function deleteSettingAction(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  await prisma.websiteSetting.delete({ where: { id } });
  redirect("/website-settings");
}

const groupIcons: Record<string, any> = {
  general: Globe,
  branding: Globe,
  contact: Smartphone,
  social: Code,
};

export default async function WebsiteSettingsPage() {
  const items: any[] = await (prisma as any).websiteSetting.findMany({
    orderBy: [{ group: "asc" }, { key: "asc" }],
  });

  const groups = Array.from(new Set(items.map((i) => i.group)));

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Website Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage global website configuration and settings.
          </p>
        </div>
        <Button asChild variant="primary" size="sm" className="glass-effect shadow-md">
          <Link href="/website-settings/new">
            <Plus className="w-4 h-4 mr-2" /> Add Setting
          </Link>
        </Button>
      </div>

      {groups.map((group) => (
        <div key={group} className="glass-effect border-border rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/10">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">{group}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/20 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Label</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Value</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {items.filter((i) => i.group === group).map((item) => (
                  <tr key={item.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <Globe className="w-3.5 h-3.5" />
                        </div>
                        <p className="font-medium text-foreground text-sm font-mono">{item.key}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">{item.label || item.key}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground max-w-xs truncate">{item.value}</td>
                    <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-muted/50" asChild>
                        <Link href={`/website-settings/${item.id}/edit`}>
                          <Pencil className="w-3.5 h-3.5 text-muted-foreground" />
                        </Link>
                      </Button>
                      <form action={deleteSettingAction}>
                        <input type="hidden" name="id" value={item.id} />
                        <Button type="submit" variant="outline" size="icon" className="h-8 w-8 border-border hover:bg-destructive/20 hover:text-destructive">
                          <Trash2 className="w-3.5 h-3.5 text-muted-foreground" />
                        </Button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <div className="glass-effect border-border rounded-2xl p-10 text-center text-muted-foreground">
          No website settings found.
        </div>
      )}
    </div>
  );
}
