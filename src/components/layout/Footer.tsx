"use client";

import { FaFacebookF, FaInstagram, FaBehance } from "react-icons/fa6";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ScrollButton } from "../ui/buttons/scroll button/ScrollButton";
import { cn } from "@/lib/cn";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="text-white flex flex-col-reverse md:grid md:grid-cols-2 px-4 md:px-16 pb-10 mt-10 bg-neutral-900 pt-10">
      <p className="md:hidden block text-neutral-300 mt-10">
        © 2024. All rights reserved
      </p>
      <div className="col-span-1 flex-col flex justify-between py-4 h-[520px] md:h-auto md:mt-0 mt-10">
        <p className="text-xl">Contact</p>
        <div className="text-xl">
          <p className="text-4xl">We </p>
          <div className="text-6xl relative font-semibold flex">
            <div
              className={cn(
                "bg-gradient-to-b from-ocd-yellow to-ocd-blue bg-clip-text text-transparent font-bold"
              )}
            >
              <p>O</p>
              <p>C</p>
              <p>D</p>
            </div>
            <div className="">
              <div className="flex">
                <p>nly</p>
              </div>
              <div className="flex">
                <p>reate</p>
              </div>
              <div className="flex">
                <p>ifference.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <p>+20 127 792 4269</p>
          <p>ocdagencyy@gmail.com</p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/OCD.Digital.Marketing"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF size={30} />
          </a>
          <a
            href="https://www.instagram.com/ocd_digital_marketing_agency/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.behance.net/ocddigitalmarketing"
            target="_blank"
            rel="noreferrer"
          >
            <FaBehance size={30} />
          </a>
        </div>
      </div>
      {pathname !== "/Contact" && (
        <div className="col-span-1 col-start-2 border-ocd-yellow border-4 rounded-2xl w-full p-4 pb-10">
          <p className="text-xl">Hire Us</p>
          <p className="text-3xl font-semibold mt-6">
            Lets Create a project together ?
          </p>
          <div className="space-y-6">
            <div className="grid w-full items-center gap-1.5 mt-6">
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input
                className="bg-neutral-900 rounded-md border-neutral-500 placeholder:text-neutral-300"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-lg">
                Your message
              </Label>
              <Textarea
                className="bg-neutral-900 rounded-md border-neutral-500 placeholder:text-neutral-300"
                placeholder="Type your message here."
                id="message"
              />
            </div>
            <ScrollButton className="font-semibold rounded-full w-full bg-ocd-blue text-xl py-4 border-4 border-ocd-blue">
              Let&apos;s Collaborate!
            </ScrollButton>
          </div>
        </div>
      )}
      <p className="hidden md:block col-span-2 text-neutral-300">
        © 2024. All rights reserved
      </p>
    </footer>
  );
};
