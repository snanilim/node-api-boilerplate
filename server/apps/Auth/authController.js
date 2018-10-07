const { resMsg } = require('../../helper/resMsg');
const { saveNewUser, checkUser } = require('./authHelper');
const constMsg = require('../../helper/constMsg');


exports.signUp = async (req, res, next) => {
    const { body: data } = req;
    try {
        const resSaveUser = await saveNewUser(data);
        const message = { message: constMsg.SIGNUP };
        const sendMessage = { user: resSaveUser.user, token: resSaveUser.token, message };
        return resMsg(sendMessage, constMsg.CREATED_CODE, res, next);
        console.log('after call');
    } catch (error) {
        return next(error);
    }
};

exports.logIn = async (req, res, next) => {
    const { body: data } = req;
    try {
        const resLogUser = await checkUser(data);
        const message = { message: constMsg.LOGIN };
        const sendMessage = { user: resLogUser.user, token: resLogUser.token, message };
        return resMsg(sendMessage, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};
