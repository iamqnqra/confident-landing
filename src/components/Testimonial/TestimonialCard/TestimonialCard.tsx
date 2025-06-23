import { FaStar } from "react-icons/fa";
import styles from "./TestimonialCard.module.css";

const testimonialCards = [
  {
    avatar: "./img/testimonial/avatar7.svg",
    rating: 4,
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
    name: "Ryan Gigs",
    role: "Patient",
  },
  {
    avatar: "./img/testimonial/avatar5.svg",
    rating: 4,
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
    name: "Ryan Gigs",
    role: "Patient",
  },
  {
    avatar: "./img/testimonial/avatar4.svg",
    rating: 4,
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
    name: "Ryan Gigs",
    role: "Patient",
  },
  {
    avatar: "./img/testimonial/avatar6.svg",
    rating: 4,
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
    name: "Ryan Gigs",
    role: "Patient",
  },
];

export const TestimonialCard = () => {
  return (
    <>
      {testimonialCards.map((card, index) => (
        <div className={styles.card} key={index}>
          <img
            src={card.avatar}
            alt={card.name}
            width={98}
            height={91}
            className={styles.avatar}
          />
          <div className={styles.cardContent}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, idx) => (
                <FaStar
                  key={idx}
                  color={idx < card.rating ? "#FF9140" : "#FFD3B3"}
                />
              ))}
            </div>
            <p className={styles.description}>{card.description}</p>
            <div className={styles.patientsInfo}>
              <span className={styles.name}>{card.name}</span>
              <span className={styles.role}>{card.role}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
