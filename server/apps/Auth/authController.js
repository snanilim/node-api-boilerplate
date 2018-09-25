const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('config');
const { errorHandler } = require('../../helper/resError');
const { resMsg } = require('../../helper/resMsg');
const { saveNewUser, checkUser, updateUser } = require('./authModel');

const accessToken = (user) => {
    const payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(config.get('jwtTimeExpire'), 'minutes').unix(),
    };
    return jwt.sign(payload, config.get('token_secret'));
};

exports.signUp = async (req, res, next) => {
    const { body: data } = req;
    try {
        const resSaveUser = await saveNewUser(data);
        const message = 'User created successfully';
        const sendMessage = { user: resSaveUser.user, token: resSaveUser.token, message };
        return resMsg(sendMessage, 201, res, next);
    } catch (error) {
        return errorHandler(error, req, res, next);
    }
};

exports.logIn = async (req, res, next) => {
    const { body: data } = req;
    try {
        const resCheckUser = await checkUser(data);
        const msg = 'Well Done! You successfully logged in to this website 🤗';
        const message = { token: accessToken(resCheckUser), msg };
        return resMsg(message, 201, res, next);
    } catch (error) {
        return errorHandler(error, req, res, next);
    }
};

exports.updateUser = async (req, res, next) => {
    const { body: data } = req;
    const { id: userID } = req.params;
    try {
        await updateUser(userID, data);
        return res.send('user updated successfully');
    } catch (error) {
        return errorHandler(error, req, res, next);
    }
};
