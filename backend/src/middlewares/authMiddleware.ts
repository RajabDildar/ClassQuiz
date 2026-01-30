import { HttpStatus } from "../utils/httpStatusCodes.js";
import ExpressError from "../utils/ExpressError.js";
import { verifyJwt } from "../utils/jwt.js";
import { type Response, type NextFunction } from "express";

const authenticateUser = (req: any, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token;

  if (!token) {
    throw new ExpressError(HttpStatus.FORBIDDEN, "Not authenticated");
  }

  const decoded = verifyJwt(token);
  req.user = decoded;

  next();
};

const isTeacher = (req: any, res: Response, next: NextFunction) => {
  if (req.user.role !== "teacher") {
    throw new ExpressError(HttpStatus.FORBIDDEN, "Access denied");
  }
  next();
};

const isStudent = (req: any, res: Response, next: NextFunction) => {
  if (req.user.role !== "student") {
    throw new ExpressError(HttpStatus.FORBIDDEN, "Access denied");
  }
  next();
};

export { authenticateUser, isStudent, isTeacher };
