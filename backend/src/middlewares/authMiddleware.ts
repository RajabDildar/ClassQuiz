import type { NextFunction } from "express";
import { HttpStatus } from "../utils/httpStatusCodes.js";
import ExpressError from "../utils/ExpressError.js";
import { verifyJwt } from "../utils/jwt.js";

const authenticateUser = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ExpressError(HttpStatus.UNAUTHORIZED, "Not authenticated");
  }

  const token = authHeader.split(" ")[1];

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
