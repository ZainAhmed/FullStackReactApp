import { PostsType } from "./apiTypes";

export const getPosts = async (): Promise<PostsType[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
