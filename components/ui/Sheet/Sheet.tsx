import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Sheet = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    side?: "top" | "bottom" | "left" | "right";
  }
>(({ className, children, open, side = "bottom", ...props }, ref) => {
  if (!open) return null;

  const sideClasses = {
    top: "top-0 left-0 right-0 animate-in slide-in-from-top-2 duration-300",
    bottom: "bottom-0 left-0 right-0 animate-in slide-in-from-bottom-2 duration-300",
    left: "left-0 top-0 bottom-0 animate-in slide-in-from-left-2 duration-300",
    right: "right-0 top-0 bottom-0 animate-in slide-in-from-right-2 duration-300",
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div
        ref={ref}
        className={cn(
          "absolute bg-background shadow-xl p-6",
          sideClasses[side],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
});
Sheet.displayName = "Sheet";

export { Sheet };