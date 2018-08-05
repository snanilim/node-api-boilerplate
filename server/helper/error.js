const httpStatus = require('http-status');

class ThrowError extends Error{
    constructor({
        message, status
    }){
        super(message);
        this.status = status;
    }
}


class APIError extends ThrowError{
    constructor({
        message, status
    }){
        super({message, status});
    }
}

module.exports = APIError;
