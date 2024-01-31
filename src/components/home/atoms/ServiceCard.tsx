import { cn } from "@/lib/cn";
import { montserrat, recoleta } from "@/lib/fonts";
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import { RippleButton } from "@/components/ui/buttons/ripple button/RippleButton";
import { IoMdArrowForward } from "react-icons/io";

export const ServiceCard = ({
  image,
  name,
  slogan,
  text,
  index,
  active,
  setSelectedIndex,
}: {
  name: string;
  slogan: string;
  image: StaticImageData;
  text: string;
  index: number;
  active: boolean;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div
      onClick={() => setSelectedIndex(index)}
      className={cn(
        "hover:grayscale-0 w-full rounded-xl p-6 h-60  grid grid-cols-6 cursor-pointer transition-all",
        index === 0 || index === 3 ? "bg-ocd-yellow text-black" : "bg-ocd-blue",
        montserrat.className,
        !active && "grayscale"
        // index === 0 || index === 3 ? styles.blackGrid : styles.whiteGrid
      )}
    >
      <div className="col-span-4">
        <p className={cn("text-3xl font-bold mb-4", recoleta.className)}>
          {name}
        </p>
        <p className="font-medium">{text}</p>
      </div>
      <div className="col-span-2 flex flex-col items-center justify-between ">
        <Image className="" src={image} alt={name} width={150} height={150} />
        <RippleButton
          className={cn(
            "transition-all flex items-center justify-center gap-2",
            index === 1 || index === 2 ? "hover:text-black" : "hover:text-white"
          )}
          hoverRippleColor={
            index === 1 || index === 2 ? "bg-ocd-yellow " : "bg-ocd-blue"
          }
        >
          <div className="flex items-center gap-2">
            take a look
            <IoMdArrowForward />
          </div>
        </RippleButton>
      </div>
    </div>
  );
};
