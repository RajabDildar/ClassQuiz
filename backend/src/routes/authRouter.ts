import express from "express";
import {
  registerNewUser,
  resendNewOtp,
  verifyOtp,
  loginUser,
  giveMyInfo,
  logoutUser,
} from "../controllers/authController.js";
import { otpLimiter, signupLimiter } from "../utils/rateLimiter.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/signup").post(signupLimiter, registerNewUser);
router.route("/signup/verify-otp/").post(verifyOtp);
router.route("/signup/resend-otp/").post(otpLimiter, resendNewOtp);
router.route("/login").post(loginUser);
router.route("/me").get(authenticateUser, giveMyInfo);
router.route("/logout").get(logoutUser);

export default router;
