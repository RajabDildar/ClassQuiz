import jwt from "jsonwebtoken";
export declare const signJwt: (payload: Record<string, any>) => string;
export declare const verifyJwt: (token: string) => string | jwt.JwtPayload;
//# sourceMappingURL=jwt.d.ts.map