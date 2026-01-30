import { type Response, type Request } from "express";
declare const registerNewUser: (req: Request, res: Response, next: import("express").NextFunction) => void;
declare const resendNewOtp: (req: Request, res: Response, next: import("express").NextFunction) => void;
declare const verifyOtp: (req: Request, res: Response, next: import("express").NextFunction) => void;
declare const loginUser: (req: Request, res: Response, next: import("express").NextFunction) => void;
declare const logoutUser: (req: Request, res: Response, next: import("express").NextFunction) => void;
declare const giveMyInfo: (req: Request, res: Response, next: import("express").NextFunction) => void;
export { registerNewUser, resendNewOtp, verifyOtp, loginUser, giveMyInfo, logoutUser, };
//# sourceMappingURL=authController.d.ts.map