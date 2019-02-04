const moment = require('moment');
const uuidv1 = require('uuid/v1');
const logger = require('../settings/winston');

exports.resTimeChecker = (title) => {
    console.log(`${title} : ${moment().format()}`, 'background: #222; color: #bada55');
    return true;
};

exports.resStart = (req, res, next) => {
    req.start = Date.now();
    req.uniqID = uuidv1();
    logger.start({ status: 'start', message: req.body, transactionID: req.uniqID });
    next();
};

exports.resEnd = (req, res) => {
    const time = Date.now() - req.start;
    return logger.end({ resTime: time, transactionID: req.uniqID });
};
