const { resMsg } = require('../../helper/resMsg');
const { listAllUsers } = require('./userHelper');
const constMsg = require('../../helper/constMsg');


exports.allUsers = async (req, res, next) => {
    const { query } = req;
    try {
        const resAllUser = await listAllUsers(query);
        return resMsg(resAllUser, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};
