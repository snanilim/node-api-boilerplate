class ErrorExtend extends Error {
    constructor({
        message, errors, status, isPublic, stack,
    }) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.errors = errors;
        this.status = status;
        this.isPublic = isPublic;
        this.stack = stack;
    }
}


class ThrowError extends ErrorExtend {
    constructor({
        message,
        errors,
        status,
        isPublic = false,
        stack,
    }) {
        super({
            message, errors, status, isPublic, stack,
        });
    }
}

module.exports = ThrowError;
