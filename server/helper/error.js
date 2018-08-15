const { environment } = require('../config/env');
const constants = require('./message');
const APIError = require('./apiError');
const logger = require('../config/winston');

const errorHandler = (err, req, res, next) => {
    const errorMessage = {
        error: {
            message: err.message,
            errors: err.errors,
            stack: err.stack,
        },
    };

    if (environment !== 'development') {
        delete errorMessage.error.stack;
    }

    logger.info({ status: err.status, message: errorMessage });

    res.status(err.status || 500);
    res.json(errorMessage);
    res.end();
};

exports.errorHandler = errorHandler;

exports.notFound = (req, res, next) => {
    const err = new APIError({
        message: constants.NOT_FOUND,
        status: constants.NOT_FOUND_CODE,
    });
    return errorHandler(err, req, res);
};
