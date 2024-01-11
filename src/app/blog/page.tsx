import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";

function BlogPage() {
  return (
    <div className={styles.container}>
      {new Array(4).fill(4).map((e, i) => (
        <div key={i} className={styles.post}>
          <PostCard />
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
