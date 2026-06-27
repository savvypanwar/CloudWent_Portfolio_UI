import { prisma } from "@/lib/prisma/prisma";

export const dynamic = "force-dynamic";

export default async function ActivityLogsPage() {
  const logs: any[] = await (prisma as any).activityLog.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  const actionColors: Record<string, string> = {
    CREATE: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    UPDATE: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    DELETE: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
    LOGIN: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    LOGOUT: "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300",
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Activity Logs</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Track system activity, user actions, and data changes.
        </p>
      </div>

      <div className="glass-effect border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Action</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Entity</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Details</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {logs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-muted-foreground">
                    No activity logs found.
                  </td>
                </tr>
              ) : (
                logs.map((log) => (
                  <tr key={log.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${actionColors[log.action.toUpperCase()] || "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300"}`}>
                        {log.action}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">{log.entity}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{log.userName || log.userId || "System"}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground max-w-xs truncate">{log.details || "—"}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(log.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>Showing {logs.length} entries</span>
        </div>
      </div>
    </div>
  );
}
