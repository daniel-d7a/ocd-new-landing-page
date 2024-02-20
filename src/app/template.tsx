"use client";
import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/NavBar";
import { cn } from "@/lib/cn";
import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { BsFillTriangleFill } from "react-icons/bs";
import { recoleta } from "@/lib/fonts";
import styles from "./transition.module.css";
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [showBtn, setShowBtn] = useState(false);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis(({ scroll, progress }) => {
    setShowBtn(scroll > 200);
    setProgress(progress);
  });

  const [dimensions, setDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <ReactLenis root>
      {dimensions.width != null && (
        <>
          <p className={cn(recoleta.className, styles.textSlideUpAnimation)}>
            {pathname.split("/").at(-1) || "Home"}
          </p>
          <SVG {...(dimensions as { width: number; height: number })} />
        </>
      )}

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
            showBtn ? "bottom-20 md:bottom-10" : "md:-bottom-12 -bottom-16"
          )}
        >
          <BsFillTriangleFill />
        </div>
      </motion.div>
    </ReactLenis>
  );
}

const SVG = ({ height, width }: { height: number; width: number }) => {
  const [curveture, setCurveture] = useState(-200);

  const initialPath = `
        M0 200 
        Q${width / 2} ${curveture} ${width} 200
        L${width} ${height + 600}
        Q${width / 2} ${height + 400 + curveture} 0 ${height + 600}
        Z
    `;

  useEffect(() => {
    async function animateSvg() {
      await animate(-200, 0, {
        onUpdate: setCurveture,
        duration: 0.35,
        ease: [0.76, 0, 0.24, 1],
      });
      await new Promise((resolve) => setTimeout(resolve, 100));
      await animate(0, 200, {
        onUpdate: setCurveture,
        duration: 0.35,
        ease: [0.76, 0, 0.24, 1],
      });
    }

    animateSvg();
  }, []);

  return (
    <svg className={styles.svg}>
      <path d={initialPath} fill={"#404040"} />
    </svg>
  );
};
