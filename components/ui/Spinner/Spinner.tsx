import { cn } from "@/lib/utils";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-3",
};

export const Spinner = ({ className, size = "md", ...props }: SpinnerProps) => {
  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-solid border-gray-200 border-t-blue-600",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
};