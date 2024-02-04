"use client";

import Link from "next/link";
import { FlipButton } from "../ui/buttons/flip button/flipButton";
import logo from "@/assets/logo.png";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenuAlt2 } from "react-icons/hi";

export const NavBar = () => {
  const listItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/About">About</Link>
      </li>
      <li>
        <Link href="/Services">Services</Link>
      </li>
      <li>
        <Link href="/Contact">Contact</Link>
      </li>
    </>
  );
  return (
    <>
      {/* mobile navbar */}
      <nav className="md:hidden text-lg group/card flex items-center justify-between mx-4 px-6 bg-neutral-800 rounded-3xl py-2 mt-6">
        <div className="relative z-0">
          <Image className="" src={logo} alt="logo" width={50} />
        </div>

        <div>
          <Sheet>
            <SheetTrigger>
              <HiMenuAlt2 className="-scale-x-100 mt-2" size={24} />
            </SheetTrigger>
            <SheetContent className="bg-neutral-900 border-none">
              <SheetHeader>
                <SheetTitle className="ml-4">
                  <Image className="" src={logo} alt="logo" width={50} />
                </SheetTitle>
              </SheetHeader>
              <SheetDescription className="mt-10">
                <ul className="text-2xl space-y-6 ml-4">{listItems} </ul>
                <div className="relative z-0 mt-6">
                  <FlipButton className="border-2 rounded-full border-ocd-yellow text-2xl h-12 w-28">
                    Hire Us
                  </FlipButton>
                </div>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      {/* desktop navbar */}
      <nav className="hidden text-lg group/card md:flex items-center justify-between mx-10 px-6 bg-neutral-800 rounded-3xl py-2 mt-6">
        <div className="relative z-0">
          <Image className="" src={logo} alt="logo" width={70} />
        </div>
        <ul className="flex items-center justify-center gap-8 relative z-0">
          {listItems}
        </ul>
        <div className="relative z-0">
          <FlipButton className="border-2 rounded-full border-ocd-yellow text-xl h-10 w-24">
            Hire Us
          </FlipButton>
        </div>
      </nav>
    </>
  );
};
