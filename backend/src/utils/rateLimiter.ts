import rateLimit from "express-rate-limit";
import { HttpStatus } from "./httpStatusCodes.js";

export const otpLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  limit: 3,
  message: {
    status: HttpStatus.TOO_MANY_REQUESTS,
    message: "Too many OTP requests. Please try again in 5 minutes.",
  },
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

export const signupLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  limit: 5,
  message: {
    status: HttpStatus.TOO_MANY_REQUESTS,
    message: "Too many requests. Please try again in 5 minutes.",
  },
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
