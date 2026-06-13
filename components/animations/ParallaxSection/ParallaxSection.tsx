// components/animations/ParallaxSection/ParallaxSection.tsx

import { useRef, ReactNode } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
  as?: React.ElementType;
}

export const ParallaxSection = ({
  children,
  className,
  speed = 0.2,
  direction = "up",
  as: Component = "div",
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [0, -speed * 100] : [0, speed * 100]
  );

  // ✅ FIX: Use motion(Component as any) to avoid type instantiation depth
  const MotionComponent = motion(Component as any);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <MotionComponent style={{ y }} className="will-change-transform">
        {children}
      </MotionComponent>
    </div>
  );
};