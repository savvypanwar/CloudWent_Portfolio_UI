import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeader = ({
  label,
  title,
  align = "left",
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("space-y-4", className, align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left") }>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/80">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
};
