const { resMsg } = require('../../helper/resMsg');
const { listAllCosts, addNewCost, oneCost } = require('./costHelper');
const constMsg = require('../../helper/constMsg');

exports.createCost = async (req, res, next) => {
    const { body } = req;
    try {
        const resNewCost = await addNewCost(body);
        const message = constMsg.CREATED;
        const sendMessage = { cost: resNewCost, message };
        return resMsg(sendMessage, constMsg.CREATED_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.costList = async (req, res, next) => {
    const { query } = req;
    try {
        const resAllCost = await listAllCosts(query);
        return resMsg(resAllCost, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.getOneCost = async (req, res, next) => {
    const { params } = req;
    try {
        const resOneCost = await oneCost(params.CostID);
        return resMsg(resOneCost, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};
