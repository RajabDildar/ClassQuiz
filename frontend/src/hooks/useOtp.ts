import { useMutation } from "@tanstack/react-query";
import { verifyOtp, resendOtp } from "@/api/auth";
import { showErrorToast } from "@/lib/showErrorToast";
import { showInfoToast } from "@/lib/showInfoToast";

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: ({ email, otp }: { email: string; otp: string }) =>
      verifyOtp(email, otp),
    onSuccess: (data) => {
      showInfoToast(data.message);
    },
    onError: (error: any) => {
      if (error?.response?.data?.message) {
        showErrorToast(error.response.data.message);
      } else {
        showErrorToast("OTP verification failed");
      }
    },
  });
};

export const useResendOtp = () => {
  return useMutation({
    mutationFn: resendOtp,
    onSuccess: (data) => {
      showInfoToast(data.message);
    },
    onError: () => {
      showErrorToast("Failed to resend code");
    },
  });
};
