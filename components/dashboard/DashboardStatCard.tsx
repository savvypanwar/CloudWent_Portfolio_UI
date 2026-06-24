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
    <div className="rounded-2xl bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
          <p className="mt-2 text-2xl font-bold text-gray-950 dark:text-white">{value}</p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{note}</p>
        </div>
        <div className={`${color} text-white rounded-xl p-3`}>{icon}</div>
      </div>
    </div>
  );
};