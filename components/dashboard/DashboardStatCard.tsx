import { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  note: string;
  icon: ReactNode;
  color: string;
}

export const DashboardStatCard = ({ label, value, note, icon, color }: StatCardProps) => {
  return (
    <div className="rounded-2xl bg-background border border-border p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-bold text-gray-950 dark:text-primary-foreground">{value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{note}</p>
        </div>
        <div className={`${color} text-primary-foreground rounded-xl p-3`}>{icon}</div>
      </div>
    </div>
  );
};