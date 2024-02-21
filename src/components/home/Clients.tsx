import { Scroller } from "./atoms/Scroller";

import logo1 from "@/assets/logos/logo1.png";
import logo2 from "@/assets/logos/logo2.png";
import logo3 from "@/assets/logos/logo3.png";
import logo4 from "@/assets/logos/logo4.png";
import logo5 from "@/assets/logos/logo5.png";
import logo6 from "@/assets/logos/logo6.png";
import logo7 from "@/assets/logos/logo7.png";
import logo8 from "@/assets/logos/logo8.png";
import logo9 from "@/assets/logos/logo9.png";
import logo10 from "@/assets/logos/logo10.png";
import logo11 from "@/assets/logos/logo11.png";
import logo12 from "@/assets/logos/logo12.png";
import logo13 from "@/assets/logos/logo13.png";
import logo14 from "@/assets/logos/logo14.png";
import logo15 from "@/assets/logos/logo15.png";
import logo16 from "@/assets/logos/logo16.png";
import logo17 from "@/assets/logos/logo17.png";
import logo18 from "@/assets/logos/logo18.png";
import logo19 from "@/assets/logos/logo19.png";
import logo20 from "@/assets/logos/logo20.png";
import logo21 from "@/assets/logos/logo21.png";
import logo22 from "@/assets/logos/logo22.png";
import logo23 from "@/assets/logos/logo23.png";
import logo24 from "@/assets/logos/logo24.png";

import Image from "next/image";

export const Clients = () => {
  return (
    <section className="my-20 py-40 space-y-20">
      <p className="text-white mx-6 text-4xl md:text-5xl font-semibold text-center mb-16">
        Our Clients
      </p>
      <Scroller
        baseVelocity={75}
        className="h-40 origin-left "
        snapStart={-60}
        snapEnd={-1350}
      >
        <Image className="scale-[2.5]" src={logo1} alt="logo1" />
        <Image className="scale-[1.6] ml-10 mr-6" src={logo2} alt="logo2" />
        <Image className="scale-125" src={logo3} alt="logo3" />
        <Image src={logo4} alt="logo4" />
        <Image src={logo5} alt="logo5" />
        <Image className="scale-[1.4] mr-6 " src={logo6} alt="logo6" />
      </Scroller>
      <Scroller baseVelocity={-75} className="h-40 origin-left" snapStart={50}>
        <Image src={logo7} alt="logo7" />
        <Image src={logo8} alt="logo8" />
        <Image className="mx-6 scale-150" src={logo9} alt="logo9" />
        <Image src={logo10} alt="logo10" />
        <Image src={logo11} alt="logo11" />
        <Image src={logo12} alt="logo12" />
      </Scroller>
      <Scroller
        baseVelocity={0}
        className="h-40 -rotate-3 origin-left mt-40"
        snapStart={-30}
      >
        <Image src={logo13} alt="logo13" />
        <Image className="scale-150" src={logo14} alt="logo14" />
        <Image src={logo15} alt="logo15" />
        <Image className="scale-150" src={logo16} alt="logo16" />
        <Image className="scale-125" src={logo17} alt="logo17" />
        <Image src={logo18} alt="logo18" />
      </Scroller>
      <Scroller
        baseVelocity={-0}
        className="h-40  rotate-3 origin-left mt-10"
        snapStart={10}
      >
        <Image src={logo19} alt="logo19" />
        <Image className=" scale-125" src={logo20} alt="logo20" />
        <Image src={logo21} alt="logo21" />
        <Image className="scale-125" src={logo22} alt="logo22" />
        <Image className="scale-150 mx-6" src={logo23} alt="logo23" />
        <Image src={logo24} alt="logo24" />
      </Scroller>
    </section>
  );
};
