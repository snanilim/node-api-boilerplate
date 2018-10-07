const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../apps/User/userModel');

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

const verifyJWT = async (req, res, next, roles) => {
    // const tokenValue = req.headers.authorization;
    const token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
    try {
        const payload = jwt.verify(token, config.get('token_secret'));
        const userID = payload.sub;
        await checkRoles(roles, userID, next);
        return next();
    } catch (err) {
      return next(err);
    }
};

const isAuthorized = (roles = User.roles) => (req, res, next) => {
    verifyJWT(req, res, next, roles);
};

exports.isAuthorized = isAuthorized;
exports.ADMIN = ADMIN;
exports.USER = USER;
