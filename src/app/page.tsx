"use client";

import { Testmonials } from "@/components/home/Testmonials";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Projects } from "@/components/home/Projects";
import { AboutUs } from "@/components/home/AboutUs";
import { Clients } from "@/components/home/Clients";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <Clients />
      <Testmonials />
    </main>
  );
}
