const express = require('express');
const { isAuthorized, USER } = require('../../middleware/auth');
const costController = require('./costController');
const validator = require('./costValidator');

const router = express.Router();

router
    .route('/')
    .get(isAuthorized(USER), validator.listCosts, costController.costList)
    .post(isAuthorized(USER), validator.createCost, costController.createCost);

router
    .route('/:costID')
    .get(isAuthorized(USER), costController.getOneCost)
    .put(isAuthorized(USER), costController.updateCost)
    .delete(isAuthorized(USER), costController.deleteCost);


module.exports = router;
