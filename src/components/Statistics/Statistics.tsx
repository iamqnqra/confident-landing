import styles from "./Statistics.module.css";
import { Container } from "../../shared/UIkit/Container/Container";
import { STATS } from "./Statistics.constants";

export const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <Container className={styles.statContainer}>
        <div className={styles.statBody}>
          <div className={styles.statMainGrid}>
            {STATS.map((stat, index) => (
              <div key={index} className={styles.statgridContent}>
                <span className={styles.infoDescription}>{stat.label}</span>
                <span className={styles.gridInfoNumber}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
