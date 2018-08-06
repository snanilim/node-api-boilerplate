const express = require('express');
const userRoute = require('../components/User/userRoute');


const router = express.Router();

router.get('/', (req, res)=>{
    res.send({"message": "Welcome To Node Api Boilerplate"});
});

router.use('/', userRoute);


module.exports = router;