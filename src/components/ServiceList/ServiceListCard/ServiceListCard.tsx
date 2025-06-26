import styles from "./ServiceListCard.module.css";
import LinkWithArrow from "../../../shared/UIkit/Link/Link";

const CardItem = [
  {
    imageSrc: "./img/service/card1.svg",
    title: "lawn fertilization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    link: "#",
    className: styles.serviceCard,
  },
  {
    imageSrc: "./img/service/card2.svg",
    title: "lawn fertilization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    link: "#",
    className: styles.serviceCard,
  },
  {
    imageSrc: "./img/service/card3.svg",
    title: "lawn fertilization",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    link: "#",
    className: styles.serviceCard,
  },
  {
    imageSrc: "./img/service/card4.svg",
    title: "lawn fertilization",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    link: "#",
    className: styles.serviceCard,
  },
  {
    imageSrc: "./img/service/card5.svg",
    title: "lawn fertilization",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    link: "#",
    className: styles.serviceCard,
  },
];

export const ServiceCard = () => {
  return (
    <>
      {CardItem.map((card, index) => (
        <div className={card.className} key={index}>
          <div className={styles.cardContent}>
            <img
              src={card.imageSrc}
              width={86}
              height={86}
              alt=""
              aria-hidden="true"
            />
            <div className={styles.cardTextArea}>
              <h3 className={styles.serviceName}>{card.title}</h3>
              <p className={styles.serviceDescrip}>
                {index === 1 ? (
                  <>
                    <span className={styles.firstSpan}>
                      Lorem ipsum dolor sit amet, consectetur.{" "}
                    </span>
                    <span className={styles.secondSpan}>
                      Adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore.
                    </span>
                  </>
                ) : (
                  card.description
                )}
              </p>

              <LinkWithArrow href="#">LEARN MORE</LinkWithArrow>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
