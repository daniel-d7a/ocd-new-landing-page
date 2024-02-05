import { cn } from "@/lib/cn";
import { MotionValue, motion } from "framer-motion";
import { HTMLAttributes, PropsWithChildren } from "react";

export const Text = ({
  y,
  children,
  className,
}: { y: MotionValue<number> } & PropsWithChildren<
  HTMLAttributes<HTMLDivElement>
>) => (
  <div className={cn(className, "overflow-y-hidden")}>
    <motion.p style={{ y }} className="">
      {children}
    </motion.p>
  </div>
);
