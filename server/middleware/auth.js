const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../services/User/userModel');
const APIError = require('../helper/apiError');

const ADMIN = 'admin';
const USER = 'user';


const handleAuth = (req, res, next, roles) => async (err, user, info) => {
    const error = err || info;
    const apiError = new APIError({
        message: error ? error.message : 'forbidden',
        status: error ? 401 : 403,
        stack: error ? error.stack : undefined,
        isPublic: true,
    });

    if (error) return next(apiError);
    if (user.role !== roles && user.role !== 'admin') return next(apiError);

    console.log('log');
    req.user = user;
    return next();
};

const verifyJWT = function verifyJWT(rcvHandleFunction) {
    // eslint-disable-next-line func-names
    return async function (req, res, next) {
        const info = {};
        const tokenValue = req.headers.authorization;
        if (tokenValue === undefined) {
            info.message = 'Token is required';
            return rcvHandleFunction(null, false, info);
        }
        try {
            const token = (tokenValue && tokenValue.split(' ')[1]) || req.cookies.token;
            const payload = jwt.verify(token, config.get('token_secret'));
            const userID = payload.sub;
            const user = await User.getOneUser(userID);
            return rcvHandleFunction(null, user, null);
        } catch (err) {
            return rcvHandleFunction(err, false, null);
        }
    };
};

const isAuthorized = (roles = User.roles) => (req, res, next) => {
    return verifyJWT(handleAuth(req, res, next, roles))(req, res, next);
};

exports.isAuthorized = isAuthorized;
exports.ADMIN = ADMIN;
exports.USER = USER;
