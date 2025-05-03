"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // const queryClient = getQueryClient();
  const trpc = useTRPC();
  // const categories = queryClient.fetchQuery(trpc.categories.getMany.queryOptions());
  const categories = useQuery(trpc.categories.getMany.queryOptions());

  return (
    <div>
      <p>is loading: {`${categories.isLoading}`}</p>
      {JSON.stringify(categories.data, null, 2)}
    </div>
  );
}
