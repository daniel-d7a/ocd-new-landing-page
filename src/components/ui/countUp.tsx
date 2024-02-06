"use client";

import { animate } from "framer-motion";
import { useEffect, useState } from "react";

export const Count = ({
  end,
  text,
  delay,
}: {
  end: number;
  text: string;
  delay?: number;
}) => {
  const [x, setX] = useState(0);
  useEffect(() => {
    animate(0, end, {
      duration: 2,
      ease: [0, 1, 0, 1.2],
      onUpdate: (x) => {
        setX(x);
        console.log("x => ", x);
      },
      delay: delay ?? 2,
    });
  }, [delay, end]);

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-ocd-yellow text-5xl font-normal">
        {x.toFixed(0)}+
      </span>
      <p className="text-2xl font-normal w-full text-center">{text}</p>
    </div>
  );
};
