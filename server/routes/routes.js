const express = require('express');
const userRoute = require('../components/User/userRoute');


const router = express.Router();

router.use('/', userRoute);


module.exports = router;