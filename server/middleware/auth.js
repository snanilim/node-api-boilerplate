const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../apps/User/userModel');
const ThrowError = require('../helper/throwError');

const ADMIN = 'admin';
const USER = 'user';

const checkRoles = (roles, userID) => {
    const user = User.findById(userID);
    if (User.roles.includes(roles)) {
        if (roles === user.role) return true;
        return false;
    }
    return false;
};

const handleAuth = (req, res, next, roles) => async (err, user, info) => {
    console.log('err', err);
    console.log('user', user);
    console.log('info', info);
    process.exit(1);
    // const error = new ThrowError({
    //     status: '',
    //     message: '',
    // });

    // return next();
};

const verifyJWT = function verifyJWT(rcvHandleFunction) {
    console.log('sdf');
    // eslint-disable-next-line func-names
    return function (req, res, next) {
        const info = {};
        const tokenValue = req.headers.authorization;
        if (tokenValue === undefined) {
            info.message = 'Token is required';
            return rcvHandleFunction(null, false, info);
        }
        try {
            console.log('tokenValue', tokenValue);
            const token = (tokenValue && tokenValue.split(' ')[1]) || req.cookies.token;
            const payload = jwt.verify(token, config.get('token_secret'));
            console.log(payload.sub);
            const userID = payload.sub;
            const user = User.findById(userID);
            return rcvHandleFunction(null, user, null);
        } catch (err) {
            console.log(err);
            return rcvHandleFunction(err, false, null);
        }
    };
};

const isAuthorized = (roles = User.roles) => (req, res, next) => {
    verifyJWT(handleAuth(req, res, next, roles))(req, res, next);
    console.log(123333);
};

exports.isAuthorized = isAuthorized;
exports.ADMIN = ADMIN;
exports.USER = USER;
