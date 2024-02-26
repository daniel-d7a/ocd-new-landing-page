"use client";

import { cn } from "@/lib/cn";
import { Count } from "../ui/countUp";
import { motion } from "framer-motion";
import { FlipText } from "../ui/FlipText";

export const Hero = () => {
  return (
    <section
      id="section1"
      className="px-1 md:mx-16 mt-6 mb-12 md:mb-52 md:justify-normal"
    >
      <div className="flex flex-col items-center justify-start md:block  font-semibold md:space-y-4 h-96">
        <div className="w-full hidden md:block md:text-[9rem]">
          <FlipText
            text="Design, Develop"
            className=" md:w-[66rem] w-fit mx-auto"
          />
          <div className="flex justify-center mt-2">
            <FlipText text="Market" delay={0.8} className="md:w-[31rem]" />
            <YellowCapsule />
          </div>
        </div>

        <div className="md:hidden block w-full px-2 text-[5rem]">
          <FlipText text="Design," className="mb-4" />
          <FlipText text="Develop" className="mb-4" delay={0.3} />
          <FlipText text="Market" className="mb-10" delay={0.6} />
          <YellowCapsule />
        </div>
      </div>

      <div className="flex flex-row items-baseline justify-evenly md:space-y-0 space-y-10 pt-10">
        <Count end={150} text="team members" />
        <Count end={100} text="completed project" />
        <Count end={20} text="satisfied client" />
      </div>
    </section>
  );
};

const YellowCapsule = () => {
  return (
    <motion.div
      initial={{
        rotate: 6,
      }}
      animate={{
        rotate: 0,
      }}
      transition={{
        delay: 3.2,
      }}
      className="md:w-[34rem] transition-all relative origin-left"
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{
          width: "100%",
        }}
        transition={{
          delay: 2.8,
          ease: [0.22, 1, 0.36, 1],
          duration: 1,
        }}
        className="relative h-32 md:h-52 -translate-y-5 -translate-x-1 overflow-hidden"
      >
        <motion.div
          transition={{
            delay: 3.5,
            ease: [0.76, 0, 0.24, 1],
            duration: 1,
          }}
          className={cn(
            "absolute md:top-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold md:-translate-y-0 md:px-6 mb-10 text-black "
          )}
        >
          experts
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{
          width: "100%",
        }}
        transition={{
          delay: 2.5,
          ease: [0.22, 1, 0.36, 1],
          duration: 1,
        }}
        className="absolute bg-ocd-yellow md:translate-y-6 h-24 md:h-40 top-0 left-0 -z-10 rounded-full"
      />
    </motion.div>
  );
};
