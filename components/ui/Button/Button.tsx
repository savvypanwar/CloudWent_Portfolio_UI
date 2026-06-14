import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-blue-600",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30",
        gradient: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-indigo-500/30",
        outline: "border border-gray-200 bg-transparent hover:bg-gray-50 text-gray-900 hover:border-gray-300 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-600",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
        dark: "bg-[#0B101B] hover:bg-[#1a2332] text-white border border-gray-800",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "gradient",
      size: "lg",
    },
  }
);

type SharedButtonProps = VariantProps<typeof buttonVariants> & {
  className?: string;
};

type NativeButtonProps = SharedButtonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof SharedButtonProps | "href"> & {
    href?: undefined;
  };

type LinkButtonProps = SharedButtonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof SharedButtonProps | "href"> & {
    disabled?: boolean;
    href: ComponentPropsWithoutRef<typeof Link>["href"];
  };

export type ButtonProps = NativeButtonProps | LinkButtonProps;

export const Button = (props: ButtonProps) => {
  const { className, variant, size } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const {
      className: _className,
      variant: _variant,
      size: _size,
      href,
      disabled,
      ...linkProps
    } = props;

    return (
      <Link
        href={href}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : linkProps.tabIndex}
        className={cn(
          classes,
          disabled && "pointer-events-none opacity-50"
        )}
        {...linkProps}
      />
    );
  }

  const nativeProps = props as NativeButtonProps;
  const {
    className: _className,
    variant: _variant,
    size: _size,
    ...buttonProps
  } = nativeProps;

  return (
    <button className={classes} {...buttonProps} />
  );
};
