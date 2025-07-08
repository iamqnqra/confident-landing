import styles from "./ServiceListCard.module.css";
import LinkWithArrow from "../../../shared/UIkit/Link/Link";
import { CARDINFO } from "./ServiceListCard.constants";

export const ServiceCard = () => {
  return (
    <>
      {CARDINFO.map((card, index) => (
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
