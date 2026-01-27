import { type Response, type Request } from "express";
import User from "../models/User.js";
import Hash from "../utils/Hash.js";
import { userSchema } from "../schemas/userSchema.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ExpressError from "../utils/ExpressError.js";
import { HttpStatus } from "../utils/httpStatusCodes.js";
import { EmailOtp } from "../models/EmailOtp.js";
import bcrypt from "bcrypt";
import { signJwt } from "../utils/jwt.js";
import { emailOtpSchema } from "../schemas/emailOtpSchema.js";
import createAndSendOtp from "../services/otpService.js";

const registerNewUser = AsyncHandler(async (req: Request, res: Response) => {
  let { error } = userSchema.validate(req.body);
  if (error) {
    throw new ExpressError(HttpStatus.BAD_REQUEST, "User data is not valid.");
  }

  let { name, email, password, role } = req.body;
  const passwordHash = await Hash(password);

  let user = await User.findOne({ email });
  if (user) {
    return res
      .status(HttpStatus.CONFLICT)
      .send("Account already exists on this email.");
  }

  const newUser = await User.create({ name, email, role, passwordHash });
  await createAndSendOtp(newUser);
  res.status(HttpStatus.CREATED).json({
    message: "User registered. OTP sent to email.",
  });
});

const resendNewOtp = AsyncHandler(async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) {
    throw new ExpressError(400, "Email is required");
  }

  const user = await User.findOne({ email });
  if (!user || user.isVerified) {
    throw new ExpressError(
      HttpStatus.BAD_REQUEST,
      "If the account exists, an otp has been sent.",
    );
  }

  const existingOtp = await EmailOtp.findOne({ userId: user._id });
  if (existingOtp && Date.now() - existingOtp.createdAt.getTime() < 60_000) {
    throw new ExpressError(429, "Please wait before requesting another OTP");
  }

  await createAndSendOtp(user);
  res
    .status(HttpStatus.CREATED)
    .json({ message: "If the account exists, an otp has been sent." });
});

const verifyOtp = AsyncHandler(async (req: Request, res: Response) => {
  let { error } = emailOtpSchema.validate(req.body);
  if (error) {
    throw new ExpressError(HttpStatus.BAD_REQUEST, "User data is not valid.");
  }

  const { email, otp } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new ExpressError(HttpStatus.BAD_REQUEST, "Invalid credentials.");
  }

  const realOtp = await EmailOtp.findOne({ userId: user.id });
  if (!realOtp || user.isVerified) {
    throw new ExpressError(
      HttpStatus.NOT_FOUND,
      "OTP expired. Request new OTP if possible.",
    );
  }

  if (realOtp.otpExpiresAt < new Date()) {
    await EmailOtp.deleteOne({ _id: realOtp._id });
    throw new ExpressError(HttpStatus.BAD_REQUEST, "OTP expired");
  }

  if (realOtp.attempts >= 5) {
    await EmailOtp.deleteOne({ _id: realOtp._id });
    throw new ExpressError(
      HttpStatus.FORBIDDEN,
      "Too many failed attempts. Request a new OTP.",
    );
  }

  const isMatch = await bcrypt.compare(otp, realOtp.otpHash);
  if (isMatch) {
    user.isVerified = true;
    await user.save();
    await EmailOtp.deleteOne({ _id: realOtp._id });
    res.status(HttpStatus.OK).send("Otp Verified successfully!");
  } else {
    realOtp.attempts += 1;
    await realOtp.save();
    res.status(HttpStatus.BAD_REQUEST).send("Otp is wrong. try again!");
  }
});

const loginUser = AsyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new ExpressError(HttpStatus.BAD_REQUEST, "Invalid credentials");
  }

  if (!user.isVerified) {
    throw new ExpressError(HttpStatus.UNAUTHORIZED, "Email not verified");
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    throw new ExpressError(HttpStatus.BAD_REQUEST, "Invalid credentials");
  }

  const token = signJwt({
    userId: user._id,
    role: user.role,
  });

  res.status(HttpStatus.OK).json({
    token,
    user: {
      name: user.name,
      role: user.role,
    },
  });
});

export { registerNewUser, resendNewOtp, verifyOtp, loginUser };
