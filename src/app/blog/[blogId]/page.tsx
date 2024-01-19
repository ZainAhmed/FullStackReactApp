import { getPost } from "@/api/api";
import FetchUser from "@/components/fetchUser/FetchUser";
import SinglePost from "@/components/singlePost/SinglePost";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

type PageProps = {
  params: {
    blogId: number;
  };
  searchParams: { [key: string]: string | undefined };
};

async function SinglePostPage({ params, searchParams }: PageProps) {
  const { blogId } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["post"],
    queryFn: () => getPost(blogId),
  });
  const selectedSearch = searchParams?.userId ?? "";
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SinglePost postId={blogId}>
        {selectedSearch.length > 0 ? (
          <FetchUser userId={selectedSearch} />
        ) : (
          <>Loading</>
        )}
      </SinglePost>
    </HydrationBoundary>
  );
}

export default SinglePostPage;
