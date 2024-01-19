"use client";
import { getPost } from "@/api/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, Suspense, useEffect } from "react";
import styles from "./singlePost.module.css";

type PropsType = {
  postId: number;
  children: ReactNode;
};

const errorComponent = <div>An error occured</div>;

function SinglePost({ postId, children }: PropsType) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data: postData, isSuccess } = useSuspenseQuery({
    queryKey: ["post"],
    queryFn: () => getPost(postId),
  });

  useEffect(() => {
    if (isSuccess) {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.set("userId", postData?.userId.toString());
      const query = current ? `?${current}` : "";
      router.push(`${pathname}${query}`);
    }
    return;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{postData?.title}</h1>
        <div className={styles.detail}>
          <Image
            src="/about.png"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.24</span>
          </div>
        </div>
        <div className={styles.content}>{postData?.body}</div>
      </div>
    </div>
  );
}

export default SinglePost;
