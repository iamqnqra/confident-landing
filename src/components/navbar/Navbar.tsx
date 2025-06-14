import styles from "./Navbar.module.css";
import { Container } from "../../UIkit/Container";

const LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/",
  },
  {
    label: "Services",
    href: "/",
  },
  {
    label: "Pages",
    href: "/",
  },
  {
    label: "Blog",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

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
          <div className={styles.searchWrapper}>
            <input
              type="search"
              name="searcher"
              placeholder="Search In here"
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <img
                src="./navbar-img/search_icon.svg"
                alt="icon"
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
