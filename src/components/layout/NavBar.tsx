"use client";

import Link from "next/link";
import { FlipButton } from "../ui/buttons/flip button/flipButton";
import logo from "@/assets/logo.png";
import Image from "next/image";

export const NavBar = () => {
  return (
    <nav className="text-lg group/card flex items-center justify-between mx-10 px-6 bg-neutral-800 rounded-3xl py-2 mt-6">
      <div className="relative z-0">
        <Image className="" src={logo} alt="logo" width={70} />
      </div>
      <ul className="flex items-center justify-center gap-8 relative z-0">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="relative z-0">
        <FlipButton className="border-2 rounded-full border-ocd-yellow">
          Hire Us
        </FlipButton>
      </div>
    </nav>
  );
};
