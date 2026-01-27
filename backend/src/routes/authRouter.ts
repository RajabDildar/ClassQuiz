import express from "express";
import {
  registerNewUser,
  resendNewOtp,
  verifyOtp,
  loginUser,
} from "../controllers/authController.js";
import { otpLimiter } from "../utils/otpLimiter.js";

const router = express.Router();

router.route("/signup").post(registerNewUser);
router.route("/signup/verify-otp/").post(verifyOtp);
router.route("/signup/resend-otp/").post(otpLimiter, resendNewOtp);
router.route("/login").post(loginUser);

export default router;
