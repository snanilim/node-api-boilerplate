const mongoose = require('mongoose');
const crypto = require('crypto');
const moment = require('moment');

const refreshTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        require: true,
        index: true,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    userEmail: {
        type: String,
        ref: 'User',
        required: true,
    },
    expires: {
        type: Date,
    },
});


refreshTokenSchema.statics = {
    async findAndGenerateToken(options) {
        const { email, password, refreshObj } = options;
    },

    generate(user) {
        const userId = user.id;
        const userEmail = user.email;
        const token = `${userId}.${crypto.randomBytes(40).toString('hex')}`;
        const expires = moment().add(30, 'days').toDate();
        // eslint-disable-next-line no-use-before-define
        const tokenObj = new RefreshToken({
            token, userId, userEmail, expires,
        });
        tokenObj.save();
        return tokenObj;
    },
};

const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema);
module.exports = RefreshToken;
