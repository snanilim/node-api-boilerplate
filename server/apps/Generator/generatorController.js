const { resMsg } = require('../../helper/resMsg');
const {
    listAllGenerators,
    addNewGenerator,
    oneGenerator,
    updateOneGenerator,
    deleteGenerator,
} = require('./generatorHelper');
const constMsg = require('../../helper/constMsg');

exports.createGenerator = async (req, res, next) => {
    const { body } = req;
    try {
        const resNewGenerator = await addNewGenerator(body);
        const message = constMsg.CREATED;
        const sendMessage = { generator: resNewGenerator, message };
        return resMsg(sendMessage, constMsg.CREATED_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.updateGenerator = async (req, res, next) => {
    const { body, params } = req;
    try {
        await updateOneGenerator(params.generatorID, body);
        const message = { message: constMsg.UPDATED };
        return resMsg(message, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.generatorList = async (req, res, next) => {
    const { query } = req;
    try {
        const resAllGenerator = await listAllGenerators(query);
        return resMsg(resAllGenerator, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.getOneGenerator = async (req, res, next) => {
    const { params } = req;
    try {
        const resOneGenerator = await oneGenerator(params.generatorID);
        return resMsg(resOneGenerator, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.deleteGenerator = async (req, res, next) => {
    const { params } = req;
    try {
        await deleteGenerator(params.generatorID);
        return resMsg(constMsg.DELETED, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};
