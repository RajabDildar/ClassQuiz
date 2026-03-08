import type z from "zod";
import type SignupFormSchema from "@/components/forms/auth/signup/SignupFormSchema";
import type LoginFormSchema from "@/components/forms/auth/login/LoginFormSchema";
import { api } from "./api";

export const signupUser = async (data: z.infer<typeof SignupFormSchema>) => {
  await api.get("/auth/logout");

  const res = await api.post("/auth/signup", data);

  return res.data;
};

export const loginUser = async (data: z.infer<typeof LoginFormSchema>) => {
  await api.get("/auth/logout");

  const res = await api.post("/auth/login", data);

  return res.data;
};

export const logoutUser = async () => {
  const res = await api.get("/auth/logout");

  return res.data;
};

export const authMe = async () => {
  const res = await api.get("/auth/me");

  return res.data.user;
};

export const verifyOtp = async (email: string, otp: string) => {
  const res = await api.post("/auth/signup/verify-otp/", {
    email,
    otp,
  });
  return res.data;
};

export const resendOtp = async (email: string) => {
  const res = await api.post("/auth/signup/resend-otp/", { email });
  return res.data;
};
