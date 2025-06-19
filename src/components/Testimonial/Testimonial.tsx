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
          <div className={styles.testimonialGradient}>
            <img
              src="./img/about/avatar3.svg"
              alt="avatar"
              width={96.7}
              height={99.8}
              className={styles.avatar}
            />
            <img
              src="./img/about/avatar2.svg"
              alt="avatar"
              width={103.5}
              height={106.5}
              className={styles.avatar}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
