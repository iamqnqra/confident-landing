import Container from "../../shared/UIkit/Container/Container";
import styles from "./Testimonial.module.css";
import { TestimonialCard } from "./TestimonialCard/TestimonialCard";

export const Testimonial = () => {
  return (
    <section id="testimonial" className={styles.testimonial}>
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
          <div className={styles.contentWrapper}>
            <div className={styles.imageContent}>
              <div className={styles.imageContentWrapperTop}>
                <img
                  src="./img/testimonial/icon1.svg"
                  width={70.15}
                  height={72.12}
                  className={styles.imageContentIconTop}
                  alt=""
                  aria-hidden={true}
                />
              </div>

              <div className={styles.testimonialImageTop}>
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
                  alt="first avatar of doctor"
                  width={95.5}
                  height={98.5}
                  className={styles.avatar}
                />
              </div>

              <div className={styles.testimonialImageBottom}>
                <img
                  src="./img/about/avatar3.svg"
                  alt="avatar of second doctor"
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
              <div className={styles.imageContentWrapperButtom}>
                <img
                  src="./img/testimonial/icon2.svg"
                  width={70.15}
                  height={72.12}
                  className={styles.imageContentIconBottom}
                  alt=""
                  aria-hidden={true}
                />
              </div>
            </div>
            <div className={styles.contentRight}>
              <div className={styles.serviceGridCards}>
                <TestimonialCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
