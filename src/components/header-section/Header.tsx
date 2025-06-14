import styles from "./Header.module.css";
import { Container } from "../../UIkit/Container";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.headerBody}>
          <a href="/" className={styles.logo} target="true">
            <img
              src="./header-img/logo.svg"
              width={163}
              height={44}
              alt="Logo Confident Dental Care Clinic"
            />
          </a>
          <div className={styles.contacts}>
            <a
              href="https://www.google.com/maps/@51.134464,71.3981952,14z?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
              className={styles.location}
              target="true"
            >
              <img
                src="./header-img/location.svg"
                width={19}
                height={24}
                alt=""
                aria-hidden="true"
              />
              <span className={styles.locationMean}>
                {" "}
                St. Sanguin Number 40
              </span>
            </a>
            <a href="tel:+1234 - 4567 - 890" className={styles.phone}>
              <img
                src="./header-img/phone.svg"
                width={19}
                height={19}
                alt=""
                aria-hidden="true"
              />
              <h4 className={styles.phoneNumber}>+1234 - 4567 - 890</h4>
            </a>
            <button className={styles.appointment}>appointment</button>
          </div>
        </div>
      </Container>
    </header>
  );
};
