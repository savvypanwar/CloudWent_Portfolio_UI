
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-effect rounded-2xl p-6 transition-all duration-300",
        hoverEffect && "hover:scale-[1.02] hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
};