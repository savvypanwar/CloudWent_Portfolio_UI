import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface PageHeadingProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const titleSizeClasses = {
  sm: "text-2xl",
  md: "text-3xl lg:text-4xl",
  lg: "text-4xl lg:text-5xl",
};

const descSizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const PageHeading = ({
  title,
  description,
  actions,
  className,
  size = "md",
}: PageHeadingProps) => {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
        className
      )}
    >
      <div>
        <h1 className={cn("font-bold text-foreground", titleSizeClasses[size])}>
          {title}
        </h1>
        {description && (
          <p className={cn("mt-2 text-muted-foreground max-w-2xl", descSizeClasses[size])}>
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-3 flex-shrink-0">{actions}</div>}
    </div>
  );
};

export default PageHeading; 