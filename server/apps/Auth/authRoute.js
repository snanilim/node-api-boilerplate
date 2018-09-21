const express = require('express');
const userController = require('./authController');
const isAuthenticated = require('../../middleware/auth');
const validator = require('./authValidator');

const router = express.Router();

router.route('/sign-up')
.post(validator.sign_up, userController.signUp);

router.route('/login')
.post(validator.login, userController.logIn);

router.put('/update/:id', isAuthenticated, userController.updateUser);

module.exports = router;
