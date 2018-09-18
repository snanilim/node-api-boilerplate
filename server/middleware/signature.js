const md5 = require('md5');
const config = require('config');
const ThrowError = require('../helper/throwError');
const constants = require('../helper/constMsg');
const logger = require('../settings/winston');

const signature = (req, res, next) => {
    logger.info({ status: 'start', message: req.body });
    const headerSign = req.headers.signature;
    const { body: data } = req;
    const dataStr = JSON.stringify(data);
    const dataTrim = dataStr.trim();
    const createdSign = md5(`${dataTrim}${config.get('app_key')}`);

    if (config.util.getEnv('NODE_ENV') === 'development') {
        return next();
    }

    if (createdSign === headerSign) {
        return next();
    }
    throw new ThrowError({
        message: constants.SIGNATURE_INVALID,
        status: constants.ACCESS_FORBIDDEN_CODE,
    });
};

module.exports = signature;
