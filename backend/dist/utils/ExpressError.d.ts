import type { HttpStatus } from "./httpStatusCodes.js";
declare class ExpressError extends Error {
    statusCode: number;
    constructor(statusCode: HttpStatus, message: string);
}
export default ExpressError;
//# sourceMappingURL=ExpressError.d.ts.map