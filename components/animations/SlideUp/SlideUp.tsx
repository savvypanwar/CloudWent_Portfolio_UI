"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SlideUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export const SlideUp = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
}: SlideUpProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
      whileInView="animate"
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
};