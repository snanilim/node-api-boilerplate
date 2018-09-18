const jwt = require('jsonwebtoken');
const config = require('config');

const isAuthenticated = (req, res, next) => {
    // const tokenValue = req.headers.authorization;
    const token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
    try {
        jwt.verify(token, config.get('token_secret'));
        next();
    } catch (err) {
      throw err;
    }
};

module.exports = isAuthenticated;
