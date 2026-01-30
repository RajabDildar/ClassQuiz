import { useMutation } from "@tanstack/react-query";
import { signupUser } from "@/api/auth";
import { showErrorToast } from "@/lib/showErrorToast";
import { showInfoToast } from "@/lib/showInfoToast";

export const useSignup = () => {
  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      showInfoToast(data.message);
    },
    onError: (error: any) => {
      if (error?.response?.data?.message) {
        showErrorToast(error.response.data.message);
      } else {
        showErrorToast("Unexpected error occured");
      }
    },
  });
};
