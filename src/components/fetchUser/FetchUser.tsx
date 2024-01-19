import { getUser } from "@/api/api";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import User from "./user/User";

type PropsType = { userId: string };

async function FetchUser({ userId }: PropsType) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user"],
    queryFn: () => getUser(userId),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <User userId={userId} />
    </HydrationBoundary>
  );
}

export default FetchUser;
