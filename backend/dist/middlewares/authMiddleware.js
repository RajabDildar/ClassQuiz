import { HttpStatus } from "../utils/httpStatusCodes.js";
import ExpressError from "../utils/ExpressError.js";
import { verifyJwt } from "../utils/jwt.js";
import {} from "express";
const authenticateUser = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        throw new ExpressError(HttpStatus.FORBIDDEN, "Not authenticated");
    }
    const decoded = verifyJwt(token);
    req.user = decoded;
    next();
};
const isTeacher = (req, res, next) => {
    if (req.user.role !== "teacher") {
        throw new ExpressError(HttpStatus.FORBIDDEN, "Access denied");
    }
    next();
};
const isStudent = (req, res, next) => {
    if (req.user.role !== "student") {
        throw new ExpressError(HttpStatus.FORBIDDEN, "Access denied");
    }
    next();
};
export { authenticateUser, isStudent, isTeacher };
//# sourceMappingURL=authMiddleware.js.map