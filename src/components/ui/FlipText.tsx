"use client";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { ClassValue } from "clsx";

export const FlipText = ({
  text,
  className,
  delay = 0,
  textStart,
}: {
  text: string;
  delay?: number;
  className?: ClassValue | ClassValue[];
  textStart?: boolean;
}) => {
  const letters = text.split("").map((letter, i) => {
    return letter !== " " ? (
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        // whileInView={{ y: 0 }}
        // viewport={{ once: false, amount: "some" }}
        transition={{
          duration: 0.5,
          delay: i * 0.05 + 1 + delay || 0,
          ease: [0.83, 0, 0.17, 1],
        }}
        key={`${letter}${i} ${Math.random()}`}
      >
        {letter}
      </motion.div>
    ) : (
      <span className="size-4" key={`${letter}${i} ${Math.random()}`}></span>
    );
  });

  return (
    <div className={cn("relative h-20 md:h-40", className)}>
      <motion.div
        className={cn(
          "absolute flex items-baseline w-full overflow-hidden top-0 left-0",
          textStart ? "justify-start" : "justify-center"
        )}
      >
        {letters}
      </motion.div>
    </div>
  );
};
