import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { User } from "lucide-react";

const Avatar = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { fallback?: React.ReactNode }
>(({ className, children, fallback, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    {children || (
      <div className="flex h-full w-full items-center justify-center bg-surface">
        {fallback || <User className="h-5 w-5 text-muted-foreground" />}
      </div>
    )}
  </div>
));
Avatar.displayName = "Avatar";

export { Avatar };