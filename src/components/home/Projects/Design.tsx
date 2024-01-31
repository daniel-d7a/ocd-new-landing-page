import restaurant from "@/assets/restaurant.jpg";
import { DesignProject } from "../atoms/DesignProject";
import { Tabs } from "@/components/ui/TabbedView";
export const Design = () => {
  return (
    <div className="space-y-10 px-10 h-[530px] grid grid-cols-4 gap-x-10">
      <Tabs
        tabs={projects.map((project, i) => ({
          title: project.name,
          value: `${project.name}${i + 1}`,
          content: <DesignProject {...project} />,
        }))}
      />
    </div>
  );
};

const projects = [
  {
    image: restaurant,

    name: "Digital Boost",
    text: "Elevate your online presence with our Digital Boost project. We optimize strategies, enhance visuals, and drive engagement, propelling your brand to new heights in the digital landscape.",
  },
  {
    image: restaurant,

    name: "Brand Revamp",
    text: "Transform your brand's identity with our Brand Revamp service. We reimagine logos, redefine messaging, and create a cohesive visual language, breathing new life into your market presence.",
  },
  {
    image: restaurant,

    name: "Social Buzz",
    text: "Ignite a Social Buzz around your brand with our dynamic social media campaigns. We curate compelling content, engage audiences, and boost your digital influence to unprecedented levels.",
  },
  {
    image: restaurant,

    name: "SEO Mastery",
    text: "Achieve search engine dominance with our SEO Mastery project. We optimize keywords, enhance site architecture, and secure top rankings, ensuring your brand is easily discovered by your target audience.",
  },
  {
    image: restaurant,

    name: "Content Brilliance",
    text: "Craft compelling narratives with our Content Brilliance service. We write captivating copy, develop engaging blog posts, and create content that resonates, driving meaningful connections with your audience.",
  },
];
