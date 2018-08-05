const md5 = require('md5');
const env = require('../config/env');
const APIError = require('./message');

signature = (req, res, next)=>{
    const signValue = req.headers.signature;
    const body = req.body;
    const value = md5(`${body}${env.app_key}`);
    if(value === signValue){
        next();
    }
    throw new APIError({
        message: 'Signature Is Invalid',
        status: '401',
    });
    
};

module.exports = signature;