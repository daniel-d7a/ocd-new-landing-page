"use client";
import "./globals.css";
import { recoleta } from "@/lib/fonts";
import { cn } from "@/lib/cn";
import { Metadata } from "next";
import { Suspense, useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "OCD",
//   description: "OCD landing page",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const moveInterval = 25; // Adjust this value to change the interval (in milliseconds)

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
  return (
    <html lang="en">
      <body
        onMouseMove={handleMouseMove}
        className={cn(
          "max-w-[100vw] md:max-w-full min-h-screen bg-neutral-900 overflow-x-hidden relative",
          recoleta.className
        )}
      >
        {children}
        <div
          id="ring"
          // ref={ringRef}
          className="hidden md:block size-10 rounded-full absolute top-0 left-0 bg-transparent border-2 border-ocd-blue pointer-events-none"
        />
        <div
          id="dot"
          // ref={cursorRef}
          className="hidden md:block size-2 rounded-full absolute top-0 left-0 bg-ocd-yellow pointer-events-none"
        />
      </body>
    </html>
  );
}
