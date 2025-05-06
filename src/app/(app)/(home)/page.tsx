"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // const queryClient = getQueryClient(); -> only for server side rendering, not for client side
  const trpc = useTRPC();
  // const categories = queryClient.fetchQuery(trpc.categories.getMany.queryOptions());
  // const categories = useQuery(trpc.categories.getMany.queryOptions());
  const { data } = useQuery(trpc.auth.session.queryOptions());

  return <div>{JSON.stringify(data?.user, null, 2)}</div>;
}
