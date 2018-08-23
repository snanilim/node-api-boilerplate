const jwt = require('jsonwebtoken');
const moment = require('moment');
const { validator } = require('../../schema/validator');
const { errorHandler } = require('../../helper/error');
const { env } = require('../../config/env');
const { saveNewUser, checkUser, updateUser } = require('./userModel');

const generateToken = (resSave) => {
    const payload = {
        iss: 'my.domain.com',
        sub: 'user.id',
        iat: moment().unix(),
        exp: moment().add(7, 'days').unix(),
    };
    return jwt.sign(payload, env.token_secret);
};

exports.signUp = async (req, res, next) => {
    const { body: data } = req;
    try {
        await validator('signUpSchema', data);
        const resSaveUser = await saveNewUser(data);
        const msg = { msg: 'user created successfully' };
        return res.send({ token: generateToken(resSaveUser), user: resSaveUser, msg });
    } catch (error) {
        return errorHandler(error, req, res, next);
    }
};

exports.logIn = async (req, res, next) => {
    const { body: data } = req;
    try {
        await validator('loginSchema', data);
        const resCheckUser = await checkUser(data);
        const msg = { msg: 'Well Done! You successfully logged in to this website 🤗' };
        return res.send({ token: generateToken(resCheckUser), user: resCheckUser, msg });
    } catch (error) {
        return errorHandler(error, req, res, next);
    }
};

exports.updateUser = async (req, res, next) => {
    const { body: data } = req;
    const { id: userID } = req.params;
    try {
        await validator('signUpSchema', data);
        await updateUser(userID, data);
        return res.send('user updated successfully');
    } catch (error) {
        return errorHandler(error, req, res, next);
    }
};
