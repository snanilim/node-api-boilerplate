const httpStatus = require('http-status');

ApiError = (res, statusCode, message) => {
    res.status(statusCode).send({
        status: "Error",
        message: message
    });
}

module.exports = ApiError;