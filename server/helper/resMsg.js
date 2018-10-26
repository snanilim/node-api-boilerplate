exports.resMsg = (sendMsg, status, res, next) => {
    const message = sendMsg;
    message.result = 'success';

    res.status(status);
    return res.json(message);
};
