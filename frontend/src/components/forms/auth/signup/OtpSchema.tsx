import * as z from "zod";

const OtpSchema = z.object({
  otp: z.string().min(6, {
    message: "Verification code must be 6 characters.",
  }),
});

export default OtpSchema;
