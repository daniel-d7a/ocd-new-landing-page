"use client";

import { cn } from "@/lib/cn";
import { neon } from "@/lib/fonts";
import { useEffect, useRef } from "react";

export const NeonText = ({ children, className, border, color }: any) => {
  const neonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!neonRef.current) return;
    neonRef.current.style.setProperty("--neon-color", color ?? "#FFD900");
  }, [color]);

  return (
    <div
      ref={neonRef}
      className={cn(
        neon.className,
        "animate-neon",
        border && "animate-neon-border",
        className
      )}
    >
      {children}
    </div>
  );
};
