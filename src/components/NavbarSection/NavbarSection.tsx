import styles from "./NavbarSection.module.css";
import { Container } from "../../shared/UIkit/Container/Container";
import { LINKS } from "./Navbar.constants";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <div className={styles.navBody}>
          <ul className={styles.navElements}>
            {LINKS.map((item) => (
              <li key={item.href}>
                <a
                  className={`${styles.navLink} ${styles.navLinkActive}`}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.navSearchWrapper}>
            <input
              type="search"
              name="searcher"
              placeholder="Search In here"
              className={styles.navSearchInput}
            />
            <button
              aria-label="Search button"
              title="Search button"
              className={styles.navSearchButton}
            >
              <img
                src="./img/navbar/search_icon.svg"
                aria-hidden
                width={19}
                height={19}
              />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};
