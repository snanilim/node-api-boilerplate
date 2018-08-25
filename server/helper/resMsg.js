exports.resMsg = (newMsg, status, res, next) => {
    const message = {
        message: {
            result: 'Success',
            msg: newMsg,
        },
    };

    res.status(status);
    res.json(message);
    res.end();
};
