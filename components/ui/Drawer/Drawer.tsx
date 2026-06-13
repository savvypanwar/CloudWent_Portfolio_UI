import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Drawer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    side?: "left" | "right";
  }
>(({ className, children, open, side = "right", ...props }, ref) => {
  if (!open) return null;

  const sideClasses = {
    left: "left-0 animate-in slide-in-from-left-2 duration-300",
    right: "right-0 animate-in slide-in-from-right-2 duration-300",
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div
        ref={ref}
        className={cn(
          "absolute top-0 h-full w-80 bg-white shadow-xl p-6",
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
Drawer.displayName = "Drawer";

export { Drawer };