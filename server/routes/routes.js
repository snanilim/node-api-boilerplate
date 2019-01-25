const express = require('express');
const authRoute = require('../services/Auth/authRoute');
const userRoute = require('../services/User/userRoute');


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome To Node Api Boilerplate' });
});

router.use('/auth', authRoute);
router.use('/user', userRoute);


module.exports = router;
