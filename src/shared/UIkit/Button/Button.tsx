import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`${styles.buttons} ${className}`}>{children}</button>
  );
};
