const express = require('express');
const userRoute = require('../apps/Auth/authRoute');


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome To Node Api Boilerplate' });
});

router.use('/', userRoute);


module.exports = router;
