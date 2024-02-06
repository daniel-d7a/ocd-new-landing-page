import { Branding } from "./Projects/Branding";
import { Design } from "./Projects/Design";

export const Projects = () => {
  return (
    <section className="py-10 md:block flex flex-col ">
      <p className="text-4xl md:text-5xl font-semibold text-center">Our Work</p>
      <Design />
      <Branding />
    </section>
  );
};
