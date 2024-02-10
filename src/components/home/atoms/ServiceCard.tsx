import { cn } from "@/lib/cn";
import { montserrat, recoleta } from "@/lib/fonts";
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import { RippleButton } from "@/components/ui/buttons/ripple button/RippleButton";
import { IoMdArrowForward } from "react-icons/io";
import { motion, stagger } from "framer-motion";

const yellowIndecies = [0, 2, 4, 5];

const styles = [
  "col-span-2 col-start-1 row-start-1",
  "col-span-4 col-start-3 row-start-1",
  "col-span-2 col-start-7 row-start-1",
  "col-span-3 col-start-1 row-start-2",
  "col-span-5 col-start-4 row-start-2",
  "col-span-5 col-start-1 row-start-3",
  "col-span-3 col-start-6 row-start-3",
];

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
    <motion.div
      onClick={() => setSelectedIndex(index)}
      className={cn(
        "hover:grayscale-0 row-span-1 md:w-full box-border drop-shadow-lg shadow-lg w-full rounded-xl p-6 md:min-h-80 min-h-64  cursor-pointer transition-all",
        yellowIndecies.includes(index)
          ? "md:bg-ocd-yellow md:text-black"
          : "md:bg-ocd-blue md:text-white",
        index % 2 === 0 ? "bg-ocd-blue text-white" : "bg-ocd-yellow text-black",
        montserrat.className,
        !active && "grayscale",
        styles[index]
      )}
    >
      <div className="col-span-6 md:col-span-4">
        <p className={cn("text-3xl font-bold mb-4", recoleta.className)}>
          {name}
        </p>
        <p className="font-medium">{text}</p>
      </div>

      {/* <div className="col-span-6 md:col-span-2 flex md:flex-col flex-row-reverse  md:items-center items-end justify-between ">
        <Image className="" src={image} alt={name} width={150} height={150} />
        <RippleButton
          className={cn(
            "transition-all flex items-center justify-center gap-2 md:mb-0 mb-4",
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
      </div> */}
    </motion.div>
  );
};
