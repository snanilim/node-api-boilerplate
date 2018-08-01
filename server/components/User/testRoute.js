const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send({"test": "Start Node Api Boilerplate"});
});


module.exports = router;