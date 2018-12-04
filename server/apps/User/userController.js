const { resMsg } = require('../../helper/resMsg');
const {
    listAllUsers,
    addNewUser,
    oneUser,
    updateOneUser,
    deleteUser,
} = require('./userHelper');
const constMsg = require('../../helper/constMsg');

exports.createUser = async (req, res, next) => {
    const { body } = req;
    try {
        const resNewUser = await addNewUser(body);
        const message = constMsg.CREATED;
        const sendMessage = { user: resNewUser, message };
        return resMsg(sendMessage, constMsg.CREATED_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.updateUser = async (req, res, next) => {
    const { body, params } = req;
    try {
        const resNewUser = await updateOneUser(params.userID, body);
        const message = constMsg.CREATED;
        const sendMessage = { user: resNewUser, message };
        return resMsg(sendMessage, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.userList = async (req, res, next) => {
    const { query } = req;
    try {
        const resAllUser = await listAllUsers(query);
        return resMsg(resAllUser, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.getOneUser = async (req, res, next) => {
    const { params } = req;
    try {
        const resOneUser = await oneUser(params.userID);
        return resMsg(resOneUser, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    const { params } = req;
    try {
        await deleteUser(params.userID);
        return resMsg(constMsg.DELETED, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};
