"use client";

import { cn } from "@/lib/cn";
import { montserrat, neon } from "@/lib/fonts";
import Image from "next/image";
import megaphone from "@/assets/megaphone2.png";
import { Count } from "../ui/countUp";
import { motion } from "framer-motion";
import lightning from "@/assets/lightning.png";
import { NeonText } from "../ui/NeonText";
import { useRef } from "react";

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <section className="min-h-screen px-6 md:mx-16 mt-16 mb-10 grid grid-cols-3 grid-rows-2 md:justify-normal">
      <div className="flex flex-col items-center justify-center md:block text-7xl md:text-8xl font-semibold md:space-y-4 col-span-3 md:col-span-2">
        <div className="w-min md:w-full overflow-y-hidden">
          <motion.h1
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              ease: "easeOut",
              type: "just",
              duration: 1,
              delay: 1,
            }}
          >
            Design, Develop,
          </motion.h1>
        </div>
        <div ref={textRef} className="w-min md:w-full overflow-y-hidden pb-8">
          <motion.h1
            initial={{ y: 240 }}
            animate={{ y: 0 }}
            onAnimationComplete={() => {
              textRef.current!.style.overflowY = "visible";
            }}
            transition={{
              delay: 1.5,
              ease: "easeOut",
              type: "just",
              duration: 1,
            }}
            className=" flex flex-col md:flex-row gap-2"
          >
            Market
            <span
              className={cn(
                "font-semibold bg-ocd-yellow rounded-full rotate-12 px-6 w-min mt-4 pb-2 -ml-4 md:ml-0 mb-10 text-black"
              )}
            >
              experts
            </span>
          </motion.h1>
        </div>
      </div>

      <div className="col-span-3 md:col-span-2 grid grid-cols-2 items-start md:flex md:flex-row md:items-start gap-8 md:gap-0 justify-between md:pr-14 pt-0 md:pt-10">
        <Count end={40} text="succesful event" />
        <Count end={150} text="ad campaign" />
        <Count end={100} text="completed project" />
        <Count end={20} text="satisfied client" />
      </div>

      <div className="col-span-3 md:col-span-1 md:row-span-2 md:row-start-1 md:col-start-3 mt-6">
        <div className="w-full overflow-x-hidden">
          <motion.p
            transition={{
              delay: 1.5,
              ease: "easeOut",
              type: "just",
              duration: 1,
            }}
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            className={cn("text-xl", montserrat.className)}
          >
            We design, develop and market for companies who aspire to be #1 in
            thier industry
          </motion.p>
        </div>
        <div className="w-fit overflow-hidden">
          <motion.div
            initial={{ rotateZ: 20 }}
            animate={{ rotateZ: -20 }}
            transition={{
              duration: 0.001,
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1.8,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scaleX: -1.2, scaleY: 1.2 }}
              animate={{ opacity: 1, scaleX: -1, scaleY: 1 }}
              transition={{
                ease: "anticipate",
                duration: 0.7,
                delay: 1.5,
              }}
              className="w-[150%] md:w-[200%] -ml-[60%] md:-ml-[100%] md:mt-10 relative"
            >
              <Image className="-scale-x-100" src={megaphone} alt="megaphone" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
