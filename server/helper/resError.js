const config = require('config');
const constants = require('./constMsg');
const ThrowError = require('./throwError');
const logger = require('../settings/winston');

const errorHandler = (err, req, res, next) => {
    console.log('err', err);
    const errorMessage = {
        message: err.message,
        errors: err.errors,
        stack: err.stack,
    };

    if (config.util.getEnv('NODE_ENV') !== 'development') {
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
