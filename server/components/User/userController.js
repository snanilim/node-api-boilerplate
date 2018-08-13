const jwt = require('jsonwebtoken');
const moment = require('moment');
const { validator } = require('../../schema/validator');
const { errorHandler } = require('../../helper/error');
const { env } = require('../../config/env');
const User = require('./userModel');

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
    const { body } = req.body;

    try {
        await validator('signUpSchema', body);

        const user = new User({
            userName: body.userName,
            email: body.email,
            password: body.password,
        });
        const resSave = await user.save();
        const msg = { msg: 'user created successfully' };
        res.send({ token: generateToken(resSave), user: resSave, msg });
    } catch (error) {
        return errorHandler(error, req, res, next);
    }
    return true;
};

exports.logIn = async (req, res, next) => {
    const { body } = req.body;

    try {
        await validator('loginSchema', body);

        const user = await User.findOne({ email: body.email });
        if (!user) {
            return res.status(401).send({ msg: `The email address ${req.body.email} is not associated with any account. Double-check your email address and try again.` });
        }
        user.comparePassword(body.password, (err, isMatch) => {
            if (!isMatch) {
              return res.status(401).send({ msg: 'Invalid email or password' });
            }
            const msg = { msg: 'Well Done! You successfully logged in to this website 🤗' };
            return res.send({ token: generateToken(user), user: user.toJSON(), msg });
          });
    } catch (error) {
        return errorHandler(error, req, res, next);
    }
    return true;
};
