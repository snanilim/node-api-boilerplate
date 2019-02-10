const log = require('debug')('log:call');
const uuidv1 = require('uuid/v1');
const logger = require('../settings/winston')(__filename);

exports.resTimeChecker = title => log(`${title}`);


exports.resStart = (req, res, next) => {
    // console.log(req.get('User-Agent'));
    req.startTime = Date.now();
    req.uniqID = uuidv1();
    logger.start({
        message: req.body,
        url: req.url,
        method: req.method,
        userAgent: req.get('User-Agent'),
        transactionID: req.uniqID,
    });
    next();
};

exports.resEnd = (req, res) => {
    const time = Date.now() - req.startTime;
    return logger.end({ resTime: time, transactionID: req.uniqID });
};
