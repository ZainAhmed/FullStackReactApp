"use client";
import { getUser } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import styles from "./user.module.css";

type PropsType = {
  userId: string;
};
function User({ userId }: PropsType) {
  const { data: userData, error: userError } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(userId),
    enabled: Boolean(userId.length > 0),
  });
  if (userError) {
    return <div>Error Loading Data</div>;
  }
  return (
    <div className={styles.detailText}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>{userData?.name}</span>
    </div>
  );
}

export default User;
