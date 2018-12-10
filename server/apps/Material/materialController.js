const { resMsg } = require('../../helper/resMsg');
const {
    listAllMaterials,
    addNewMaterial,
    oneMaterial,
    updateOneMaterial,
    deleteMaterial,
} = require('./materialHelper');
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

exports.updateMaterial = async (req, res, next) => {
    const { body, params } = req;
    try {
        const resNewMaterial = await updateOneMaterial(params.materialID, body);
        const message = constMsg.CREATED;
        const sendMessage = { material: resNewMaterial, message };
        return resMsg(sendMessage, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.materialList = async (req, res, next) => {
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
        const resOneMaterial = await oneMaterial(params.materialID);
        return resMsg(resOneMaterial, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};

exports.deleteMaterial = async (req, res, next) => {
    const { params } = req;
    try {
        await deleteMaterial(params.materialID);
        return resMsg(constMsg.DELETED, constMsg.SUCCESS_CODE, res, next);
    } catch (error) {
        return next(error);
    }
};
