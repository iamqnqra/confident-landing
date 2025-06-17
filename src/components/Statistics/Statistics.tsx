import styles from "./Statistics.module.css";
import { Container } from "../../shared/UIkit/Container/Container";

export const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <Container className={styles.container}>
        <div className={styles.statBody}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <span className={styles.number}> 74 </span>
              <span className={styles.description1}> Clinics</span>
            </div>
            <div className={styles.content}>
              <span className={styles.number}> 20 </span>
              <span className={styles.description2}> Country</span>
            </div>
            <div className={styles.content}>
              <span className={styles.number}> 19 </span>
              <span className={styles.description3}> Years</span>
            </div>
            <div className={styles.content}>
              <span className={styles.number}> 40 </span>
              <span className={styles.description4}> Partners</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
