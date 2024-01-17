import { getPosts } from "@/api/api";
import PostCards from "@/components/postCards/PostCards";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function BlogPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["posts"], queryFn: getPosts });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostCards />
    </HydrationBoundary>
  );
}

export default BlogPage;
