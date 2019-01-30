const jwt = require('jsonwebtoken');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const config = require('config');
const ThrowError = require('../../helper/throwError');
const constMsg = require('../../helper/constMsg');

const comparePassword = (password) => {
    return bcrypt.compare(password, this.password);
};

exports.findAndGenerateToken = async (options) => {
    try {
        const { email, password, refreshObj } = options;
        if (!email) throw new ThrowError({ message: constMsg.EMAIL_IS_REQUIRED });
        const user = await this.findOne({ email }).exec();

        const err = {
            status: constMsg.UNAUTHORIZED_CODE,
            isPublic: true,
        };

        if (password) {
            if (user && await user.comparePassword(password)) {
                return { user, accessToken: user.token() };
            }
            err.message = constMsg.UNAUTHORIZED;
        } else if (refreshObj && refreshObj.userEmail === email) {
            return { user, accessToken: user.token() };
        } else {
            err.message = constMsg.UNAUTHORIZED;
        }
        throw new ThrowError(err);
    } catch (error) {
        throw error;
    }
};
