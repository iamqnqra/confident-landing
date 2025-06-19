import styles from "./Statistics.module.css";
import { Container } from "../../shared/UIkit/Container/Container";

export const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <Container className={styles.statContainer}>
        <div className={styles.statBody}>
          <div className={styles.statMainGrid}>
            <div className={styles.statgridContent}>
              <span className={styles.gridInfoNumber}> 74 </span>
              <span className={styles.infoDescription1}> Clinics</span>
            </div>
            <div className={styles.statgridContent}>
              <span className={styles.gridInfoNumber}> 20 </span>
              <span className={styles.infoDescription2}> Country</span>
            </div>
            <div className={styles.statgridContent}>
              <span className={styles.gridInfoNumber}> 19 </span>
              <span className={styles.infoDescription3}> Years</span>
            </div>
            <div className={styles.statgridContent}>
              <span className={styles.gridInfoNumber}> 40 </span>
              <span className={styles.infoDescription4}> Partners</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
