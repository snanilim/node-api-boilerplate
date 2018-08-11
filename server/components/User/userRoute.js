const express = require('express');
const userController = require('./userController');



const router = express.Router();

router.post('/sign-up', userController.signUp);
router.post('/login', userController.logIn);


module.exports = router;