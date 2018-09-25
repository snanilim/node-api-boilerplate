const jwt = require('jsonwebtoken');
const moment = require('moment');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('config');
const ThrowError = require('../../helper/throwError');


const schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  };

const roles = ['user', 'admin'];
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 50,
        minlength: 3,
        trim: true,
    },
    phone: {
        type: String,
        maxlength: 13,
        minlength: 11,
        trim: true,
    },
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        require: true,
        maxlength: 100,
        minlength: 3,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        maxlength: 128,
        minlength: 6,
        trim: true,
    },
    service: {
        facebook: String,
        google: String,
    },
    role: {
        type: String,
        enum: roles,
        default: 'user',
        trim: true,
    },
    picture: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
    },
}, schemaOptions);

userSchema.pre('save', async function save(next) {
    try {
      if (!this.isModified('password')) return next();
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(this.password, salt);
      this.password = hash;
      return next();
    } catch (error) {
      return next(error);
    }
});

userSchema.method({
    userInfo() {
        const userInfo = {};
        const fields = ['id', 'name', 'email', 'picture', 'role', 'createdAt'];

        fields.forEach((field) => {
            userInfo[field] = this[field];
        });

        return userInfo;
    },

    token() {
        const payload = {
            sub: this.id,
            iat: moment().unix(),
            exp: moment().add(config.get('jwtTimeExpire'), 'minutes').unix(),
        };
        return jwt.sign(payload, config.get('token_secret'));
    },

    async comparePassword(password) {
        return bcrypt.compare(password, this.password);
    },
});

userSchema.statics = {
    checkDuplicateEmail(error) {
        if (error.code === 11000 && (error.name === 'BulkWriteError' || error.name === 'MongoError')) {
            throw new ThrowError({
                message: 'Validation Error',
                errors: [{
                    field: 'email',
                    location: 'body',
                    message: ['email already exist'],
                }],
                status: 404,
                stack: error.stack,
                isPublic: true,
            });
        }
        return error;
    },
};

const User = mongoose.model('User', userSchema);

module.exports = User;
