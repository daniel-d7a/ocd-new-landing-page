import { cn } from "@/lib/cn";
import styles from "./scrollButton.module.css";
import { ButtonProps } from "../buttonProps";

export const ScrollButton = ({ children, className }: ButtonProps) => {
  return (
    <button className={cn(styles.btn, className)}>
      <span className={styles.text}>{children}</span>
      <span aria-hidden className={styles.marquee}>
        {children}
      </span>
    </button>
  );
};
