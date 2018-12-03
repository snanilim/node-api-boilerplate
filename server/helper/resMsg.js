exports.resMsg = (sendMsg, status, res, next) => {
    const message = sendMsg;
    message.result = 'success';

    res.status(status);
    console.log('message', message);
    return res.json(message);
};
