import { EmailOtp } from "../models/EmailOtp.js";
import { generateOtp } from "../utils/generateOtp.js";
import Hash from "../utils/Hash.js";
import { sendOTP } from "./emailService.js";
const createAndSendOtp = async (user) => {
    const otp = await generateOtp();
    const otpHash = await Hash(otp);
    await EmailOtp.create({
        userId: user._id,
        otpHash,
        otpExpiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });
    await sendOTP({
        recipientName: user.name,
        recipientEmail: user.email,
        otp,
    });
};
export default createAndSendOtp;
//# sourceMappingURL=otpService.js.map