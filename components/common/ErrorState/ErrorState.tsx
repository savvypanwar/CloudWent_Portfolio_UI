"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

export interface ErrorStateProps {
  title?: string;
  description?: string;
  error?: Error | string;
  icon?: ReactNode;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState = ({
  title = "Something went wrong",
  description = "We encountered an error while loading this content. Please try again.",
  error,
  icon,
  onRetry,
  className,
}: ErrorStateProps) => {
  const errorMessage = typeof error === "string" ? error : error?.message;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 px-4 text-center",
        className
      )}
    >
      <div className="mb-4 rounded-full bg-red-50 p-4">
        {icon || <AlertTriangle className="h-12 w-12 text-red-500" />}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-2">{description}</p>
      {errorMessage && (
        <p className="text-xs text-red-500 bg-red-50 px-3 py-1.5 rounded-md mb-6 max-w-sm break-all">
          {errorMessage}
        </p>
      )}
      {onRetry && (
        <Button variant="primary" size="sm" onClick={onRetry}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      )}
    </div>
  );
};