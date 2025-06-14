import styles from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
