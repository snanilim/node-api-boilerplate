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
    let convertedError = 'err';
    convertedError = new APIError({
        message: 'Validation Error',
        errors: 'err.error',
        status: 'err.status',
        stack: 'err.stack',
      });

    res.send(convertedError);
    
}

module.exports = signature;