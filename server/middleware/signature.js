const md5 = require('md5');
const env = require('../config/env');
const APIError = require('../helper/apiError');
const constants = require('../helper/message');
const logger = require('../config/winston');

const signature = (req, res, next) => {
    logger.info({ status: 'start', message: req.body });
    const signValue = req.headers.signature;
    const { body } = req.body;
    const value = md5(`${body}${env.app_key}`);
    if (value === signValue) {
        next();
    } else {
        throw new APIError({
            message: constants.SIGNATURE_INVALID,
            status: constants.ACCESS_FORBIDDEN_CODE,
        });
    }
};

module.exports = signature;
