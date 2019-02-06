const config = require('config');
const constants = require('./constMsg');
const APIError = require('./apiError');
const { resEnd } = require('./util');
const logger = require('../settings/winston')(__filename);

const errorHandler = (err, req, res, next) => {
    const errorMessage = {
        message: err.message,
        errors: err.errors,
        stack: err.stack,
    };

    if (config.util.getEnv('NODE_ENV') !== 'development') {
        delete errorMessage.stack;
    }

    logger.error({ status: err.status || 500, message: errorMessage, transactionID: req.uniqID });

    res.status(err.status || 500);
    res.json(errorMessage);
    resEnd(req);
    return res.end();
};

exports.errorHandler = errorHandler;

exports.notFound = (req, res, next) => {
    const err = new APIError({
        message: constants.NOT_FOUND,
        status: constants.NOT_FOUND_CODE,
    });
    return errorHandler(err, req, res);
};
