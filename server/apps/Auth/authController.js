const { resMsg } = require('../../helper/resMsg');
const { checkUser, checkUserRole, checkRoleWisePermission } = require('./authHelper');
const constMsg = require('../../helper/constMsg');

exports.logIn = async (req, res, next) => {
    const { body: data } = req;
    try {
        const resUser = await checkUser(data);
        const resUserRole = await checkUserRole(resUser);
        const resRoleWisePermission = await checkRoleWisePermission(data);
        const message = { message: constMsg.LOGIN };
        const sendMessage = { user: resLogUser.user, token: resLogUser.token, message };
        return resMsg(sendMessage, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};
