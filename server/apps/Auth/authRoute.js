const express = require('express');
const authController = require('./authController');
const validator = require('./authValidator');

const router = express.Router();

router.route('/login')
.post(validator.login, authController.logIn);


module.exports = router;
