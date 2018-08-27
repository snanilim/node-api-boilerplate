const Ajv = require('ajv');
const ThrowError = require('../helper/throwError');
const constants = require('../helper/constMsg');

exports.validator = (schemaName, data) => {
    const ajv = new Ajv();
    const valid = ajv.validate(require(`./${schemaName}.json`), data);
    if (valid) {
        return true;
    } const error = ajv.errors;
        throw new ThrowError({
            message: error[0].message,
            status: constants.BAD_REQUEST_CODE,
        });
};
