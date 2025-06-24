import styles from "./Footer.module.css";
import Container from "../../shared/UIkit/Container/Container";
import SocialLinks from "../../shared/UIkit/SocialLinks/SocialLinks";

const footerLinks = [
  {
    title: "About",
    items: ["Home", "About Us", "Services", "Pages", "Contact"],
  },
  {
    title: "Pages",
    items: ["Services", "Dentist", "Pricing", "Contact", "404 Page"],
  },
  {
    title: "Support",
    items: ["Contact Us", "Booking online", "Social Media"],
  },
  {
    title: "Contact Us",
    items: ["Social Media", "WhatsApp", "Email"],
  },
];

const workingHours = [
  { day: "Mon – Fri", time: "9AM – 8PM" },
  { day: "Sat – Sun", time: "9AM – 8PM" },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerBody}>
          <div className={styles.footerOffer}>
            <a href="/" className={styles.footerLogo}>
              <img
                src="./img/header/logo.svg"
                width={163}
                height={44}
                alt="Logo Confident Dental Care Clinic"
              />
            </a>
            <div className={styles.socialItems}>
              <div className={styles.footerSearchWrapper}>
                <input
                  type="search"
                  name="searcher"
                  placeholder="Your Email Here..."
                  className={styles.footerSearchInput}
                />
                <button className={styles.footerSearchButton}></button>
              </div>
              <div className={styles.socialIcon}>
                <SocialLinks />
              </div>
            </div>
          </div>

          <hr className={styles.horizontalLine} />

          <div className={styles.footerBottom}>
            <div className={styles.footerBottomLeft}>
              <div className={styles.workingHours}>
                <h4 className={styles.workingHoursText}>working hours</h4>
                <dl className={styles.workDays}>
                  {workingHours.map(({ day, time }) => (
                    <div className={styles.workDaysRow} key={day}>
                      <dt className={styles.dayMean}>{day}</dt>
                      <dd className={styles.timeMean}>{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className={styles.footerBottomText}>
                © 2024 CONFIDENT All Right Reserved.
              </p>
            </div>
            <div className={styles.footerNav}>
              {footerLinks.map((section) => (
                <dl key={section.title} className={styles.footerNavGroup}>
                  <dt className={styles.footerNavTitle}>{section.title}</dt>
                  {section.items.map((item) => (
                    <dd key={item} className={styles.footerNavLink}>
                      {item}
                    </dd>
                  ))}
                </dl>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
