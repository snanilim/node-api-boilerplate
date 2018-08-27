const { environment } = require('../config/env');
const constants = require('./constMsg');
const ThrowError = require('./throwError');
const logger = require('../config/winston');

const errorHandler = (err, req, res, next) => {
    const errorMessage = {
        message: err.message,
        errors: err.errors,
        stack: err.stack,
    };

    if (environment !== 'development') {
        delete errorMessage.stack;
    }

    logger.info({ status: err.status, message: errorMessage });

    res.status(err.status || 500);
    res.json(errorMessage);
    res.end();
};

exports.errorHandler = errorHandler;

exports.notFound = (req, res, next) => {
    const err = new ThrowError({
        message: constants.NOT_FOUND,
        status: constants.NOT_FOUND_CODE,
    });
    return errorHandler(err, req, res);
};