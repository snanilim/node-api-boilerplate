const moment = require('moment');
const config = require('config');

const User = require('../User/userModel');
const RefreshToken = require('./refreshTokenModel');

const db  = require('../../settings/db');

const generateToken = (user, accessToken) => {
    const tokenType = 'Bearer';
    const refreshToken = RefreshToken.generate(user).token; // its only reply token from full obj
    const expireTime = moment().add(config.get('jwtTimeExpire'), 'minutes').unix();

    return {
        tokenType, refreshToken, accessToken, expireTime,
    };
};

exports.saveNewUser = async (data) => {
    // console.log('last', db.foo);

    const info = db.foo;
    // info.collection('users').find({});

    try {
        info.User.insert([
            { 'email': 'aa@mail.com' }
         ]);
        // const user = await info.collection('users').find().toArray();
        // console.log('-------', user);
        // const user = new User({
        //     email: data.email,
        //     password: data.password,
        // });
        // const resSaveUser = await user.save();
        // const userInfo = resSaveUser.userInfo();
        // const token = generateToken(resSaveUser, resSaveUser.token());
        // return { token, user: userInfo };
    } catch (error) {
        console.log('%%%%%%', error);
        // throw User.checkDuplicateEmail(error);
    }
};

exports.checkUser = async (userData) => {
    try {
        const { user, accessToken } = await User.findAndGenerateToken(userData);
        const token = generateToken(user, accessToken);
        const userInfo = user.userInfo();
        return { token, user: userInfo };
    } catch (error) {
        throw error;
    }
};
