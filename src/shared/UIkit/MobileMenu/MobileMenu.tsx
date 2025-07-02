import { useState } from "react";
import styles from "./MobileMenu.module.css";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Button } from "../Button/Button";

const MENU_ITEMS = [
  {
    title: "HOME",
    children: ["Homepage 1", "Homepage 2"],
  },
  {
    title: "ABOUT US",
  },
  {
    title: "SERVICES",
  },
  {
    title: "PAGES",
  },
  {
    title: "BLOG",
  },
  {
    title: "CONTACT",
  },
];

type MobileMenuProps = {
  className?: string;
};
export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <BurgerMenu onClick={() => setIsOpen(true)} />

      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
      )}

      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayActive : ""}`}
      >
        <div className={styles.menu}>
          <div className={styles.topBar}>
            <img src="/img/header/logo.svg" alt="Logo" />
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className={styles.nav}>
            {MENU_ITEMS.map((item) => (
              <details key={item.title} className={styles.menuItem}>
                <summary className={styles.menuSummary}>
                  {item.title}
                  {item.children && <span className={styles.arrow}></span>}
                </summary>
                {item.children && (
                  <div className={styles.subMenu}>
                    {item.children.map((child) => (
                      <a key={child} href="#" className={styles.subMenuLink}>
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </details>
            ))}
          </nav>

          <div className={styles.contact}>
            <a
              href="https://www.google.com/maps/@51.134464,71.3981952,14z?entry=ttu"
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
          </div>

          <div className={styles.menuButton}>
            <Button className={styles.appointmentButton}>Appointment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
