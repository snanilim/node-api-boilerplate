const { resMsg } = require('../../helper/resMsg');
const { listAllMaterials, addNewMaterial, oneMaterial } = require('./materialHelper');
const constMsg = require('../../helper/constMsg');

exports.createMaterial = async (req, res, next) => {
    const { body } = req;
    try {
        const resNewMaterial = await addNewMaterial(body);
        const message = constMsg.CREATED;
        const sendMessage = { material: resNewMaterial, message };
        return resMsg(sendMessage, constMsg.CREATED_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.MaterialList = async (req, res, next) => {
    const { query } = req;
    try {
        const resAllMaterial = await listAllMaterials(query);
        return resMsg(resAllMaterial, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.getOneMaterial = async (req, res, next) => {
    const { params } = req;
    try {
        const resOneMaterial = await oneMaterial(params.MaterialID);
        return resMsg(resOneMaterial, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};
