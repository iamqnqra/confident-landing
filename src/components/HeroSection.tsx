import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroBody}>
          <div className={styles.gradientCircle}></div>
          <div className={styles.secondGradientCircle}></div>
          <div className={styles.content}>
            <div className={styles.heading}>
              <h1 className={styles.welcomeText}>welcome to CONFIDENT</h1>
              <h1 className={styles.mainText}>
                high quality & <span className={styles.blueText}>painless</span>{" "}
                dentistry
              </h1>
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam, quis nostrud.
            </p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.contactUs}>contact us</button>
            <a href="https://www.youtube.com/" className={styles.playButton}>
              <img
                src="./play.svg"
                width={38}
                height={36}
                alt="play button for video profile"
              />
              <span className={styles.watchText}>watch video profile</span>
            </a>
          </div>

          <div className={styles.contentRight}>
            <img
              src="main_img.svg"
              width={648}
              height={648}
              alt="doctor's characteristics"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
