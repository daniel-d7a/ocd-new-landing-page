"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/Card3d";
import { cn } from "@/lib/cn";
import { montserrat } from "@/lib/fonts";
import { useEffect, useState } from "react";

export function Section2() {
  const [heights, setHeights] = useState<string[]>([]);

  let _months = months;

  if (typeof window !== "undefined") {
    _months = window.innerWidth <= 425 ? months.slice(0, -1) : months;
  }

  /* if phone remove 1 item */
  const [viewMonths] = useState(_months);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeights(months.map(calcHeight));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-10 items-center ">
      <CardContainer className="col-span-2 inter-var">
        <CardBody className="grid grid-cols-2 -mr-[55%] gap-4 relative group/card md:mr-6 w-[90dvw] md:w-[400px] my-10 bg-neutral-800 p-6 h-[550px] rounded-3xl">
          <div
            className={cn(
              "p-4 bg-neutral-900 rounded-xl md:h-min min-h-40",
              montserrat.className
            )}
          >
            <CardItem
              translateZ="50"
              className="flex gap-2 items-center justify-stretch"
            >
              Total Revenue
            </CardItem>
            <CardItem
              translateZ="80"
              className="mt-2 text-lg font-bold flex gap-2 items-center justify-stretch"
            >
              $5,231.89
            </CardItem>
            <CardItem
              translateZ="30"
              className=" text-[10px] text-neutral-400 flex gap-2 items-center justify-stretch"
            >
              +20.1% from last month
            </CardItem>
          </div>
          <div
            className={cn(
              "p-4 bg-neutral-900 rounded-xl md:h-min min-h-40",
              montserrat.className
            )}
          >
            <CardItem
              translateZ="50"
              className="flex gap-2 items-center justify-stretch"
            >
              Sales
            </CardItem>
            <CardItem
              translateZ="80"
              className="mt-2 text-lg font-bold flex gap-2 items-center justify-stretch"
            >
              +1,234
            </CardItem>
            <CardItem
              translateZ="30"
              className=" text-[10px] text-neutral-400 flex gap-2 items-center justify-stretch"
            >
              +19% from last month
            </CardItem>
          </div>
          <div className="col-span-2 h-[330px] grid place-items-center bg-neutral-900 rounded-xl">
            <CardItem
              translateZ={50}
              className="h-72 flex items-end justify-between gap-2"
            >
              {viewMonths.map((month, i) => (
                <div
                  key={month}
                  className="h-full flex flex-col justify-end items-center gap-1"
                >
                  <div
                    style={{
                      height: heights[i] || calcHeight(),
                    }}
                    className="w-10 bg-neutral-100 rounded-md transition-all"
                  />
                  <p
                    className={cn(
                      "text-sm text-neutral-400",
                      montserrat.className
                    )}
                  >
                    {month}
                  </p>
                </div>
              ))}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <div className="col-span-2 md:col-span-1 md:w-5/6">
        <h2 className="text-3xl md:-ml-10 mb-6 font-semibold text-center">
          Unlock Your Brand Potential with OCD
        </h2>
        <ul className="space-y-2">
          <div className="ml-10 md:ml-0">
            <li className="flex items-center gap-2 -ml-10">
              <div className="text-ocd-yellow font-semibold border-4 border-ocd-yellow grid place-items-center size-10 rounded-full">
                1
              </div>
              <p className="text-lg">Strategic Marketing Solutions</p>
            </li>
            <p className="text-sm ml-6">
              Experience tailored marketing strategies crafted to maximize
              impact, ensuring your brand&apos;s strengths shine through.
            </p>
          </div>
          <div className="ml-10 md:ml-0">
            <li className="flex items-center gap-2 -ml-10">
              <div className="text-ocd-yellow font-semibold border-4 border-ocd-yellow grid place-items-center size-10 rounded-full">
                2
              </div>
              <p className="text-lg">Creative Branding Expertise </p>
            </li>
            <p className="text-sm ml-6">
              Harness the power of innovative design that captivates your
              audience and leaves a lasting impression.
            </p>
          </div>
          <div className="ml-10 md:ml-0">
            <li className="flex items-center gap-2 -ml-10">
              <div className="text-ocd-yellow font-semibold border-4 border-ocd-yellow grid place-items-center size-10 rounded-full">
                3
              </div>
              <p className="text-lg">Results-Driven Campaigns </p>
            </li>
            <p className="text-sm ml-6">
              Propel your brand forward with our results-driven campaigns,
              planned and executed to achieve success and exceed your marketing
              objectives.
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
}
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const calcHeight = () => `${Math.min(100, Math.random() * 80 + 20)}%`;
