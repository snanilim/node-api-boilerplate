const express = require('express');
const authController = require('./authController');
const validator = require('./authValidator');

const router = express.Router();

router.route('/sign-up')
.post(validator.sign_up, authController.signUp);

router.route('/login')
.post(validator.login, authController.logIn);


module.exports = router;
