const express = require('express');
const { isAuthorized, USER, ADMIN } = require('../../middleware/auth');
const generatorController = require('./generatorController');
const validator = require('./generatorValidator');

const router = express.Router();

router
    .route('/')
    .get(isAuthorized(USER), validator.listGenerators, generatorController.generatorList)
    .post(isAuthorized(USER), validator.createGenerator, generatorController.createGenerator);

router
    .route('/:generatorID')
    .get(isAuthorized(USER), generatorController.getOneGenerator)
    .put(isAuthorized(ADMIN), generatorController.updateGenerator);


module.exports = router;
