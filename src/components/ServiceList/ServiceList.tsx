import styles from "./ServiceList.module.css";
import Container from "../../shared/UIkit/Container/Container";
import { ServiceCard } from "./ServiceListCard";

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
            <ServiceCard></ServiceCard>
          </div>
        </div>
      </Container>
    </section>
  );
};
