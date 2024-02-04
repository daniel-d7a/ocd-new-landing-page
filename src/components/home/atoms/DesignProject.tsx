import { HoverButton } from "@/components/ui/buttons/hover button/HoverButton";
import { cn } from "@/lib/cn";
import { montserrat } from "@/lib/fonts";
import Image, { StaticImageData } from "next/image";

export const DesignProject = ({
  name,
  image,
  text,
}: {
  name: string;
  text: string;
  image: StaticImageData;
}) => {
  return (
    <div className="w-full">
      <div className="flex h-8 ">
        <div className="w-40 p-2 pl-6 pr-6 md:pr-0 text-white bg-neutral-700 rounded-t-xl">
          Design
        </div>
        <div className="md:-ml-10 rounded-tr-md w-40 md:w-20 skew-x-[50deg] bg-neutral-700">
          {" "}
        </div>
      </div>
      <div className="text-white h-[650px] md:h-[350px] flex md:flex-row flex-col-reverse items-start justify-between gap-8 rounded-2xl rounded-tl-none w-[87vw] md:w-[850px] p-6 bg-neutral-700">
        <div>
          <p className="text-4xl font-semibold capitalize">{name}</p>
          <p className={cn("mt-6 w-4/5", montserrat.className)}>{text}</p>
          <HoverButton
            hoverColor="bg-ocd-blue"
            className="mt-8 ml-2"
            textClassNames="text-white"
          >
            Check it out{" "}
          </HoverButton>
        </div>
        <Image
          src={image}
          alt={name}
          height={280}
          className="mt-2 rounded-xl"
        />
      </div>
    </div>
  );
};
