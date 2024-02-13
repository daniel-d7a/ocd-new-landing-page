"use client";
import Image from "next/image";
import { MotionValue, motion, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";
import { montserrat } from "@/lib/fonts";
import { useEffect } from "react";
import { isMobile as isMobileFunc } from "@/lib/utils";
import Link from "next/link";

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
  const isMobile = isMobileFunc();

  const start = isMobile ? 35 + i * 265 : 650 + 1000 * i;
  const end = isMobile ? start + 225 : start + 400;

  const isLast = i === 3;

  const rotate = useTransform(x, [start, end], [0, 90]);
  const xPos = useTransform(x, [start, end], [0, isMobile ? -55 : -50]);
  const scale = useTransform(x, [start, end], [1, isMobile ? 0.6 : 0.4]);

  return (
    <Link
      href={`/Projects/${name}`}
      style={{
        left: `${isMobile ? 35 : 45}px`,
      }}
      className=" flex-shrink-0 w-[75%] md:w-[89%] sticky  rounded-xl shadow-lg drop-shadow-lg h-[95dvh] md:h-auto"
    >
      <div className="flex h-8 ">
        <div className="w-40 p-2 pl-6 pr-6 md:pr-0 text-white bg-neutral-800 rounded-t-xl">
          Branding
        </div>
        <div className="md:-ml-10 -ml-6 rounded-tr-md w-10 md:w-20 skew-x-[50deg] bg-neutral-800">
          {" "}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 bg-neutral-800 p-4 py-10 rounded-xl rounded-tl-none">
        <div className={cn("w-full md:w-3/5 md:ml-14")}>
          <motion.p
            style={{
              rotate: isMobile ? 0 : isLast ? 0 : rotate,
              x: isMobile ? 0 : isLast ? 0 : xPos,
              scale: isMobile ? 1 : isLast ? 1 : scale,
              originX: 0,
              originY: 0.5,
            }}
            className="text-3xl font-semibold md:text-6xl mb-6 "
          >
            {name}
          </motion.p>
          <p className={cn("md:text-xl md:w-3/4", montserrat.className)}>
            {text}
          </p>
        </div>
        <div className="md:h-full h-72 border-8 overflow-hidden ">
          <Image width={400} height={400} src={image} alt={name} />
        </div>
      </div>
    </Link>
  );
}
