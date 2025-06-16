import styles from "./AboutUs.module.css";
import { Container } from "../../shared/UIkit/Container/Container.tsx";

const STRENGHS = [
  "Modern Equipment",
  "Comfortable Clinic",
  "Easy Online Appointment",
  "Always Monitored",
];

export const AboutUs = () => {
  return (
    <section id="aboutUs" className={styles.aboutUs}>
      <Container className={styles.container}>
        <div className={styles.sectionBody}>
          <div className={styles.contentLeft}>
            <div className={styles.gradient}>
              <img
                className={styles.imageDec}
                src="./img/about/main2.svg"
                width={309}
                height={530}
                alt="doctor-woman"
              />
              <div className={styles.card}>
                <img
                  className={styles.icon}
                  src="./img/about/icon.svg"
                  width={60}
                  height={60}
                  alt=""
                  aria-hidden={true}
                />
                <span className={styles.name}>Dr. Aubrey Clark</span>
                <span className={styles.proff}>Dentist</span>
              </div>
              <div className={styles.trustedCard}>
                <div className={styles.avatars}>
                  <img
                    src="./img/about/avatar1.svg"
                    alt="avatar"
                    className={styles.avatar}
                  />
                  <img
                    src="./img/about/avatar2.svg"
                    alt="avatar"
                    className={styles.avatar}
                  />
                  <img
                    src="./img/about/avatar3.svg"
                    alt="avatar"
                    className={styles.avatar}
                  />
                  <div className={styles.more}>+</div>
                </div>
                <div className={styles.textBlock}>
                  <p className={styles.label}>Trusted By</p>
                  <p className={styles.count}>200+ Patients</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.heading}>
              <h2 className={styles.main}> About Us</h2>
              <h2 className={styles.mainText}>
                your <span className={styles.blueText}>trusted partner</span>{" "}
                for dental Health
              </h2>
            </div>
            <p className={styles.description}>
              Our team is dedicated to providing the best possible dental care
              for you. A healthy smile is a happy smile – we help you achieve
              both!
            </p>
            <div className={styles.items}>
              {STRENGHS.map((item, index) => (
                <span key={index} className={styles.wordWithIcon}>
                  <img
                    src="./img/about/checkbox.svg"
                    alt=""
                    width={15}
                    height={15}
                    className={styles.inlineIcon}
                    aria-hidden={true}
                  />
                  {item}
                </span>
              ))}
            </div>
            <div className={styles.link}>
              <a href="#" className={styles.readMore} target="true">
                READ MORE
                <img
                  src="./img/about/arrow.svg"
                  width={14}
                  height={15}
                  alt=""
                  aria-hidden={true}
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
