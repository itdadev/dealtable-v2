import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchInterval: 60 * 1000 * 180, // 3 hrs
      refetchIntervalInBackground: true,
      suspense: false,
      staleTime: Infinity,
      cacheTime: Infinity,
      keepPreviousData: true,
    },
    mutations: {
      retry: 0,
    },
  },
};

const queryClient = new QueryClient(queryClientConfig);

export const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
