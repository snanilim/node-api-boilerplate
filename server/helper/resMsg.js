const logger = require('../settings/winston');
const { resEnd } = require('./util');

exports.resMsg = (sendMsg, status, req, res, next) => {
    const message = sendMsg;
    message.result = 'success';

    logger.success({ status, message, transactionID: req.uniqID });

    res.status(status);
    res.json(message);
    resEnd(req);
    return res.end();
};
