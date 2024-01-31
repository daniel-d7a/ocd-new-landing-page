import { cn } from "@/lib/cn";
import { montserrat } from "@/lib/fonts";
import Image from "next/image";
import megaphone from "@/assets/megaphone-3d-icon-png.png";
import { Count } from "../ui/countUp";

export const Hero = () => {
  return (
    <section className="px-6 md:mx-16 mt-16 mb-10 grid grid-cols-3 grid-rows-2 md:justify-normal">
      <div className="flex flex-col items-center justify-center md:block text-7xl md:text-8xl font-semibold md:space-y-4 col-span-3 md:col-span-2">
        <h1 className="w-min">Design, Develop,</h1>
        <h1 className="w-min flex flex-col md:flex-row gap-2">
          Market
          <div className="bg-ocd-yellow rounded-full w-min -ml-4 md:ml-0 px-6 pb-2 text-black rotate-12 mt-6">
            experts
          </div>
        </h1>
      </div>
      <div className="col-span-3 md:col-span-2 flex md:flex-row flex-col items-center gap-8 md:gap-0 md:items-start justify-between md:pr-14 pt-0 md:pt-16">
        <Count end={40} text="succesful event" />
        <Count end={150} text="ad campaign" />
        <Count end={100} text="completed project" />
        <Count end={20} text="satisfied client" />
      </div>
      <div className="col-span-3 md:col-span-1 md:row-span-2 md:row-start-1 md:col-start-3 mt-6">
        <p className={cn("text-xl", montserrat.className)}>
          We design, develop and market for companies who aspire to be #1 in
          thier industry
        </p>
        <Image
          src={megaphone}
          alt="megaphone"
          width={400}
          className="w-11/12 md:w-full -scale-x-100 rotate-12 md:mt-10"
        />
      </div>
    </section>
  );
};
