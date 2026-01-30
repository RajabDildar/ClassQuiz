import nodemailer from "nodemailer";
import ExpressError from "../utils/ExpressError.js";
import { HttpStatus } from "../utils/httpStatusCodes.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface OTPInterface {
  recipientName: string;
  recipientEmail: string;
  otp: string;
}

const sendOTP = async ({
  recipientName,
  recipientEmail,
  otp,
}: OTPInterface) => {
  const mailOptions = {
    from: `"Examino" <${process.env.EMAIL_USER}>`,
    to: recipientEmail,
    subject: "OTP Alert",
    html: `<p>Dear ${recipientName.toUpperCase()},</p><p>Your One Time Password (OTP) has been generated upon request for User Registration. <b>Your OTP is: ${otp}</b>, that can be used only once and is valid for next 5 mins.</p><br/><p>For your own security please do not share this OTP with anyone.</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw new ExpressError(
      HttpStatus.SERVICE_UNAVAILABLE,
      "Failed to send OTP at EMAIL",
    );
  }
};

export { sendOTP };
