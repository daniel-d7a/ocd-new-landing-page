"use client";
import { useScroll, MotionValue } from "framer-motion";
import { ElementRef, useRef } from "react";
import { cn } from "@/lib/cn";
import { Text } from "@/components/ui/UpText";
import { Card } from "../ui/AboutUsCard";
import { montserrat, recoleta } from "@/lib/fonts";
import ocd1 from "@/assets/new images/OCD1.png";
import ocd2 from "@/assets/new images/OCD2.png";
import ocd3 from "@/assets/new images/OCD3.png";
import einstein from "@/assets/new images/Einstein.png";

export const AboutUs = () => {
  const sectionRef = useRef<ElementRef<"section">>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  return (
    <section
      id="section2"
      ref={sectionRef}
      className={cn("py-6 px-6 md:px-16 pb-0 mb-20 md:-mt-24")}
    >
      <p
        className={cn(
          "sticky top-10 text-4xl md:text-5xl font-semibold text-center mb-10"
        )}
      >
        Who are we?
      </p>

      <div
        className={cn(
          "min-h-[400vh] px-2 md:px-20 flex flex-col text-white snap-y snap-mandatory",
          montserrat.className
        )}
      >
        {cardsContent.map((content, i) => (
          <Card
            parentYProgress={scrollYProgress}
            image={content.image}
            index={i}
            key={i}
          >
            {content.content}
          </Card>
        ))}
      </div>
    </section>
  );
};

const cardsContent = [
  {
    content: (y: MotionValue<number>) => (
      <div>
        <Text
          y={y}
          className={cn(
            "text-2xl md:text-3xl mb-8 font-semibold",
            recoleta.className
          )}
        >
          What is the first thing that came to your mind when you read “OCD”?
        </Text>

        <Text y={y} className="text-base md:text-xl mb-4">
          When you saw OCD did you think of a mental illness, a title
          abbreviation, or just three letters together? They all fit. But we see
          it differently.
        </Text>
        <Text y={y} className="text-base md:text-xl mb-4">
          We embrace it to reflect our personalities—adapting with skill,
          passion, and creativity.
        </Text>
        {/* <div className="my-4 space-y-2">
          <Text y={y}>A mental illness?</Text>
          <Text y={y}>An abbreviation for a title?</Text>
          <Text y={y}>Or just three letters close together?</Text>
        </div>
        <div className="hidden md:block mb-4">
          <Text y={y} className="mb-2">
            They all make sense.
          </Text>
          <Text y={y}>
            That&apos;s how you might have read it, but we didn&apos;t write
          </Text>
          <Text y={y}>
            it that way. We mean a lot by it. We decided to look at it
          </Text>
          <Text y={y}>
            from a side that expresses our personalities, which do
          </Text>
          <Text y={y}>
            not take things as they are, but rather adapt things to keep pace
            with their skill, passion, and creative thought.
          </Text>
        </div>
        <div className="md:hidden block mb-4">
          <Text y={y} className="mb-2">
            They all make sense.
          </Text>
          <Text y={y}>
            That&apos;s how you might have read it, but we didn&apos;t write it
            that way. We mean
          </Text>
          <Text y={y}>
            a lot by it. We decided to look at it from a side that expresses our
          </Text>
          <Text y={y}>
            personalities, which do not take things as they are, but rather
            adapt things to
          </Text>
          <Text y={y}>
            keep pace with their skill, passion, and creative thought.
          </Text>
        </div> */}
      </div>
    ),
    image: einstein.src,
  },
  {
    content: (y: MotionValue<number>) => (
      <div>
        {" "}
        <Text y={y}>We are OCD, so we are:</Text>
        <Text
          y={y}
          className={cn("text-5xl mb-8 font-semibold", recoleta.className)}
        >
          Cautious
        </Text>
        <Text y={y} className="text-base md:text-xl mb-4">
          We never risk failure. We take steady, confident and carefully
          considered steps towards the success of your brand.
        </Text>
      </div>
    ),
    image: ocd1.src,
  },
  {
    content: (y: MotionValue<number>) => (
      <div>
        <Text y={y}>We are OCD, so we are:</Text>
        <Text
          y={y}
          className={cn("text-5xl mb-8 font-semibold", recoleta.className)}
        >
          Attentive
        </Text>
        <Text y={y} className="text-base md:text-xl">
          Before you became our client, we were your followers. Our observation
          and scrutiny of every detail makes us the safe house for your brand.
        </Text>
        <Text y={y} className="text-base md:text-xl mt-4 mb-4">
          Our work based on every small detail to ultimately produce successful
          work from all angles and by all standards.
        </Text>
      </div>
    ),
    image: ocd2.src,
  },
  {
    content: (y: MotionValue<number>) => (
      <div>
        <Text y={y}>We are OCD, so we are:</Text>
        <Text
          y={y}
          className={cn("text-5xl mb-8 font-semibold", recoleta.className)}
        >
          Empathetic
        </Text>
        <Text y={y} className="text-base md:text-xl">
          We are not the audience that will applaud you in the end. We are the
          friend who will walk the path with you step by step.
        </Text>
        <Text y={y} className="text-base md:text-xl mt-4 mb-4">
          We feel what you feel and dream what you dream. Your brand&apos;s
          problems affect us, and its success makes us happy as well.
        </Text>
      </div>
    ),
    image: ocd3.src,
  },
];
