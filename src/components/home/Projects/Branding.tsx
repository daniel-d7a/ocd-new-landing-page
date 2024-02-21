"use client";
import { projects } from "./data";
import { useScroll, useTransform } from "framer-motion";
import { ElementRef, useRef } from "react";
import { BrandingCard } from "@/components/ui/BrandingCard";
import { isMobile as isMobileFunc } from "@/lib/utils";

export const Branding = () => {
  const containerRef = useRef<ElementRef<"div">>(null);
  const parentRef = useRef<ElementRef<"section">>(null);

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start start", "end end"],
  });

  let isMobile = isMobileFunc();

  const x = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 1200 : 5500]);

  x.on("change", (latest) => {
    console.log("latest => ", latest);

    containerRef.current!.scrollTo(latest, 0);
  });
  //start =>  615, 1631, 2670, 3700
  //end => 1050, 2060, 3080, 4100

  // mobile
  // start => 35, 300, 580
  // end => 260, 550, 860

  return (
    <section ref={parentRef} className="h-[200dvh] md:h-[300dvh]">
      <div
        ref={containerRef}
        className="w-full gap-10 scroll-m-20 md:gap-4 top-0 left-0 sticky mx-auto h-[100dvh] md:h-[95dvh] p-2 pt-10 md:p-10 flex justify-start overflow-x-scroll no-visible-scrollbar"
      >
        {projects.slice(0, 4).map((project, i) => (
          <BrandingCard key={i} {...project} i={i} x={x} />
        ))}
      </div>
    </section>
  );
};
