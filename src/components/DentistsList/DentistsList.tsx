import styles from "./DentistsList.module.css";
import { Slider } from "./Swiper";
import { Container } from "../../shared/UIkit/Container/Container";

export const DentistList = () => {
  return (
    <section className={styles.dentists}>
      <Container className={styles.container}>
        <div className={styles.sectionBody}>
          <div className={styles.heading}>
            <h2 className={styles.main}>OUR BEST DENTIST</h2>
            <h2 className={styles.mainText}>
              <span className={styles.mainTextsplit}>
                Dentist For Specialized And
              </span>
              <span className={styles.blueText}>Experienced Dentistry</span>
            </h2>
          </div>

          <Slider></Slider>
        </div>
      </Container>
    </section>
  );
};
