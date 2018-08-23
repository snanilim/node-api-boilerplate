const express = require('express');
const userController = require('./userController');
const authorizeUser = require('../../middleware/auth');

const router = express.Router();

router.post('/sign-up', userController.signUp);
router.post('/login', userController.logIn);
router.put('/update/:id', authorizeUser, userController.updateUser);

module.exports = router;
