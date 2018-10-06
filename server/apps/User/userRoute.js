const express = require('express');
const { isAuthorized, ADMIN, USER } = require('../../middleware/auth');
const userController = require('./userController');
// const validator = require('./userValidator');

const router = express.Router();

router.route('/')
.get(isAuthorized(USER));


module.exports = router;
