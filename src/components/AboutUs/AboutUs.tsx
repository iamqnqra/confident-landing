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
      <Container className={styles.aboutUscontainer}>
        <div className={styles.aboutUssectionBody}>
          <div className={styles.contentLeft}>
            <div className={styles.aboutUsgradient}>
              <img
                className={styles.aboutUsimage}
                src="./img/about/main2.svg"
                width={309}
                height={530}
                alt="doctor-woman"
              />
              <div className={styles.imageCard}>
                <img
                  className={styles.imageIcon}
                  src="./img/about/icon.svg"
                  width={60}
                  height={60}
                  alt=""
                  aria-hidden={true}
                />
                <span className={styles.imageDoctorName}>Dr. Aubrey Clark</span>
                <span className={styles.imageDoctorProff}>Dentist</span>
              </div>
              <div className={styles.imageTrustedCard}>
                <div className={styles.trustedCardAvatars}>
                  <img
                    src="./img/about/avatar1.svg"
                    alt="avatar"
                    className={styles.trustedCardAvatar}
                  />
                  <img
                    src="./img/about/avatar2.svg"
                    alt="avatar"
                    className={styles.trustedCardAvatar}
                  />
                  <img
                    src="./img/about/avatar3.svg"
                    alt="avatar"
                    className={styles.trustedCardAvatar}
                  />
                  <div className={styles.more}>+</div>
                </div>
                <div className={styles.textBlock}>
                  <p className={styles.textBlockLabel}>Trusted By</p>
                  <p className={styles.textBlockCount}>200+ Patients</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.heading}>
              <h2 className={styles.headingMain}> About Us</h2>
              <h2 className={styles.headingMainText}>
                your <span className={styles.blueText}>trusted partner</span>{" "}
                for dental Health
              </h2>
            </div>
            <p className={styles.headingDescription}>
              Our team is dedicated to providing the best possible dental care
              for you. A healthy smile is a happy smile – we help you achieve
              both!
            </p>
            <div className={styles.contentItems}>
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
            <div className={styles.aboutUsReadMorelink}>
              <a href="#" className={styles.readMore} target="_blank">
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
