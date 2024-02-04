"use client";

import { cn } from "@/lib/cn";
import { montserrat, neon } from "@/lib/fonts";
import Image from "next/image";
import megaphone from "@/assets/megaphone.png";
import { Count } from "../ui/countUp";
import { motion } from "framer-motion";
import lightning from "@/assets/lightning.png";
import { NeonText } from "../ui/NeonText";
import { useRef } from "react";

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <section className="px-6 md:mx-16 mt-16 mb-10 grid grid-cols-3 grid-rows-2 md:justify-normal">
      <div className="flex flex-col items-center justify-center md:block text-7xl md:text-8xl font-semibold md:space-y-4 col-span-3 md:col-span-2">
        <div className="w-full overflow-y-hidden">
          <motion.h1
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              ease: "easeOut",
              type: "just",
              duration: 1,
            }}
          >
            Design, Develop,
          </motion.h1>
        </div>
        <div ref={textRef} className="w-full overflow-y-hidden pb-8">
          <motion.h1
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            onAnimationComplete={() => {
              textRef.current!.style.overflowY = "visible";
            }}
            transition={{
              delay: 0.5,
              ease: "easeOut",
              type: "just",
              duration: 1,
            }}
            className=" flex flex-col md:flex-row gap-2"
          >
            Market
            <NeonText
              className={cn(
                "font-semibold border-4 rounded-full px-6 w-min -ml-4 md:ml-0 mb-10",
                neon.className
              )}
              border
            >
              Experts
            </NeonText>
            {/* <motion.div
              style={{
                originX: 0.1,
              }}
              initial={{ rotateZ: 0 }}
              animate={{ rotateZ: 8 }}
              transition={{
                ease: "easeOut",
                delay: 1.8,
                type: "spring",
                damping: 0.5,
              }}
              className="bg-ocd-yellow rounded-full w-min -ml-4 md:ml-0 px-6 pb-2 text-black mb-10"
            >
              experts
            </motion.div> */}
          </motion.h1>
        </div>
      </div>

      <div className="col-span-3 md:col-span-2 flex md:flex-row flex-col items-center gap-8 md:gap-0 md:items-start justify-between md:pr-14 pt-0 md:pt-16">
        <Count end={40} text="succesful event" />
        <Count end={150} text="ad campaign" />
        <Count end={100} text="completed project" />
        <Count end={20} text="satisfied client" />
      </div>

      <div className="col-span-3 md:col-span-1 md:row-span-2 md:row-start-1 md:col-start-3 mt-6">
        <div className="w-full overflow-x-hidden">
          <motion.p
            transition={{
              delay: 0.5,
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
              delay: 0.5,
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
                delay: 0.5,
              }}
              className="w-11/12 md:w-full md:mt-10 relative"
            >
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.001,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0.6,
                }}
              >
                <Image
                  src={lightning}
                  alt="lightning"
                  width={40}
                  className="absolute top-0 right-10 rotate-[20deg] scale-150"
                />

                <Image
                  src={lightning}
                  alt="lightning"
                  width={40}
                  className="absolute top-36 right-0 -rotate-[30deg] -scale-y-150 scale-150"
                />
              </motion.div>
              <motion.div
                animate={{ opacity: 0 }}
                initial={{ opacity: 1 }}
                style={{
                  originX: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.001,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0.6,
                }}
              >
                <Image
                  src={lightning}
                  alt="lightning"
                  width={40}
                  className="absolute top-6 right-12 rotate-[20deg] scale-150"
                />
                <Image
                  src={lightning}
                  alt="lightning"
                  width={40}
                  className="absolute bottom-32 right-2 -rotate-[50deg] -scale-y-150 scale-150"
                />
              </motion.div>
              <Image src={megaphone} alt="megaphone" width={400} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
