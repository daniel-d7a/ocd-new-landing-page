import { cn } from "@/lib/cn";
import { montserrat } from "@/lib/fonts";
import Image from "next/image";
import megaphone from "@/assets/megaphone-3d-icon-png.png";
import { Count } from "../ui/countUp";

export const Hero = () => {
  return (
    <section className="mx-16 mt-16 mb-10">
      <div className="grid grid-cols-3">
        <div className="text-8xl font-semibold space-y-4 col-span-2">
          <h1>Design, Develop,</h1>
          <h1 className="flex gap-2">
            Market{" "}
            <div className="bg-ocd-yellow rounded-full px-6 pb-2 text-black rotate-12 mt-6">
              experts
            </div>
          </h1>
          <div className=" flex items-start justify-between pr-14 pt-16">
            <Count end={40} text="succesful event" />
            <Count end={150} text="ad campaign" />
            <Count end={100} text="completed project" />
            <Count end={20} text="satisfied client" />
          </div>
        </div>
        <div>
          <p className={cn("text-xl", montserrat.className)}>
            We design, mevelop and market for companies who aspire to be #1 in
            thier industry
          </p>
          <Image
            src={megaphone}
            alt="megaphone"
            width={400}
            className="-scale-x-100 rotate-12 mt-10"
          />
        </div>
      </div>
    </section>
  );
};
