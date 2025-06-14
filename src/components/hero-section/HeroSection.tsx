import styles from "./HeroSection.module.css";
import { Container } from "../../UIkit/Container";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.heroBody}>
          <div className={styles.content}>
            <h1 className={styles.heading}>
              <span className={styles.welcomeText}>welcome to CONFIDENT</span>
              <span className={styles.mainText}>
                high quality & <span className={styles.blueText}>painless</span>{" "}
                dentistry
              </span>
            </h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam, quis nostrud.
            </p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.contactUs}>contact us</button>
            <a
              href="https://www.youtube.com/"
              className={styles.playButton}
              target=""
            >
              <img
                src="./hero-img/play.svg"
                width={38}
                height={36}
                alt="play button for video profile"
              />
              <span className={styles.watchText}>watch video profile</span>
            </a>
          </div>

          <div className={styles.contentRight}>
            <img
              src="./hero-img/main_img.svg"
              width={648}
              height={648}
              alt="doctor's characteristics"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
