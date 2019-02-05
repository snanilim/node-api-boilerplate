const { resMsg } = require('../../helper/resMsg');
const {
    createNew,
    updateOne,
    getAll,
    getOne,
    removeOne,
} = require('./userHelper');
const constMsg = require('../../helper/constMsg');

exports.create = async (req, res, next) => {
    const { body } = req;
    try {
        const resCreateNew = await createNew(body);
        const message = constMsg.CREATED;
        const sendMessage = { user: resCreateNew, message };
        return resMsg(sendMessage, constMsg.CREATED_CODE, req, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.update = async (req, res, next) => {
    const { body, params } = req;
    try {
        const resUpdateOne = await updateOne(params.userID, body);
        const message = constMsg.CREATED;
        const sendMessage = { user: resUpdateOne, message };
        return resMsg(sendMessage, constMsg.SUCCESS_CODE, req, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.list = async (req, res, next) => {
    const { query } = req;
    try {
        const resGetAll = await getAll(query);
        return resMsg(resGetAll, constMsg.SUCCESS_CODE, req, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.get = async (req, res, next) => {
    const { params } = req;
    try {
        const resGetOne = await getOne(params.userID);
        return resMsg(resGetOne, constMsg.SUCCESS_CODE, req, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.delete = async (req, res, next) => {
    const { params } = req;
    try {
        await removeOne(params.userID);
        return resMsg(constMsg.DELETED, constMsg.SUCCESS_CODE, req, res, next);
    } catch (error) {
        return next(error);
    }
};
