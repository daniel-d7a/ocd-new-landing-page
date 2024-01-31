import { cn } from "@/lib/cn";
import styles from "./flipButton.module.css";
import { ButtonProps } from "../buttonProps";

export const FlipButton = ({
  children,
  className,
}: { children: string } & ButtonProps) => {
  const letters = children.split("").map((letter, i) => {
    return letter !== " " ? (
      <span
        style={{
          transition: `${i * 0.15 + 0.15}s`,
        }}
        key={`${letter}${i} ${Math.random()}`}
      >
        {letter}
      </span>
    ) : (
      <span className="size-1" key={`${letter}${i} ${Math.random()}`}></span>
    );
  });
  return (
    <button className={cn(className, styles.flipButton)}>
      <span className={styles.spanMother}>{letters}</span>
      <span className={styles.spanMother2}>{letters}</span>
    </button>
  );
};
