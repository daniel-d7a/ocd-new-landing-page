"use client";
import { useEffect, useState } from "react";

export const DotCursor = () => {
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const moveInterval = 25; // Adjust this value to change the interval (in milliseconds)

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const currentTime = Date.now();
      if (currentTime - lastMoveTime > moveInterval) {
        setLastMoveTime(currentTime);
        const { pageX, pageY } = event;

        document.getElementById("dot")?.animate(
          {
            left: `${pageX - 6}px`,
            top: `${pageY - 30}px`,
          },
          { duration: 500, fill: "forwards" }
        );
        document.getElementById("ring")?.animate(
          {
            left: `${pageX - 22}px`,
            top: `${pageY - 47}px`,
          },
          { duration: 1000, fill: "forwards" }
        );
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastMoveTime]);
  return (
    <>
      <div
        id="ring"
        className="hidden md:block size-10 rounded-full absolute top-0 left-0 bg-transparent border-2 border-ocd-yellow pointer-events-none"
      />
      <div
        id="dot"
        className="hidden md:block size-2 rounded-full absolute top-0 left-0 bg-ocd-yellow pointer-events-none"
      />
    </>
  );
};
