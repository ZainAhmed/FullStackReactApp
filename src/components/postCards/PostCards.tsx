"use client";
import { getPosts } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import styles from "./PostCards.module.css";
import PostCard from "./postCard/PostCard";

function PostCards() {
  const { data: postsData, error: postsError } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  if (postsError) {
    return <div>{postsError.message}</div>;
  }
  return (
    <div className={styles.container}>
      {postsData?.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export default PostCards;
