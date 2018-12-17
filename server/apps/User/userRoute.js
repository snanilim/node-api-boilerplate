const express = require('express');
const { isAuthorized, ADMIN, USER } = require('../../middleware/auth');
const userController = require('./userController');
const validator = require('./userValidator');

const router = express.Router();

router
    .route('/')
    .get(isAuthorized(USER), validator.listUsers, userController.userList)
    .post(isAuthorized(ADMIN), validator.createUser, userController.createUser);

router
    .route('/:userID')
    .get(isAuthorized(USER), userController.getOneUser)
    .put(isAuthorized(USER), userController.updateUser)
    .delete(isAuthorized(ADMIN), userController.deleteUser);

module.exports = router;
