import Login from "@/components/forms/auth/login/Login";
import type LoginFormSchema from "@/components/forms/auth/login/LoginFormSchema";
import OtpVerification from "@/components/forms/auth/signup/OtpVerification";
import { HttpStatus } from "@/components/utils/httpStatusCodes";
import { useLogin } from "@/hooks/useLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type z from "zod";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(true);
  const loginMutation = useLogin();
  const { isPending } = useLogin();

  async function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    loginMutation.mutate(data, {
      onSettled: () => {
        setEmail(data.email);
      },
      onSuccess: () => {
        navigate("/dashboard", { replace: true });
      },
      onError: (error) => {
        if (error.status === HttpStatus.UNAUTHORIZED) {
          setIsVerified(false);
        }
      },
    });
  }

  return (
    <div className="flex justify-center items-center min-h-dvh p-3 bg-gray-50">
      {isVerified ? (
        <Login onSubmit={onSubmit} loading={isPending} />
      ) : (
        <OtpVerification email={email} />
      )}
    </div>
  );
};

export default LoginPage;
