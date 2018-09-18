const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('config');
const { validator } = require('../../schema/validator');
const { errorHandler } = require('../../helper/resError');
const { resMsg } = require('../../helper/resMsg');
const { saveNewUser, checkUser, updateUser } = require('./userModel');

const generateToken = (resSave) => {
    const payload = {
        iss: 'my.domain.com',
        sub: 'user.id',
        iat: moment().unix(),
        exp: moment().add(7, 'days').unix(),
    };
    return jwt.sign(payload, config.get('token_secret'));
};

exports.signUp = async (req, res, next) => {
    const { body: data } = req;
    try {
        await validator('signUpSchema', data);
        const resSaveUser = await saveNewUser(data);
        const msg = 'user created successfully';
        const message = { token: generateToken(resSaveUser), msg };
        return resMsg(message, 201, res, next);
    } catch (error) {
        return errorHandler(error, req, res, next);
    }
};

exports.logIn = async (req, res, next) => {
    const { body: data } = req;
    try {
        await validator('loginSchema', data);
        const resCheckUser = await checkUser(data);
        console.log(resCheckUser);
        const msg = 'Well Done! You successfully logged in to this website 🤗';
        const message = { token: generateToken(resCheckUser), msg };
        return resMsg(message, 201, res, next);
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
