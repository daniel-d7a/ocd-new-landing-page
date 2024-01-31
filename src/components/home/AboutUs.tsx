import { Section2 } from "./atoms/Section2";
import { Section1 } from "./atoms/Section1";

export const AboutUs = () => {
  return (
    <section className="py-6 px-6 md:px-16 md:-mt-24">
      <p className="text-4xl md:text-5xl font-semibold text-center mb-10">
        What is OCD?
      </p>
      <Section1 />
      <Section2 />
    </section>
  );
};
