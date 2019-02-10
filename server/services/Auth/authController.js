const { resMsg } = require('../../helper/resMsg');
const { saveNewUser, checkUser } = require('./authHelper');
const constMsg = require('../../helper/constMsg');


exports.signUp = async (req, res, next) => {
    try {
        const { body: data } = req;
        const resSaveUser = await saveNewUser(data);
        const message = constMsg.SIGNUP;
        const sendMessage = { user: resSaveUser.user, token: resSaveUser.token, message };
        return resMsg(sendMessage, constMsg.CREATED_CODE, req, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.logIn = async (req, res, next) => {
    try {
        const { body: data } = req;
        const resLogUser = await checkUser(data);
        const message = { message: constMsg.LOGIN };
        const sendMessage = { user: resLogUser.user, token: resLogUser.token, message };
        return resMsg(sendMessage, constMsg.SUCCESS_CODE, req, res, next);
    } catch (error) {
        return next(error);
    }
};
