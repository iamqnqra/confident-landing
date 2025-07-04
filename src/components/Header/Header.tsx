import styles from "./Header.module.css";
import { Container } from "../../shared/UIkit/Container/Container";
import { Button } from "../../shared/UIkit/Button/Button";
import { MobileMenu } from "../../shared/UIkit/MobileMenu/MobileMenu";

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#testimonial" className={styles.skipLink}>
        Skip to main content
      </a>
      <Container className={styles.container}>
        <div className={styles.headerBody}>
          <div className={styles.headerBurger}>
            <MobileMenu className={styles.mobileMenu} />
            <a href="/" className={styles.headerLogo}>
              <img
                src="./img/header/logo.svg"
                width={163}
                height={44}
                alt="Logo Confident Dental Care Clinic"
              />
            </a>
          </div>
          <div className={styles.headerContacts}>
            <a
              href="https://www.google.com/maps/@51.134464,71.3981952,14z?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
              className={styles.headerLocation}
              target="_blank"
            >
              <img
                src="./img/header/location.svg"
                width={19}
                height={24}
                alt=""
                aria-hidden="true"
              />
              <span className={styles.headerLocationMean}>
                {" "}
                St. Sanguin Number 40
              </span>
            </a>
            <a
              href="tel:+1234 - 4567 - 890"
              className={styles.headerContactPhone}
            >
              <img
                src="./img/header/phone.svg"
                width={19}
                height={19}
                alt=""
                aria-hidden="true"
              />
              <span className={styles.headerPhoneNumber}>
                +1234 - 4567 - 890
              </span>
            </a>
            <Button className={styles.headerAppointmentButton}>
              appointment
            </Button>
          </div>
          <div className={styles.navSearchWrapper}>
            <input
              type="search"
              name="searcher"
              placeholder="Search In here"
              className={styles.navSearchInput}
            />
            <button className={styles.navSearchButton}>
              <img
                src="./img/navbar/search_icon.svg"
                alt="search button icon"
                width={19}
                height={19}
              />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
