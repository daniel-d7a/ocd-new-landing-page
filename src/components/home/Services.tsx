"use client";

import camera1 from "@/assets/new images/camera.png";
import camera2 from "@/assets/new images/cam1.png";
import branding from "@/assets/new images/Branding.png";
import content from "@/assets/new images/Content-Creator.png";
import marketing from "@/assets/new images/Digital Marketing.png";
import software from "@/assets/new images/software.png";
import mediaBuying from "@/assets/new images/Media-buying.png";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Services = () => {
  return (
    <motion.section
      viewport={{ amount: 0.2 }}
      onViewportEnter={() => {
        document.querySelector("body")!.style.backgroundColor = "#FFD900";
        document.querySelector("body")!.style.color = "#000000";
      }}
      onViewportLeave={() => {
        document.querySelector("body")!.style.backgroundColor = "#000000";
        document.querySelector("body")!.style.color = "#FFFFFF";
      }}
      className="px-6 md:px-16 py-10 md:mb-40 mt-60 md:w-screen overflow-x-hidden"
    >
      <p className="text-4xl md:text-5xl font-semibold text-center">
        What do we offer?
      </p>
      <div className="gap-4 hidden md:grid grid-cols-3 gap-y-[14vw] 2xl:gap-y-[18vw] text-white mt-[20vw] 2xl:mt-[26vw]">
        <Link
          href={"/Services#media_production"}
          className="flex flex-col justify-end  h-60 p-6 w-full rounded-xl grayscale hover:grayscale-0 bg-ocd-yellow text-black shadow-xl drop-shadow-xl transition-all"
        >
          <div className="flex">
            <Image
              className="relative w-10/12 left-[40%] -translate-x-2/3 -translate-y-12"
              src={camera1}
              alt="cam1"
            />
            <Image
              className="absolute scale-125 translate-x-20 translate-y-16"
              src={camera2}
              alt="cam1"
            />
          </div>
          <p className="text-4xl text-center font-semibold capitalize">
            Media Production
          </p>
        </Link>

        <Link
          href={"/Services#branding"}
          className="flex flex-col justify-end h-60 p-6 w-full rounded-xl grayscale hover:grayscale-0 bg-ocd-blue text-white shadow-xl drop-shadow-xl transition-all"
        >
          <Image
            className="relative scale-[1.5] -translate-y-12"
            src={branding}
            alt="branding"
          />
          <p className="text-4xl text-center font-semibold capitalize">
            Branding
          </p>
        </Link>

        <Link
          href={"/Services#content_creation"}
          className="flex flex-col justify-end h-60 p-6 w-full rounded-xl grayscale hover:grayscale-0 bg-ocd-yellow text-black shadow-xl drop-shadow-xl transition-all"
        >
          <Image
            className="relative -translate-y-10 scale-[2]"
            src={content}
            alt="branding"
          />
          <p className="text-4xl text-center font-semibold capitalize">
            content creation
          </p>
        </Link>
        <Link
          href={"/Services#marketing"}
          className="flex flex-col justify-end h-60 p-6 w-full rounded-xl grayscale hover:grayscale-0 bg-ocd-blue text-white shadow-xl drop-shadow-xl transition-all"
        >
          <Image
            className="relative -translate-y-16 2xl:-translate-y-10 -translate-x-8 scale-[1.4]"
            src={marketing}
            alt="branding"
          />
          <p className="text-4xl text-center font-semibold capitalize">
            marketing
          </p>
        </Link>
        <Link
          href={"/Services#software"}
          className="flex flex-col justify-end  h-60 p-6 w-full rounded-xl grayscale hover:grayscale-0 bg-ocd-yellow text-black shadow-xl drop-shadow-xl transition-all"
        >
          <Image
            className="relative scale-[1.7] -translate-y-20 -translate-x-6"
            src={software}
            alt="branding"
          />
          <p className="text-4xl text-center font-semibold capitalize">
            Software
          </p>
        </Link>
        <Link
          href={"/Services#media_buying"}
          className="flex flex-col justify-end h-60 p-6 w-full rounded-xl grayscale hover:grayscale-0 bg-ocd-blue text-white shadow-xl drop-shadow-xl transition-all"
        >
          <Image
            className="relative scale-[1.2] -translate-y-16 translate-x-1"
            src={mediaBuying}
            alt="mediaBuying"
          />
          <p className="text-4xl text-center font-semibold capitalize">
            media buying
          </p>
        </Link>
      </div>

      <div className=" md:hidden block mt-[60vw] text-white">
        <Link
          href={"/Services#media_production"}
          className="flex flex-col justify-end  h-52 p-6 w-full rounded-xl grayscale hover:grayscale-0 bg-ocd-yellow text-black shadow-xl drop-shadow-xl transition-all"
        >
          <div className="flex relative">
            <Image
              className="relative w-10/12 left-[40%] -translate-x-2/3 -translate-y-4"
              src={camera1}
              alt="cam1"
            />
            <div className="w-1/2 h-full absolute right-[2vw] top-[24vw] overflow-x-clip">
              <Image className=" scale-[3.2]" src={camera2} alt="cam1" />
            </div>
          </div>
          <p className="text-4xl text-center font-semibold">Media Production</p>
        </Link>

        <Link
          href={"/Services#branding"}
          className="flex flex-col justify-end  h-60 p-6 w-full rounded-xl mt-[66vw] grayscale hover:grayscale-0 bg-ocd-blue text-white shadow-xl drop-shadow-xl transition-all"
        >
          <Image
            className="relative -translate-y-16 scale-[1.7]"
            src={branding}
            alt="branding"
          />
          <p className="text-4xl text-center font-semibold capitalize">
            Branding
          </p>
        </Link>

        <Link
          href={"/Services#content_creation"}
          className="flex flex-col justify-end h-60 p-6 w-full rounded-xl mt-[58vw] grayscale hover:grayscale-0 bg-ocd-yellow text-black shadow-xl drop-shadow-xl transition-all"
        >
          <Image
            className="relative -translate-y-12 scale-[2.2]"
            src={content}
            alt="branding"
          />
          <p className="text-4xl text-center font-semibold capitalize">
            content creation
          </p>
        </Link>

        <Link
          href={"/Services#marketing"}
          className="flex flex-col justify-end  h-60 p-6 w-full rounded-xl mt-[44vw] grayscale hover:grayscale-0 bg-ocd-blue text-white shadow-xl drop-shadow-xl transition-all"
        >
          <Image
            className="relative -translate-y-24 -translate-x-8 scale-[1.6]"
            src={marketing}
            alt="branding"
          />
          <p className="text-4xl text-center font-semibold capitalize">
            marketing
          </p>
        </Link>

        <Link
          href={"/Services#software"}
          className="flex flex-col justify-end h-60 p-6 w-full rounded-xl mt-[48vw] grayscale hover:grayscale-0 bg-ocd-yellow text-black shadow-xl drop-shadow-xl transition-all"
        >
          <Image
            className="relative scale-[2.4] -translate-y-24 -translate-x-6"
            src={software}
            alt="branding"
          />
          <p className="text-4xl text-center font-semibold capitalize">
            Software
          </p>
        </Link>
        <Link
          href={"/Services#media_buying"}
          className="flex flex-col justify-end  h-60 p-6 w-full rounded-xl mt-[40vw] grayscale hover:grayscale-0 bg-ocd-blue text-white shadow-xl drop-shadow-xl transition-all"
        >
          <Image
            className="relative scale-[1.4] -translate-y-14"
            src={mediaBuying}
            alt="branding"
          />
          <p className="text-4xl text-center font-semibold capitalize">
            media buying
          </p>
        </Link>
      </div>
    </motion.section>
  );
};
