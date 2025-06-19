import styles from "./DentistsList.module.css";
import { Slider } from "./DentistLisSwiper";
import { Container } from "../../shared/UIkit/Container/Container";

export const DentistList = () => {
  return (
    <section id="dentists" className={styles.dentists}>
      <Container className={styles.dentistsContainer}>
        <div className={styles.sectionBody}>
          <div className={styles.heading}>
            <h2 className={styles.headingMain}>OUR BEST DENTIST</h2>
            <h2 className={styles.headingMainText}>
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
