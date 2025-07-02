import styles from "./Statistics.module.css";
import { Container } from "../../shared/UIkit/Container/Container";

const stats = [
  { label: "Clinics", value: "74" },
  { label: "Country", value: "20" },
  { label: "Years", value: "19" },
  { label: "Partners", value: "40" },
];

export const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <Container className={styles.statContainer}>
        <div className={styles.statBody}>
          <div className={styles.statMainGrid}>
            {stats.map((stat, index) => (
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