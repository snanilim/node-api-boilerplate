const Ajv = require('ajv');

const schema = require('../../schema/userSchema.json');

exports.signUp = (req, res, next) =>{
    const body = req.body;
    var ajv = new Ajv();
    var valid = ajv.validate(schema, body);
    if (!valid) console.log(ajv.errors);
};

