import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-primary",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-md",
        gradient: "bg-gradient-cta text-primary-foreground shadow-glow hover:opacity-95",
        outline: "bg-transparent hover:bg-muted/50 text-foreground", // ✅ border removed
        ghost: "bg-transparent hover:bg-muted text-foreground",
        dark: "bg-dark text-dark-foreground hover:bg-dark/80", // ✅ border removed
      },
      size: {
        sm: "h-8 px-3 text-xs",          // ✅ smaller
        md: "h-10 px-5 text-sm",         // ✅ smaller
        lg: "h-12 px-6 text-base",       // ✅ smaller
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };