import { authMe } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: authMe,
    retry: false,
    staleTime: 60 * 1000,
  });
};
