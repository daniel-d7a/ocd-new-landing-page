import { Scroller } from "./atoms/Scroller";
import Image from "next/image";

import realEstate1 from "@/assets/logos - Copy/real estate/logo1.png";
import realEstate2 from "@/assets/logos - Copy/real estate/logo2.png";
import realEstate3 from "@/assets/logos - Copy/real estate/logo3.png";
import realEstate4 from "@/assets/logos - Copy/real estate/logo5.png";
import realEstate5 from "@/assets/logos - Copy/real estate/logo6.png";
import realEstate6 from "@/assets/logos - Copy/real estate/logo10.png";
import realEstate7 from "@/assets/logos - Copy/real estate/logo21.png";

import logo1 from "@/assets/logos - Copy/other/1.png";
import logo2 from "@/assets/logos - Copy/other/2.png";
import logo3 from "@/assets/logos - Copy/other/3.png";
import logo4 from "@/assets/logos - Copy/other/4.5.png";
import logo5 from "@/assets/logos - Copy/other/4.6.png";
import logo6 from "@/assets/logos - Copy/other/4.png";
import logo7 from "@/assets/logos - Copy/other/5.png";
import logo8 from "@/assets/logos - Copy/other/6.png";
import logo9 from "@/assets/logos - Copy/other/7.png";
import logo10 from "@/assets/logos - Copy/other/100.png";
import logo11 from "@/assets/logos - Copy/other/101.png";
import logo12 from "@/assets/logos - Copy/other/102.png";
import logo13 from "@/assets/logos - Copy/other/103.png";
import logo14 from "@/assets/logos - Copy/other/104.png";
import logo15 from "@/assets/logos - Copy/other/104 (2).png";

export const Clients = () => {
  return (
    <section className="my-20 py-20 md:py-40">
      <p className="text-white mx-6 text-4xl md:text-5xl font-semibold text-center mb-24 md:mb-16">
        Our Clients
      </p>
      {/* for large screens */}
      <div className="hidden md:block space-y-32">
        {/* real estate clients */}
        <Scroller baseVelocity={-75} className="h-40" snapEnd={-1930}>
          <Image
            className="scale-[2.5] mx-10"
            src={realEstate1}
            alt="realEstate1"
          />
          <Image
            className="scale-[1.7] mx-10"
            src={realEstate2}
            alt="realEstate2"
          />
          <Image
            className="scale-[1.7] mx-10"
            src={realEstate3}
            alt="realEstate3"
          />
          <Image className="" src={realEstate4} alt="realEstate4" />
          <Image
            className="scale-[1.6] mx-10"
            src={realEstate5}
            alt="realEstate5"
          />
          <Image className="mx-6" src={realEstate6} alt="realEstate6" />
          <Image className="mx-6" src={realEstate7} alt="realEstate7" />
        </Scroller>
        {/* other logos */}
        <Scroller baseVelocity={75} className="h-40 grayscale" snapEnd={-3900}>
          <Image className="" src={logo1} alt="logo1" />
          <Image className="scale-[1.5] mx-10" src={logo2} alt="logo2" />
          <Image className="" src={logo3} alt="logo3" />
          <Image className="" src={logo4} alt="logo4" />
          <Image className="scale-[1.5] mx-10" src={logo5} alt="logo5" />
          <Image className="scale-[1.2] mx-6" src={logo6} alt="logo6" />
          <Image className="" src={logo7} alt="logo7" />
          <Image className="scale-[1.5] mx-6" src={logo8} alt="logo8" />
          <Image className="scale-[1.5] mx-6" src={logo9} alt="logo9" />
          <Image className="scale-[1.2] mx-6" src={logo10} alt="logo10" />
          <Image className="" src={logo11} alt="logo11" />
          <Image className="scale-[1.5] mx-6" src={logo12} alt="logo12" />
          <Image className="" src={logo13} alt="logo13" />
          <Image className="scale-[1.5] mx-6" src={logo14} alt="logo14" />
          <Image className="scale-[1.5] mx-6" src={logo15} alt="logo15" />
        </Scroller>
      </div>

      {/* for small screens */}
      <div className="md:hidden block space-y-16 mt-10">
        {/* real estate clients */}
        <Scroller baseVelocity={-75} className="h-24" snapEnd={-1200}>
          <Image
            className="scale-[2.5] mx-4"
            src={realEstate1}
            alt="realEstate1"
          />
          <Image
            className="scale-[1.7] mx-4"
            src={realEstate2}
            alt="realEstate2"
          />
          <Image
            className="scale-[1.7] mx-4"
            src={realEstate3}
            alt="realEstate3"
          />
          <Image className="" src={realEstate4} alt="realEstate4" />
          <Image
            className="scale-[1.6] mx-4"
            src={realEstate5}
            alt="realEstate5"
          />
          <Image className="mx-2" src={realEstate6} alt="realEstate6" />
          <Image className="mx-2" src={realEstate7} alt="realEstate7" />
        </Scroller>
        {/* other logos */}
        <Scroller baseVelocity={75} className="h-24 grayscale" snapEnd={-2480}>
          <Image className="" src={logo1} alt="logo1" />
          <Image className="scale-[1.5] mx-4" src={logo2} alt="logo2" />
          <Image className="" src={logo3} alt="logo3" />
          <Image className="" src={logo4} alt="logo4" />
          <Image className="scale-[1.5] mx-4" src={logo5} alt="logo5" />
          <Image className="scale-[1.2] mx-2" src={logo6} alt="logo6" />
          <Image className="" src={logo7} alt="logo7" />
          <Image className="scale-[1.5] mx-2" src={logo8} alt="logo8" />
          <Image className="scale-[1.5] mx-2" src={logo9} alt="logo9" />
          <Image className="scale-[1.2] mx-2" src={logo10} alt="logo10" />
          <Image className="" src={logo11} alt="logo11" />
          <Image className="scale-[1.5] mx-2" src={logo12} alt="logo12" />
          <Image className="" src={logo13} alt="logo13" />
          <Image className="scale-[1.5] mx-2" src={logo14} alt="logo14" />
          <Image className="scale-[1.5] mx-2" src={logo15} alt="logo15" />
        </Scroller>
      </div>
    </section>
  );
};
