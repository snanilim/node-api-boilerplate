const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../apps/User/userModel');
const ThrowError = require('../helper/throwError');

const ADMIN = 'admin';
const USER = 'user';


const handleAuth = (req, res, next, roles) => async (err, user, info) => {
    console.log('--err--', err);
    console.log('--user--', user);
    console.log('--info--', info);
    const error = err || info;
    const throwError = new ThrowError({
        message: error ? error.message : 'forbidden',
        status: error ? 401 : 403,
        stack: error ? error.stack : undefined,
        isPublic: true,
    });

    if (error) return next(throwError);
    if (user.role !== roles && user.role !== 'admin') return next(throwError);

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
            const user = await User.getSingleValue(userID);
            return rcvHandleFunction(null, user, null);
        } catch (err) {
            return rcvHandleFunction(err, false, null);
        }
    };
};

const isAuthorized = (roles = User.roles) => (req, res, next) => {
    return verifyJWT(handleAuth(req, res, next, roles))(req, res, next);
    console.log(123333);
};

exports.isAuthorized = isAuthorized;
exports.ADMIN = ADMIN;
exports.USER = USER;
