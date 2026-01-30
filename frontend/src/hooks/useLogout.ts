import { logoutUser } from "@/api/auth";
import { showErrorToast } from "@/lib/showErrorToast";
import { showInfoToast } from "@/lib/showInfoToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["auth"] });
      queryClient.removeQueries({ queryKey: ["auth"] });
      queryClient.clear();
      showInfoToast(data.message);
    },
    onError: (error: any) => {
      if (error?.response?.data?.message) {
        showErrorToast(error.response.data.message);
      } else {
        showErrorToast("Logout failed!");
      }
    },
  });
};
