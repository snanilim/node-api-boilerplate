const httpStatus = require('http-status');

class InitError extends Error{
    constructor({
        message, error, status, isPublic, stack,
    }){
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.error = error;
        this.status = status;
        this.isPublic = isPublic;
        this.isOperational = true;
        this.stack = stack;
        
    }
}


class ApiError extends InitError{
    constructor({
        message,
        errors,
        stack,
        status = httpStatus.INTERNAL_SERVER_ERROR,
        isPublic = false,
      }) {
        super({
          message, errors, status, isPublic, stack,
        });
      }
}

module.exports = ApiError;