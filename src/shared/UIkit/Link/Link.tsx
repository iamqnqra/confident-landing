import styles from "./Link.module.css";

type LinkWithArrowProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export const LinkWithArrow = ({
  href,
  className,
  children,
}: LinkWithArrowProps) => {
  return (
    <div className={styles.link}>
      <a
        href={href}
        target="_blank"
        className={`${styles.serviceLink} ${className || ""}`}
      >
        {children}
        <img
          src="./img/about/arrow.svg"
          width={14}
          height={20}
          alt=""
          aria-hidden="true"
        />
      </a>
    </div>
  );
};

export default LinkWithArrow;
