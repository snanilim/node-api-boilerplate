const express = require('express');
const userController = require('./userController');



const router = express.Router();

router.post('/sign-up', userController.signUp);


module.exports = router;