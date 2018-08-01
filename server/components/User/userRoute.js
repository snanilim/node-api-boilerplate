const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send({"message": "Welcome To Node Api Boilerplate"});
});


module.exports = router;