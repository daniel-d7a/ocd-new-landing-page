"use client";
import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/NavBar";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { BsFillTriangleFill } from "react-icons/bs";
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
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [showBtn, setShowBtn] = useState(false);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis(({ scroll, progress }) => {
    setShowBtn(scroll > 200);
    setProgress(progress);
  });

  return (
    <ReactLenis root>
      <AnimatePresence>
        <main className="fixed flex top-0 h-[100dvh] w-[100vw] animation-parent z-50 pointer-events-none">
          {Array(8)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute w-[100vw] h-[25dvh] bg-neutral-700 ",
                  i % 2 === 0
                    ? i % 4 !== 0
                      ? "bg-ocd-blue"
                      : "bg-ocd-yellow"
                    : "bg-neutral-700",
                  i % 2 !== 0 && "z-20",
                  positions[i]
                )}
                style={{
                  transform: "translateX(-110vw)",
                  animation:
                    "slideTransition 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
        </main>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, x: 0, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 0, y: 50 }}
          transition={{ delay: 0.6 }}
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
