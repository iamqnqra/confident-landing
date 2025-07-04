import styles from "./NewsCard.module.css";
import { blogData } from "./NewsCard.const";
import LinkWithArrow from "../../../shared/UIkit/Link/Link";

export const NewsCard = () => {
  return (
    <>
      {blogData.map((blog, index) => (
        <div key={index} className={styles.newsCard}>
          <img
            src={blog.imgSrc}
            width={blog.imgWidth}
            height={blog.imgHeight}
            className={styles.card}
            alt="Background image for News Card"
          />
          <div className={styles.blogImageContent}>
            <time className={styles.date}>{blog.date}</time>
            <p className={styles.imageContentText}> {blog.text}</p>
            <LinkWithArrow href="#">READ MORE</LinkWithArrow>
          </div>
        </div>
      ))}
    </>
  );
};
