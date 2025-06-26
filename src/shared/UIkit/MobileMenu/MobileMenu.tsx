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
    children: ["Page 1", "Page 2"],
  },
  {
    title: "BLOG",
    children: ["Blog 1", "Blog 2"],
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
        <div className={styles.overlay}>
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
                  <summary>{item.title}</summary>
                  {item.children && (
                    <div className={styles.subMenu}>
                      {item.children.map((child) => (
                        <a key={child} href="#">
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </details>
              ))}
            </nav>

            <div className={styles.contact}>
              <span> St. Sanguin Number 40</span>
              <span> +1234 – 4567 – 890</span>
            </div>
            <div className={styles.menuButton}>
              <Button className={styles.appointmentButton}>Appointment</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
