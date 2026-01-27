import jwt from "jsonwebtoken";

export const signJwt = (payload: object) => {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

export const verifyJwt = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};
