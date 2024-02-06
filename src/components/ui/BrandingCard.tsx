"use client";
import Image from "next/image";
import { MotionValue, motion, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";
import { montserrat } from "@/lib/fonts";
import { useEffect } from "react";

export function BrandingCard({
  i,
  image,
  text,
  name,
  x,
}: {
  i: number;
  image: string;
  text: string;
  name: string;
  x: MotionValue<number>;
}) {
  const isMobile = window?.innerWidth <= 768;

  const start = isMobile ? 35 + i * 265 : 650 + 1000 * i;
  const end = isMobile ? start + 225 : start + 400;

  const isLast = i === 3;

  const rotate = useTransform(x, [start, end], [0, 90]);
  const xPos = useTransform(x, [start, end], [0, isMobile ? -55 : -50]);
  const scale = useTransform(x, [start, end], [1, isMobile ? 0.6 : 0.4]);

  return (
    <div
      style={{
        left: `${i * (isMobile ? 35 : 45)}px`,
      }}
      className="p-4 py-10 flex flex-col md:flex-row gap-10 flex-shrink-0 w-[75%] md:w-[89%] sticky bg-neutral-800 rounded-xl shadow-lg drop-shadow-lg"
    >
      <div className={cn("w-full md:w-3/5 ml-14")}>
        <motion.p
          style={{
            rotate: isLast ? 0 : rotate,
            x: isLast ? 0 : xPos,
            scale: isLast ? 1 : scale,
            originX: 0,
            originY: 0.5,
          }}
          className="text-3xl font-semibold md:text-6xl mb-6 "
        >
          {name}
        </motion.p>
        <p className={cn("md:text-xl w-3/4", montserrat.className)}>{text}</p>
      </div>
      <div className="h-full overflow-hidden">
        <Image width={400} height={400} src={image} alt={name} />
      </div>
    </div>
  );
}
