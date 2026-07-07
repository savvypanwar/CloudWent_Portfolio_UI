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
    <div className="rounded-2xl bg-background border border-border p-3 sm:p-5">
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <p className="text-xs sm:text-sm text-muted-foreground truncate">{label}</p>
          <p className="mt-2 text-lg sm:text-2xl font-bold text-gray-950 dark:text-primary-foreground">{value}</p>
          <p className="mt-1 text-xs text-muted-foreground truncate">{note}</p>
        </div>
        <div className={`${color} text-primary-foreground rounded-xl p-2 sm:p-3 flex-shrink-0`}>{icon}</div>
      </div>
    </div>
  );
};