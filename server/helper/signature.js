const md5 = require('md5');
const env = require('../config/env');

signature = (req, res, next)=>{
    const signValue = req.headers.signature;
    const body = req.body;
    const value = md5(`${body}${env.app_key}`);
    if(value === signValue){
        next();
    }
    res.send({"message":"Invalid signature"});
    
}

module.exports = signature;