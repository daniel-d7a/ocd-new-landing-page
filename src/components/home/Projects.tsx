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

  const inView = useInView(containerRef, {
    once: false,
    amount: 0.2,
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
  const scroll = mobile ? -135 : -56;

  const textScroll = useTransform(
    textPos,
    [0, 25, 35, 100],
    [0, 0, scroll, scroll]
  );

  return (
    <section ref={containerRef} className="py-10 pt-14 md:block flex flex-col ">
      <div className="sticky z-10 top-4 text-4xl md:text-5xl font-semibold text-center flex items-center justify-center">
        <p>Our </p>
        <motion.div
          // style={{
          //   width: !inView
          //     ? "0%"
          //     : typeIndex === 0
          //     ? mobile
          //       ? "31%"
          //       : "12%"
          //     : typeIndex === 1
          //     ? mobile
          //       ? "42%"
          //       : "17%"
          //     : "0%",
          // }}
          style={{
            width: !inView ? "0%" : typeIndex === 0 ? "160px" : "210px",
          }}
          className="ml-1 h-14 inline-block overflow-hidden transition-all"
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
        <div className="ml-10">Our Design Work</div>
      </div>
      <Design />
      <Branding />
    </section>
  );
};

const projectTypes = ["Design", "Branding"];
