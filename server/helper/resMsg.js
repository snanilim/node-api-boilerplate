exports.resMsg = (sendMsg, status, res, next) => {
    const message = sendMsg;
    message.result = 'success';

    res.status(status);
    res.json(message);
    res.end();
};
