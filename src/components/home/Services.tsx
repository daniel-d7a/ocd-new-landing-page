"use client";

import { cn } from "@/lib/cn";
import { montserrat } from "@/lib/fonts";
import { ServiceCard } from "./atoms/ServiceCard";
import laptop from "@/assets/laptop.png";
import writing from "@/assets/writing.png";
import abstract from "@/assets/abstract.png";
import social from "@/assets/social-icons.png";
import { useState } from "react";
import { motion } from "framer-motion";

export const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <motion.section
      viewport={{ amount: 0.7 }}
      onViewportEnter={() => {
        document.querySelector("body")!.style.backgroundColor = "#FFD900";
        document.querySelector("body")!.style.color = "#000000";
      }}
      onViewportLeave={() => {
        document.querySelector("body")!.style.backgroundColor = "#000000";
        document.querySelector("body")!.style.color = "#FFFFFF";
      }}
      className="px-6 md:px-16 py-10"
    >
      <p className="text-4xl md:text-5xl font-semibold text-center">
        What do we offer?
      </p>
      <div className="mt-6">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <ServiceCard
              setSelectedIndex={setSelectedIndex}
              key={service.name}
              {...service}
              index={i}
              active={i === selectedIndex}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const services = [
  {
    name: "Design",
    slogan: "Crafting Seamless Experiences, Inspiring Connections",
    image: abstract,
    text: "At UX/UI Brilliance, we blend artistry with functionality. From captivating visuals to user-centric interfaces, we design digital experiences that leave a lasting impression, fostering meaningful connections between brands and users.",
  },
  {
    name: "Copywriting",
    slogan: "Crafting Words, Inspiring Action.",
    image: writing,
    text: "Our Copywriting Excellence service empowers brands with compelling narratives. From web content to marketing copy, we turn words into powerful tools that resonate and drive action.",
  },
  {
    name: "Social Media",
    slogan: "Igniting Brands in the Social Sphere.",
    image: social,
    text: "Social Media Mastery transforms your brand's online presence. We curate engaging content, run targeted campaigns, and boost your social influence for maximum impact.",
  },
  {
    name: "SEO",
    slogan: "Navigate the Digital Landscape.",
    image: laptop,
    text: "SEO Wizardry ensures your digital success. We optimize your online visibility, implement strategic keywords, and secure top search rankings, driving organic traffic to your doorstep.",
  },
];
