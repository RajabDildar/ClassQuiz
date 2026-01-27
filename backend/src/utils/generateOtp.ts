import crypto from "crypto";

export const generateOtp = async () => {
  const otp = crypto.randomInt(100000, 1000000).toString();
  console.log("Otp is: ", otp);
  return otp;
};
