import Image from "next/image";
import styles from "./singlePost.module.css";

function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/about.png"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.24</span>
          </div>
        </div>
        <div className={styles.content}>desc</div>
      </div>
    </div>
  );
}

export default SinglePostPage;
