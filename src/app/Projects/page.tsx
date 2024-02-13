"use client";
import { projects } from "@/components/home/Projects/data";
import { cn } from "@/lib/cn";
import { montserrat } from "@/lib/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Projects() {
  const flairRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.onpointermove = (event) => {
      const { clientX, clientY, pageX, pageY } = event;

      flairRef.current?.animate(
        {
          left: `${pageX - 40}px`,
          top: `${pageY - 60}px`,
        },
        { duration: 1000, fill: "forwards" }
      );
    };
  }, []);

  const Title = ({ name }: { name: string }) => (
    <p
      className={cn(
        "w-full sticky top-10 text-6xl md:text-8xl font-semibold mix-blend-difference"
      )}
    >
      {name}
    </p>
  );

  return (
    <div className="min-h-screen grid place-items-center p-10">
      {["Design", "Branding"].map((name, idx) => (
        <section
          className={cn(
            "flex md:flex-row items-start justify-start gap-10 mt-10 w-full relative",
            idx % 2 === 1 ? "flex-col" : "flex-col-reverse"
          )}
          key={idx}
        >
          {idx % 2 === 1 && <Title name={name} />}

          <div className={cn("space-y-6 w-full h-full")}>
            {projects.map((project, i) => (
              <ProjectPageCard
                setIsVisible={setIsVisible}
                key={project.name}
                {...project}
                i={i}
              />
            ))}
          </div>
          {idx % 2 === 0 && <Title name={name} />}
        </section>
      ))}

      <div
        ref={flairRef}
        className={cn(
          "rounded-full cursor-pointer top-0 left-0 z-10 transition-all pointer-events-none size-20 absolute hidden md:grid place-items-center bg-neutral-300",
          isVisible ? "scale-100" : "scale-0"
        )}
      >
        <p
          ref={textRef}
          className={cn(
            "text-center text-xs text-black flex items-center justify-center gap-1",
            montserrat.className
          )}
        >
          <MdArrowOutward size={22} />
        </p>
      </div>
    </div>
  );
}

const ProjectPageCard = ({
  name,
  image,
  text,
  i,
  setIsVisible,
}: {
  name: string;
  image: string;
  text: string;
  i: number;
  setIsVisible: (a: boolean) => void;
}) => {
  return (
    <Link
      href={`/Projects/${name}`}
      className="w-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <motion.div
        initial={
          {
            // x: columnIndex % 2 === 0 ? -500 : 500,
          }
        }
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
          type: "just",
        }}
        viewport={{ once: false }}
        className="grid grid-cols-7 grid-rows-5 w-full col-span-1 h-[80vh] md:h-[60vh]"
      >
        <div
          className={cn(
            "col-span-4 row-span-3 w-full overflow-hidden ",
            i % 3 === 1
              ? "col-start-1 rounded-l-2xl"
              : "col-start-4 rounded-r-2xl",
            i % 2 === 0
              ? "row-start-3 rounded-b-2xl"
              : "row-start-1 rounded-t-2xl"
          )}
        >
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="object-cover h-full w-full"
          />
        </div>
        <div
          className={cn(
            "col-span-3 row-span-3 text-4xl md:text-5xl p-4 grid place-items-center",
            colors[(0 + i) % 3],
            i % 3 === 1
              ? "col-start-5 rounded-r-2xl"
              : "col-start-1 rounded-l-2xl",
            i % 2 === 0
              ? "row-start-3 rounded-b-2xl"
              : "row-start-1 rounded-t-2xl"
          )}
        >
          {name}
        </div>
        <div
          className={cn(
            "col-span-2 row-span-2 text-5xl grid place-items-center p-4 text-center",
            colors[(1 + i) % 3],
            i % 3 === 2
              ? "col-start-1 rounded-l-2xl"
              : "col-start-6 rounded-r-2xl",
            i % 2 === 0
              ? "row-start-1 rounded-t-2xl"
              : "row-start-4 rounded-b-2xl"
          )}
        >
          {i + 1}
        </div>
        <div
          className={cn(
            "col-span-5 row-span-2 row-start-4 p-4",
            colors[(2 + i) % 3],
            montserrat.className,
            i % 3 === 2
              ? "col-start-3 rounded-r-2xl"
              : "col-start-1 rounded-l-2xl",
            i % 2 === 0
              ? "row-start-1 rounded-t-2xl"
              : "row-start-4 rounded-b-2xl"
          )}
        >
          {text}
        </div>
      </motion.div>
    </Link>
  );
};

const colors = [
  "bg-ocd-yellow text-black",
  "bg-ocd-blue text-white",
  "bg-neutral-800 text-ocd-yellow",
];
