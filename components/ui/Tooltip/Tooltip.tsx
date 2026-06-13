import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Tooltip = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    content: string;
    side?: "top" | "bottom" | "left" | "right";
  }
>(({ className, content, side = "top", children, ...props }, ref) => {
  const sideClasses = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  return (
    <div className="relative group inline-block">
      {children}
      <div
        ref={ref}
        className={cn(
          "absolute z-50 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
          sideClasses[side],
          className
        )}
        {...props}
      >
        {content}
      </div>
    </div>
  );
});
Tooltip.displayName = "Tooltip";

export { Tooltip };