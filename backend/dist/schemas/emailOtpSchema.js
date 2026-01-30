import Joi from "joi";
export const emailOtpSchema = Joi.object({
    otp: Joi.string().min(6).max(6).trim().required(),
    email: Joi.string().email().required(),
});
//# sourceMappingURL=emailOtpSchema.js.map