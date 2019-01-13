const express = require('express');
const authRoute = require('../apps/Auth/authRoute');
const userRoute = require('../apps/User/userRoute');


const router = express.Router();

router.get('/', (req, res) => {
    let query = "SELECT * FROM `test_table` ORDER BY id ASC"; // query database to get all the players

    // execute query
    db.query(query, (err, result) => {
        if (err) {
            console.Console.log(err);
        }
        console.log(result);
        res.status(200).send({ message: result });
    });
    // res.status(200).send({ message: 'Welcome To Node Api Boilerplate' });
});

router.use('/auth', authRoute);
router.use('/user', userRoute);


module.exports = router;
