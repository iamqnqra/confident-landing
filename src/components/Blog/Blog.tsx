import Container from "../../shared/UIkit/Container/Container";
import { Button } from "../../shared/UIkit/Button/Button";
import styles from "./Blog.module.css";
import { NewsCard } from "./NewsCard/NewsCard";

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
            <NewsCard />
          </div>
        </div>
      </Container>
    </section>
  );
};
