import { cn } from "@/lib/cn";
import { montserrat, recoleta } from "@/lib/fonts";
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import { RippleButton } from "@/components/ui/buttons/ripple button/RippleButton";
import { IoMdArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

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
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      onClick={() => setSelectedIndex(index)}
      className={cn(
        "hover:grayscale-0 w-full rounded-xl p-6 md:h-60 min-h-64 grid grid-cols-6 cursor-pointer transition-all",
        index === 0 || index === 3
          ? "bg-ocd-yellow text-black"
          : "bg-ocd-blue text-white",
        montserrat.className,
        !active && "grayscale"
      )}
    >
      <div className="col-span-6 md:col-span-4">
        <p className={cn("text-3xl font-bold mb-4", recoleta.className)}>
          {name}
        </p>
        <p className="font-medium">{text}</p>
      </div>

      <div className="col-span-6 md:col-span-2 flex md:flex-col flex-row-reverse  md:items-center items-end justify-between ">
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
      </div>
    </motion.div>
  );
};
