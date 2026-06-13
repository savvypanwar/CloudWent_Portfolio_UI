// components/animations/TextReveal/TextReveal.tsx

"use client";

import { motion, Variants } from "framer-motion"; // ✅ Import Variants
import { cn } from "@/lib/utils";

export interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  splitBy?: "word" | "character";
}

export const TextReveal = ({
  text,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  splitBy = "word",
}: TextRevealProps) => {
  const items = splitBy === "word" ? text.split(" ") : text.split("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    }),
  };

  const itemVariants: Variants = { // ✅ Explicitly type as Variants
    hidden: {
      opacity: 0,
      y: splitBy === "word" ? 20 : 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: "easeOut", // ✅ TypeScript ab specific literal "easeOut" samjhega
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("inline-flex flex-wrap", className)}
      whileInView="visible"
      viewport={{ once }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className={splitBy === "word" ? "mr-1" : ""}
        >
          {item}
          {splitBy === "word" && index < items.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
};