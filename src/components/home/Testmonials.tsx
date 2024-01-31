import { InfiniteMovingCards } from "../ui/infinite-carousel";
import { CarouselItem } from "./atoms/CarouselItem";

export const Testmonials = () => {
  return (
    <section className="mb-16 bg-neutral-900 py-10">
      <p className="mx-6 text-4xl md:text-5xl font-semibold text-center mb-6">
        What people say about us?
      </p>
      <InfiniteMovingCards speed="slow">
        {testmonials.map((testmonial) => (
          <CarouselItem key={testmonial.name} item={testmonial} />
        ))}
      </InfiniteMovingCards>
    </section>
  );
};

const testmonials = [
  {
    name: "Sarah Thompson",
    quote:
      "The marketing wizards at XYZ Marketing transformed my online presence. Sarah's strategic touch brought my brand to life, and the results speak for themselves. A dynamic team dedicated to excellence!",
    title: "Digital Makeover",
  },
  {
    name: "John Rodriguez",
    quote:
      "Thrilled with the impact of Social Surge! XYZ Marketing's savvy strategies skyrocketed our social engagement. John and his team excel in driving results. Exceptional service, top-notch expertise!",
    title: "Social Surge",
  },
  {
    name: "Emily Chen",
    quote:
      "Kudos to XYZ Marketing! Emily led the charge in creating our Website Wonder. A sleek design, intuitive navigation, and increased traffic – an absolute game-changer for our business",
    title: "Website Wonder",
  },
  {
    name: "Michael Turner",
    quote:
      "XYZ Marketing nailed it with SEO Mastery! Michael's expertise and the team's dedication delivered outstanding results. Our website now enjoys top rankings, driving valuable organic traffic. Highly recommended!",
    title: "SEO Mastery",
  },
  {
    name: "Amanda Lewis",
    quote:
      "Amanda Lewis here, grateful for XYZ Marketing's exceptional work on Brand Elevation. Their innovative approach elevated our brand to new heights. A team dedicated to success – thank you!",
    title: "Brand Elevation",
  },
];
