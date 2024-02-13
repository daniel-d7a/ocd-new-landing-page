import { projects } from "@/components/home/Projects/data";
import { ParallaxScroll } from "@/components/ui/ParalexGrid";
import Image from "next/image";
export default function SingleProjectPage({
  params: { name },
}: {
  params: {
    name: string;
  };
}) {
  name = name.replace("%20", " ");

  const project = projects.find((project) => project.name === name)!;

  return (
    <section className="py-16 px-2 md:px-10 ">
      <div className="md:max-w-5xl px-10 mx-auto">
        <p className="text-5xl md:text-8xl font-semibold">{project?.name}</p>
        <p className="text-xl mt-4 md:w-2/3">{project?.text}</p>
      </div>
      <div>
        <ParallaxScroll images={Array(12).fill(project.image)} />
        <div className="flex flex-col md:hidden w-full px-4 gap-4 mt-6">
          {Array(12)
            .fill(project.image)
            .map((image, i) => (
              <Image
                className="w-full h-full"
                key={i}
                src={image}
                alt={project.name}
                width={100}
                height={100}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
