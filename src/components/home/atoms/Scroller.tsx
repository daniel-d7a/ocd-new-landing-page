"use client";
import { cn } from "@/lib/cn";
import { ClassValue } from "clsx";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { ReactNode, useRef } from "react";

export const Scroller = ({
  children,
  baseVelocity,
  className,
  snapStart = -60,
  snapEnd = -1350,
}: {
  children: ReactNode | ReactNode[];
  baseVelocity: number;
  className?: ClassValue;
  snapStart?: number;
  snapEnd?: number;
}) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const baseX = useMotionValue(0);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    let newX = baseX.get() + moveBy;

    if (newX < snapEnd) {
      newX = snapStart;
    } else if (newX > snapStart) {
      newX = snapEnd;
    }

    baseX.set(newX);
  });

  return (
    <div className={cn("flex flex-nowrap overflow-hidden m-0", className)}>
      <motion.div
        className="flex flex-nowrap overflow-visible m-0 gap-10"
        style={{ x: baseX }}
      >
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};
