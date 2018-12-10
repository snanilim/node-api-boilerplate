const express = require('express');
const { isAuthorized, USER } = require('../../middleware/auth');
const materialController = require('./materialController');
const validator = require('./materialValidator');

const router = express.Router();

router
    .route('/')
    .get(isAuthorized(USER), validator.listMaterials, materialController.materialList)
    .post(isAuthorized(USER), validator.createMaterial, materialController.createMaterial);

router
    .route('/:materialID')
    .get(isAuthorized(USER), materialController.getOneMaterial)
    .put(isAuthorized(USER), materialController.updateMaterial)
    .delete(isAuthorized(USER), materialController.deleteMaterial);


module.exports = router;
