import React from "react";
import { ButtonProps } from "../buttonProps";
import styles from "./hoverButton.module.css";
import { cn } from "@/lib/cn";
import { IoMdArrowForward } from "react-icons/io";

export const HoverButton = ({
  children,
  className,
  hoverColor,
  textClassNames,
  arrowColor,
}: {
  textClassNames?: string;
  hoverColor?: string;
  arrowColor?: string;
} & ButtonProps) => {
  return (
    <button
      className={cn(
        "group relative flex items-center gap-1 hover:gap-2 transition-all w-auto",
        className
      )}
    >
      <span className={cn("text-black relative z-10", textClassNames)}>
        {children}
      </span>
      <div className="relative z-10">
        <IoMdArrowForward
          size={20}
          className={cn("text-black", textClassNames, arrowColor)}
        />
      </div>
      <div
        className={cn(
          "size-10 group-hover:w-[120%]  transition-all rounded-full absolute z-0 top-1/2 -left-3 -translate-y-1/2",
          hoverColor ? hoverColor : "bg-white"
        )}
      ></div>
    </button>
  );
};
