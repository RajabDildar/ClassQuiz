class ExpressError extends Error {
    statusCode;
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
module.exports = ExpressError;
export {};
//# sourceMappingURL=ExpressError.js.map