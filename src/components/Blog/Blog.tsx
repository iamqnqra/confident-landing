import Container from "../../shared/UIkit/Container/Container";
import { Button } from "../../shared/UIkit/Button/Button";
import styles from "./Blog.module.css";

export const Blog = () => {
  return (
    <section id="blog" className={styles.blogSection}>
      <Container className={styles.blogContainer}>
        <div className={styles.blogBody}>
          <div className={styles.heading}>
            <h2 className={styles.headingMainText}>OUR BLOG</h2>
            <div className={styles.headingContent}>
              <h2 className={styles.headingSubText}>Our latest blog & news</h2>
              <Button className={styles.findMoreButton}>
                Find more
                <img
                  src="./img/booking/arrow.svg"
                  width={16}
                  height={17}
                  alt=""
                  aria-hidden={true}
                />
              </Button>
            </div>
          </div>
          <div className={styles.blogGridContent}>
            <div className={styles.newsCard}>
              <img
                src="./img/blog/card1.svg"
                width={592}
                height={571}
                className={styles.card}
                alt=""
              />
              <div className={styles.blogImageContent}>
                <time className={styles.date}>December 15, 2024</time>
                <p className={styles.imageContentText}>
                  Highlight: benefits of routine dental check-ups in children
                  under 12 years old
                </p>
                <div className={styles.blogReadMorelink}>
                  <a href="#" className={styles.readMore} target="true">
                    READ MORE
                    <img
                      src="./img/about/arrow.svg"
                      width={14}
                      height={15}
                      alt=""
                      aria-hidden={true}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.newsCard}>
              <img
                src="./img/blog/card2.svg"
                width={593}
                height={278}
                className={styles.card}
                alt=""
              />
              <div className={styles.blogImageContent}>
                <time className={styles.date}>December 15, 2024</time>
                <p className={styles.imageContentText}>
                  Highlight: benefits of routine dental check-ups in children
                  under 12 years old
                </p>
                <div className={styles.blogReadMorelink}>
                  <a href="#" className={styles.readMore} target="true">
                    READ MORE
                    <img
                      src="./img/about/arrow.svg"
                      width={14}
                      height={15}
                      alt=""
                      aria-hidden={true}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.newsCard}>
              <img
                src="./img/blog/card3.svg"
                width={593}
                height={278}
                className={styles.card}
                alt=""
              />
              <div className={styles.blogImageContent}>
                <time className={styles.date}>December 15, 2024</time>
                <p className={styles.imageContentText}>
                  Highlight: benefits of routine dental check-ups in children
                  under 12 years old
                </p>
                <div className={styles.blogReadMorelink}>
                  <a href="#" className={styles.readMore} target="true">
                    READ MORE
                    <img
                      src="./img/about/arrow.svg"
                      width={14}
                      height={15}
                      alt=""
                      aria-hidden={true}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
