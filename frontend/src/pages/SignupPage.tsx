import OtpVerification from "@/components/forms/auth/signup/OtpVerification";
import Signup from "@/components/forms/auth/signup/Signup";
import type SignupFormSchema from "@/components/forms/auth/signup/SignupFormSchema";
import { useSignup } from "@/hooks/useSignup";
import { useState } from "react";
import type z from "zod";

const SignupPage = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [email, setEmail] = useState("");

  const { mutate, isPending } = useSignup();

  const signupUser = (data: z.infer<typeof SignupFormSchema>) => {
    mutate(data, {
      onSettled: () => {
        setEmail(data.email);
      },
      onSuccess: () => {
        setIsSignedUp(true);
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-dvh p-3 pt-20 bg-gray-50">
      {isSignedUp ? (
        <OtpVerification email={email} />
      ) : (
        <Signup onSubmit={signupUser} loading={isPending} />
      )}
    </div>
  );
};

export default SignupPage;
