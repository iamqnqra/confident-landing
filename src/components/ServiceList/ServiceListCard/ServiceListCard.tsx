import styles from "./ServiceListCard.module.css";

const CardItem = [
  {
    imageSrc: "./img/service/card1.svg",
    title: "lawn fertilization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    link: "#",
    className: styles.serviceCardTop,
  },
  {
    imageSrc: "./img/service/card2.svg",
    title: "lawn fertilization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    link: "#",
    className: styles.serviceCardTop,
  },
  {
    imageSrc: "./img/service/card3.svg",
    title: "lawn fertilization",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    link: "#",
    className: styles.serviceCardBottom,
  },
  {
    imageSrc: "./img/service/card4.svg",
    title: "lawn fertilization",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    link: "#",
    className: styles.serviceCardBottom,
  },
  {
    imageSrc: "./img/service/card5.svg",
    title: "lawn fertilization",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    link: "#",
    className: styles.serviceCardBottom,
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
              <p className={styles.serviceDescrip}>{card.description}</p>
              <a href={card.link} target="true" className={styles.serviceLink}>
                learn More
                <img src="./img/about/arrow.svg" alt="" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
