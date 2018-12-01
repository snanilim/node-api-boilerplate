const express = require('express');
const authRoute = require('../apps/Auth/authRoute');
const userRoute = require('../apps/User/userRoute');
const materialRoute = require('../apps/Material/materialRoute');
const costRoute = require('../apps/Cost/costRoute');
const generatorRoute = require('../apps/Generator/generatorRoute');


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome To Node Api Boilerplate' });
});

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/material', materialRoute);
router.use('/cost', costRoute);
router.use('/generator', generatorRoute);


module.exports = router;
