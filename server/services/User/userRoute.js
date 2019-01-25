const express = require('express');
const { isAuthorized, ADMIN, USER } = require('../../middleware/auth');
const userController = require('./userController');
const validator = require('./userValidator');

const router = express.Router();

router
    .route('/')
    .get(isAuthorized(USER), validator.listUsers, userController.list)
    .post(isAuthorized(ADMIN), validator.createUser, userController.create);

router
    .route('/:userID')
    .get(isAuthorized(USER), userController.get)
    .put(isAuthorized(USER), userController.update)
    .delete(isAuthorized(ADMIN), userController.delete);

module.exports = router;
