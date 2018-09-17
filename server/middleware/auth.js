const jwt = require('jsonwebtoken');
const { env } = require('../settings/env');

const isAuthenticated = (req, res, next) => {
    // const tokenValue = req.headers.authorization;
    const token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
    try {
        jwt.verify(token, env.token_secret);
        next();
    } catch (err) {
      throw err;
    }
};

module.exports = isAuthenticated;
