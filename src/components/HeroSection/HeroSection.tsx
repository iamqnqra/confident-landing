import styles from "./HeroSection.module.css";
import { Button } from "../../shared/UIkit/Button/Button";
import { Container } from "../../shared/UIkit/Container/Container";

export const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
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
            <Button className={styles.contactUs}>contact us</Button>
            <a
              href="https://www.youtube.com/"
              className={styles.playButton}
              target="true"
            >
              <img
                src="./img/hero/play.svg"
                width={38}
                height={36}
                alt="play button for video profile"
              />
              <span className={styles.watchText}>watch video profile</span>
            </a>
          </div>

          <div className={styles.contentRight}>
            <img
              src="./img/hero/main_img.svg"
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
