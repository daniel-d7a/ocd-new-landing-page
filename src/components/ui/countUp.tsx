"use client";

import CountUp from "react-countup";
export const Count = ({ end, text }: { end: number; text: string }) => {
  return (
    <CountUp
      delay={0}
      suffix="+"
      start={0}
      end={end}
      duration={2.75}
      separator=","
    >
      {({ countUpRef, getCountUp }) => (
        <div className="flex flex-col items-center justify-center">
          <span
            className="text-ocd-yellow text-5xl font-normal"
            ref={countUpRef}
          />
          <p className="text-2xl font-normal w-full text-center">{text}</p>
        </div>
      )}
    </CountUp>
  );
};
