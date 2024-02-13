"use client";
import { ElementRef, useEffect, useRef, useState } from "react";
import { Branding } from "./Projects/Branding";
import { Design } from "./Projects/Design";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { isMobile } from "@/lib/utils";

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
  const scroll = mobile ? -135 : -170;

  const textScroll = useTransform(
    textPos,
    [0, 25, 35, 100],
    [0, 0, scroll, scroll]
  );

  return (
    <section ref={containerRef} className="py-10 pt-14 md:block flex flex-col ">
      <div className="sticky z-10 top-4 text-4xl md:text-5xl font-semibold text-center flex items-baseline justify-center">
        Our
        <motion.div
          style={{
            width: !inView
              ? "0%"
              : typeIndex === 0
              ? mobile
                ? "31%"
                : "12%"
              : typeIndex === 1
              ? mobile
                ? "42%"
                : "17%"
              : "0%",
          }}
          className="mx-1 h-14 inline-block overflow-hidden transition-all"
        >
          <div className="w-full">
            <motion.p style={{ x: textScroll }} className="space-x-6">
              {projectTypes.map((type) => (
                <span key={type}>{type}</span>
              ))}
            </motion.p>
          </div>
        </motion.div>
        Work
      </div>
      <Design />
      <Branding />
    </section>
  );
};

const projectTypes = ["Design", "Branding"];
