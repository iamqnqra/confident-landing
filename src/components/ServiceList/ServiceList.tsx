import styles from "./ServiceList.module.css";
import Container from "../../shared/UIkit/Container/Container";

export const ServiceList = () => {
  return (
    <section id="services" className={styles.serviceList}>
      <Container className={styles.serviceContainer}>
        <div className={styles.serviceBody}>
          <div className={styles.heading}>
            <h2 className={styles.headingMain}>what we provide</h2>
            <h2 className={styles.headingMainText}>
              <span>
                What <span className={styles.blueText}>the Treatments</span>
              </span>
              <span>Do We Offer?</span>
            </h2>
          </div>
          <div className={styles.serviceGridCards}>
            <div className={styles.serviceCardTop}>
              <div className={styles.cardContent}>
                <img
                  src="./img/service/card1.svg"
                  width={86}
                  height={86}
                  alt=""
                  aria-hidden="true"
                />
                <div className={styles.cardTextArea}>
                  <h3 className={styles.serviceName}>lawn fertilization</h3>
                  <p className={styles.serviceDescrip}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <a href="#" target="true" className={styles.serviceLink}>
                    learn More
                    <img
                      src="./img/about/arrow.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.serviceCardTop}>
              <div className={styles.cardContent}>
                <img
                  src="./img/service/card2.svg"
                  width={86}
                  height={86}
                  alt=""
                  aria-hidden="true"
                />
                <div className={styles.cardTextArea}>
                  <h3 className={styles.serviceName}>lawn fertilization</h3>
                  <p className={styles.serviceDescrip}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <a href="#" target="true" className={styles.serviceLink}>
                    learn More
                    <img
                      src="./img/about/arrow.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.serviceCardBottom}>
              <div className={styles.cardContent}>
                <img
                  src="./img/service/card3.svg"
                  width={86}
                  height={86}
                  alt=""
                  aria-hidden="true"
                />
                <div className={styles.cardTextArea}>
                  <h3 className={styles.serviceName}>lawn fertilization</h3>
                  <p className={styles.serviceDescrip}>
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <a href="#" target="true" className={styles.serviceLink}>
                    learn More
                    <img
                      src="./img/about/arrow.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.serviceCardBottom}>
              <div className={styles.cardContent}>
                <img
                  src="./img/service/card4.svg"
                  width={86}
                  height={86}
                  alt=""
                  aria-hidden="true"
                />
                <div className={styles.cardTextArea}>
                  <h3 className={styles.serviceName}>lawn fertilization</h3>
                  <p className={styles.serviceDescrip}>
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <a href="#" target="true" className={styles.serviceLink}>
                    learn More
                    <img
                      src="./img/about/arrow.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.serviceCardBottom}>
              <div className={styles.cardContent}>
                <img
                  src="./img/service/card5.svg"
                  width={86}
                  height={86}
                  alt=""
                  aria-hidden="true"
                />
                <div className={styles.cardTextArea}>
                  <h3 className={styles.serviceName}>lawn fertilization</h3>
                  <p className={styles.serviceDescrip}>
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <a href="#" target="true" className={styles.serviceLink}>
                    learn More
                    <img
                      src="./img/about/arrow.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
