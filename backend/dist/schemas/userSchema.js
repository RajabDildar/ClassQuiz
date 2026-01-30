import Joi from "joi";
export const userSchema = Joi.object({
    name: Joi.string().min(3).trim().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().valid("teacher", "student").required(),
});
//# sourceMappingURL=userSchema.js.map