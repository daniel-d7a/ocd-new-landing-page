import { DesignProject } from "../atoms/DesignProject";
import { Tabs } from "@/components/ui/TabbedView";
import { projects } from "./data";
export const Design = () => {
  return (
    <div className="w-full space-y-10 px-6 md:px-10 md:h-[530px] grid grid-cols-4 gap-x-10 md:mb-0 mb-[750px]">
      <Tabs
        contentClassName="col-span-4"
        tabs={projects.map((project, i) => ({
          title: project.name,
          value: `${project.name}${i + 1}`,
          content: <DesignProject {...project} />,
        }))}
      />
    </div>
  );
};
