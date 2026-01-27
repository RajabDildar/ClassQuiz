import mongoose from "mongoose";
const Schema = mongoose.Schema;
const emailOtpSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    otpExpiresAt: {
        type: Number,
        required: true,
    },
    attempts: {
        type: Number,
        default: 0,
    },
});
export const EmailOtp = mongoose.model("EmailOtp", emailOtpSchema);
//# sourceMappingURL=EmailOtp.js.map