import mongoose from "mongoose";
const Schema = mongoose.Schema;
import crypto from "crypto";
import { EmailOtp } from "./EmailOtp.js";
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    role: {
        type: String,
        enum: ["student", "teacher"],
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
userSchema.post("save", async (user, next) => {
    try {
        const generatedOtp = crypto.randomInt(1000, 9999).toString();
        const otpExpiresAt = Date.now() + 5 * 60 * 1000;
        const Otp = new EmailOtp({
            otp: generatedOtp,
            otpExpiresAt,
            userId: user._id,
        });
        await Otp.save();
        console.log("Otp saved in DB.");
        next();
    }
    catch (error) {
        console.log(error);
    }
});
const User = mongoose.model("User", userSchema);
export default User;
//# sourceMappingURL=User.js.map