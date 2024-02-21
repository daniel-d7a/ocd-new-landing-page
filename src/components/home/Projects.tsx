"use client";
import { ElementRef, useEffect, useRef, useState } from "react";
import { Branding } from "./Projects/Branding";
import { Design } from "./Projects/Design";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cn, isMobile } from "@/lib/utils";

export const Projects = () => {
  const [typeIndex, setTypeIndex] = useState(0);
  const containerRef = useRef<ElementRef<"section">>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  scrollYProgress.on("change", (latest) => {
    console.log("latest => ", latest);
  });

  const textPos = useTransform(scrollYProgress, [0, 1], [0, 100]);
  textPos.on("change", (latest) => {
    if (latest > 30) {
      setTypeIndex(1);
    } else {
      setTypeIndex(0);
    }
  });

  const mobile = isMobile();
  const scroll = mobile ? -50 : -56;

  const textScroll = useTransform(
    textPos,
    [0, 25, 35, 100],
    [0, 0, scroll, scroll]
  );

  return (
    <section ref={containerRef} className="py-10 pt-14 md:block flex flex-col ">
      <div className="hidden sticky z-10 top-4 text-4xl md:text-5xl font-semibold text-center md:flex items-center justify-center">
        <p>Our </p>
        <motion.div
          whileInView={{
            width: typeIndex === 0 ? "160px" : "210px",
          }}
          className="mx-1 h-14 inline-block overflow-hidden transition-all w-0"
        >
          <motion.div
            style={{ y: textScroll }}
            className="space-y-2 flex flex-col justify-center"
          >
            {projectTypes.map((type, i) => (
              <p className={cn("mt-1")} key={type}>
                {type}
              </p>
            ))}
          </motion.div>
        </motion.div>
        <p>Work</p>
      </div>

      <div className="sticky z-10 mb-4 top-4 text-4xl md:text-5xl font-semibold text-center md:hidden flex flex-col gap-0  items-center justify-center">
        <p>Our</p>
        <motion.div
          whileInView={{
            height: "40px",
          }}
          className="mx-1 h-0 inline-block overflow-hidden transition-all"
        >
          <motion.div
            style={{ y: textScroll }}
            className="space-y-2 flex flex-col justify-center"
          >
            {projectTypes.map((type, i) => (
              <p className={cn("")} key={type}>
                {type}
              </p>
            ))}
          </motion.div>
        </motion.div>
        <p>Work</p>
      </div>
      <Design />
      <Branding />
    </section>
  );
};

const projectTypes = ["Design", "Branding"];
