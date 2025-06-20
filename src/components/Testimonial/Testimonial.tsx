import Container from "../../shared/UIkit/Container/Container";
import styles from "./Testimonial.module.css";

export const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <Container className={styles.testimonialContainer}>
        <div className={styles.testimonialBody}>
          <div className={styles.heading}>
            <h2 className={styles.headingMain}>TESTIMONIAL</h2>
            <h2 className={styles.headingMainText}>
              <span className={styles.mainTextsplit}>
                Enhancing Your Smile &
              </span>
              <span className={styles.blueText}> Your Confidence</span>
            </h2>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageContentWrapper}>
              <img
                src="./img/testimonial/icon1.svg"
                width={70.15}
                height={72.12}
                className={styles.imageContentIcon1}
                alt=""
                aria-hidden={true}
              />
            </div>

            <div className={styles.testimonialImage1}>
              <div className={styles.imageCard}>very good experience...</div>
              <img
                src="./img/about/checkbox.svg"
                width={29.41}
                height={30.26}
                alt=""
                aria-hidden={true}
                className={styles.checkbox}
              />
              <img
                src="./img/about/avatar2.svg"
                alt="avatar"
                width={95.5}
                height={98.5}
                className={styles.avatar}
              />
            </div>

            <div className={styles.testimonialImage2}>
              <img
                src="./img/about/avatar3.svg"
                alt="avatar"
                width={88.7}
                height={91.8}
                className={styles.avatar}
              />
              <img
                src="./img/about/checkbox.svg"
                width={27.47}
                height={28.36}
                alt=""
                aria-hidden={true}
                className={styles.checkbox1}
              />
              <div className={styles.imageCard}>very good service...</div>
            </div>
            <div className={styles.imageContentWrapper1}>
              <img
                src="./img/testimonial/icon2.svg"
                width={70.15}
                height={72.12}
                className={styles.imageContentIcon1}
                alt=""
                aria-hidden={true}
              />
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.serviceGridCards}>
              <div className={styles.serviceCardBottom}>
                <div className={styles.cardContent}>
                  <img
                    src="./img/testimonial/avatar4.svg"
                    width={86}
                    height={86}
                    alt=""
                    aria-hidden="true"
                  />
                  <div className={styles.cardTextArea}>
                    <h3 className={styles.serviceName}>lawn fertilization</h3>
                    <p className={styles.serviceDescrip}>
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.serviceCardBottom}>
                <div className={styles.cardContent}>
                  <img
                    src="./img/testimonial/avatar5.svg"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
