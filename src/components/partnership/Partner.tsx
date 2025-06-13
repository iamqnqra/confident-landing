import { NewMarquee } from "./NewMarquee";
import styles from "./Partner.module.css";

export const Partner = () => {
  return (
    <section className={styles.partnerSection}>
      <div className={styles.container}>
        <div className={styles.sectionBody}>
          <h2 className={styles.heading}>our clinic partners</h2>
          <div className={styles.partnerLogos}>
            <NewMarquee />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
