import { QueryClient } from "@tanstack/react-query";
export const apiRoute = process.env.REACT_APP_BASE_URL;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export function commonHeaders() {
  return {
    headers: {
      "Content-Type": "application/json",
      "X-ACCESS-TOKEN": `${localStorage.getItem("authToken")}`,
    },
  };
}
