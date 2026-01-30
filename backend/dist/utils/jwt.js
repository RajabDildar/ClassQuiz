import jwt from "jsonwebtoken";
import ExpressError from "./ExpressError.js";
import { HttpStatus } from "./httpStatusCodes.js";
export const signJwt = (payload) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new ExpressError(HttpStatus.FORBIDDEN, "JWT_SECRET is not defined in environment variables");
    }
    return jwt.sign(payload, secret, {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });
};
export const verifyJwt = (token) => {
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new ExpressError(HttpStatus.FORBIDDEN, "JWT_SECRET is not defined");
        }
        return jwt.verify(token, secret);
    }
    catch (error) {
        throw new ExpressError(HttpStatus.FORBIDDEN, "Failed to authenticate.");
    }
};
//# sourceMappingURL=jwt.js.map