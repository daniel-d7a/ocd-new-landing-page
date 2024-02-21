"use client";

import { cn } from "@/lib/cn";
import { Count } from "../ui/countUp";
import { motion } from "framer-motion";
import { ClassValue } from "clsx";

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

        <div className="md:hidden block w-full px-2  text-[5rem] ">
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

const FlipText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  delay?: number;
  className?: ClassValue | ClassValue[];
}) => {
  const letters = (top: boolean) =>
    text.split("").map((letter, i) => {
      return letter !== " " ? (
        <motion.div
          initial={{
            y: top ? 0 : 200,
          }}
          animate={{
            y: top ? -200 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.05 + 1 + delay || 0,
            ease: [0.83, 0, 0.17, 1],
            // repeat: Infinity,
            // repeatType: "reverse",
            // repeatDelay: 2.5,
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
      {/* <motion.div className="absolute flex overflow-hidden top-0 left-0 ">
        {letters(true)}
      </motion.div> */}
      <motion.div className="absolute flex overflow-hidden top-0 left-0">
        {letters(false)}
      </motion.div>
    </div>
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
        className="relative h-32 md:h-40 -translate-y-4 md:translate-y-4 -translate-x-1 overflow-hidden"
      >
        <motion.div
          // initial={{
          //   y: 300,
          // }}
          // animate={{
          //   y: 0,
          // }}
          transition={{
            delay: 3.5,
            ease: [0.76, 0, 0.24, 1],
            duration: 1,
            // repeat: Infinity,
            // repeatDelay: 1.5,
          }}
          className={cn(
            "absolute top-0 left-3 md:left-0 font-semibold md:-translate-y-8 md:px-6 w-min mb-10 text-black"
          )}
        >
          experts
        </motion.div>
        {/* <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: -300,
          }}
          transition={{
            delay: 3.5,
            ease: [0.76, 0, 0.24, 1],
            duration: 1,
            // repeat: Infinity,
            // repeatType: "reverse",
            // repeatDelay: 1.5,
          }}
          className={cn(
            "absolute top-0 left-3 md:left-0 font-semibold md:px-6 w-min mb-10 text-black"
          )}
        >
          experts
        </motion.div> */}
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
