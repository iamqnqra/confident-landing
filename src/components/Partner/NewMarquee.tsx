import Marquee from "react-fast-marquee";
const PARTNERS = ["first", "second", "third", "fourth", "fifth"];
import styles from "./Partner.module.css";
const NewMarquee = () => {
  return (
    <Marquee
      gradient
      gradientColor="rgb(255, 255, 255)"
      gradientWidth={90}
      speed={40}
      pauseOnHover
    >
      {PARTNERS.map((item) => (
        <img
          src={`./img/partnership/${item}.svg`}
          className={styles.partnerMarqueeItem}
          alt="brand logo"
        />
      ))}
    </Marquee>
  );
};

export { NewMarquee };
