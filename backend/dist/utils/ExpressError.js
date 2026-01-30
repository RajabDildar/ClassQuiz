class ExpressError extends Error {
    statusCode;
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
export default ExpressError;
//# sourceMappingURL=ExpressError.js.map