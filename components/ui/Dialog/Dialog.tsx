import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Dialog = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ className, children, open, ...props }, ref) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div
        ref={ref}
        className={cn(
          "relative max-w-lg w-full rounded-xl bg-white p-6 shadow-xl animate-in zoom-in-95 duration-200",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
});
Dialog.displayName = "Dialog";

export { Dialog };