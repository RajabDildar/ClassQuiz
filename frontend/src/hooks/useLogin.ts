import { loginUser } from "@/api/auth";
import { showErrorToast } from "@/lib/showErrorToast";
import { showInfoToast } from "@/lib/showInfoToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      showInfoToast(data.message);
    },
    onError: (error: any) => {
      if (error?.response?.data?.message) {
        showErrorToast(error.response.data.message);
      } else {
        showErrorToast("Login failed!");
      }
    },
  });
};
