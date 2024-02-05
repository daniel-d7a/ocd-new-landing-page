"use client";
import { useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/cn";
import img from "@/assets/megaphone2.png";
import Image, { StaticImageData } from "next/image";
import { Children, ReactNode } from "react";

export const Card = ({
  parentYProgress,
  index,
  children,
  image,
}: {
  parentYProgress: MotionValue<any>;
  index: number;
  image: StaticImageData | string;
  children: (y: MotionValue<number>) => ReactNode;
}) => {
  // 0.2, 0.25, 0.35, 0.4
  // 0.4, 0.45, 0.55, 0.6
  const startUp = index * 0.2 + 0.2;
  const endUp = startUp + 0.05;
  const startDown = endUp + 0.1;
  const endDown = startDown + 0.05;

  const textPosition = useTransform(
    parentYProgress,
    [startUp, endUp, startDown, endDown],
    [300, 0, 0, -300]
  );

  const imagePosition = useTransform(
    parentYProgress,
    [startUp, endUp, startDown, endDown],
    [500, 0, 0, -500]
  );

  return (
    <div
      className={cn(
        " sticky top-20 md:flex w-full justify-center h-[90dvh] py-6 md:py-14 gap-10",
        index % 2 === 0 && "flex-row-reverse"
      )}
    >
      <div className=" md:text-lg w-full md:w-3/5">
        {children(textPosition)}
      </div>
      <div className=" grid place-items-start w-full md:w-2/5  overflow-hidden">
        <motion.div
          style={{
            x: imagePosition,
          }}
          initial={{ filter: "blur(20px)" }}
          whileInView={{ filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full h-full"
        >
          <Image
            className={cn("object-cover w-full")}
            src={image}
            alt=""
            width={300}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};
