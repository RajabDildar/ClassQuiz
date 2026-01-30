import axios from "axios";
import type z from "zod";
import type SignupFormSchema from "@/components/forms/auth/signup/SignupFormSchema";
import type LoginFormSchema from "@/components/forms/auth/login/LoginFormSchema";

axios.defaults.withCredentials = true;

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const signupUser = async (data: z.infer<typeof SignupFormSchema>) => {
  await axios.get(`${API_URL}/auth/logout`);

  const res = await axios.post(`${API_URL}/auth/signup`, data);

  return res.data;
};

export const loginUser = async (data: z.infer<typeof LoginFormSchema>) => {
  await axios.get(`${API_URL}/auth/logout`);

  const res = await axios.post(`${API_URL}/auth/login`, data);

  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.get(`${API_URL}/auth/logout`);

  return res.data;
};

export const authMe = async () => {
  const res = await axios.get(`${API_URL}/auth/me`);

  return res.data.user;
};

export const verifyOtp = async (email: string, otp: string) => {
  const res = await axios.post(`${API_URL}/auth/signup/verify-otp/`, {
    email,
    otp,
  });
  return res.data;
};

export const resendOtp = async (email: string) => {
  const res = await axios.post(`${API_URL}/auth/signup/resend-otp/`, { email });
  return res.data;
};
