"use client";
import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import { PostType } from "@/api/apiTypes";

type PropsType = { post: PostType };
function PostCard({ post }: PropsType) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.id}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
