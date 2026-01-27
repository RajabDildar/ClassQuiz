import type { HttpStatus } from "./httpStatusCodes.js";

class ExpressError extends Error {
  statusCode: number;
  constructor(statusCode: HttpStatus, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export default ExpressError;
