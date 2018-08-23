const Ajv = require('ajv');
const APIError = require('../helper/apiError');
const constants = require('../helper/message');

exports.validator = (schemaName, data) => {
    const ajv = new Ajv();
    const valid = ajv.validate(require(`./${schemaName}.json`), data);
    if (valid) {
        return true;
    } const error = ajv.errors;
        throw new APIError({
            message: error[0].message,
            status: constants.BAD_REQUEST_CODE,
        });
};
