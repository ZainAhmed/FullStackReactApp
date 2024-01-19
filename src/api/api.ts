import { PostType, UserType } from "./apiTypes";

export const getPosts = async (): Promise<PostType[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const getPost = async (id: number): Promise<PostType> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const getUser = async (id: string): Promise<UserType> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
