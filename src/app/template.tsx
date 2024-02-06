"use client";
import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/NavBar";
import { cn } from "@/lib/cn";
import { stagger, useAnimate, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { BsFillTriangleFill } from "react-icons/bs";
export default function Template({ children }: { children: React.ReactNode }) {
  const [scope, animate] = useAnimate();

  const pathname = usePathname();

  const animation = {
    initial: {
      x: "-115%",
    },
    transition: {
      ease: [0.83, 0, 0.17, 1],
    },
  };

  useEffect(() => {
    async function slide() {
      if (!scope?.current) return;
      await animate(
        ".animation-parent > div",
        { x: "0%" },
        {
          delay: stagger(0.05),
          duration: 0.2,
        }
      );
      await animate(
        ".animation-parent > div",
        { x: "115%" },
        { delay: stagger(0.05, { startDelay: 0.3 }), duration: 0.2 }
      );
    }
    slide();
  }, [animate, scope]);

  const positions = [
    "top-0",
    "top-[5dvh]",
    "top-[25dvh]",
    "top-[30dvh]",
    "top-[50dvh]",
    "top-[55dvh]",
    "top-[75dvh]",
    "top-[80dvh]",
  ];

  const [showBtn, setShowBtn] = useState(false);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis(({ scroll, progress }) => {
    setShowBtn(scroll > 200);
    setProgress(progress);
  });

  return (
    <ReactLenis root>
      <AnimatePresence>
        <motion.main
          ref={scope}
          className="fixed top-0 left-0 h-[100dvh] w-[100vw] animation-parent z-50 pointer-events-none"
        >
          {Array(8)
            .fill("")
            .map((_, i) => (
              <motion.div
                key={i}
                {...animation}
                className={cn(
                  "absolute w-[100vw] h-[25vh]",
                  i % 2 === 0
                    ? i % 4 !== 0
                      ? "bg-ocd-blue"
                      : "bg-ocd-yellow"
                    : "bg-neutral-800",
                  i % 2 !== 0 && "z-20",
                  positions[i]
                )}
              ></motion.div>
            ))}
        </motion.main>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, x: 0, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 0, y: 50 }}
          transition={{ delay: 1.3 }}
        >
          <NavBar />
          {children}
          <Footer />
          <div
            onClick={() => {
              lenis.scrollTo(0, { duration: 2 * progress });
            }}
            className={cn(
              "fixed right-10 transition-all text-white bg-ocd-blue p-4 rounded-full cursor-pointer ",
              showBtn ? "bottom-10" : "-bottom-12"
            )}
          >
            <BsFillTriangleFill />
          </div>
        </motion.div>
      </AnimatePresence>
    </ReactLenis>
  );
}
