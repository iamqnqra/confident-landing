import { NewMarquee } from "./NewMarquee/NewMarquee";
import styles from "./Partner.module.css";
import { Container } from "../../shared/UIkit/Container/Container";

export const Partner = () => {
  return (
    <section className={styles.partnerSection}>
      <Container className={styles.container}>
        <div className={styles.sectionBody}>
          <h2 className={styles.partnerHeading}>our clinic partners</h2>
          <div className={styles.partnerLogos}>
            <NewMarquee />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partner;
