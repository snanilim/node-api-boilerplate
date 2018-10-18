const Ajv = require('ajv');
const ThrowError = require('../../helper/throwError');
const constants = require('../../helper/constMsg');

const ajv = new Ajv();

const commonDataValidator = (schemaName, data, next) => {
    const valid = ajv.validate(require(`./schema/${schemaName}.json`), data);
    if (valid) return next();

    const error = ajv.errors;
    const throwError = new ThrowError({
        message: error[0].message,
        status: constants.BAD_REQUEST_CODE,
    });
    return next(throwError);
};

exports.listUsers = (req, res, next) => {
    const { query: data } = req;
    const schemaName = 'listUsers';

    commonDataValidator(schemaName, data, next);
};
