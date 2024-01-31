"use client";

// GlowingBall.js
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const GlowingBall = ({
  x,
  y,
  active,
}: {
  x: number;
  y: number;
  active: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        "absolute pointer-events-none size-20 bg-neutral-100 rounded-full blur-2xl transition-all z-10",
        active ? "opacity-70" : "opacity-0"
      )}
      animate={{ x: x - 100, y: y - 60 }}
      transition={{ duration: 0.2 }}
    />
  );
};

export default GlowingBall;
