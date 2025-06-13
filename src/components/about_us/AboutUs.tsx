import styles from "./AboutUs.module.css";

const STRENGHS = [
  "Modern Equipment",
  "Comfortable Clinic",
  "Easy Online Appointment",
  "Always Monitored",
];

export const AboutUs = () => {
  return (
    <section className={styles.abotUs}>
      <div className={styles.container}>
        <div className={styles.sectionBody}>
          <div className={styles.contentLeft}>
            <img
              className={styles.imageDec}
              src="./about-img/main2.svg"
              width={309}
              height={530}
              alt="doctor-woman"
            />
            <div className={styles.card}>
              <span className={styles.name}>Dr. Aubrey Clark</span>
              <span className={styles.proff}>Dentist</span>
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.heading}>
              <h2 className={styles.main}> About Us</h2>
              <h2 className={styles.mainText}>
                your trusted partner for dental Health
              </h2>
            </div>
            <p className={styles.description}>
              Our team is dedicated to providing the best possible dental care
              for you. A healthy smile is a happy smile – we help you achieve
              both!
            </p>
            <div className={styles.items}>
              {STRENGHS.map((item) => (
                <span className={styles.itemsText}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
