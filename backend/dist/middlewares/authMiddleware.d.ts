import { type Response, type NextFunction } from "express";
declare const authenticateUser: (req: any, res: Response, next: NextFunction) => void;
declare const isTeacher: (req: any, res: Response, next: NextFunction) => void;
declare const isStudent: (req: any, res: Response, next: NextFunction) => void;
export { authenticateUser, isStudent, isTeacher };
//# sourceMappingURL=authMiddleware.d.ts.map