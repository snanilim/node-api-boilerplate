const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  };


const UserSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
}, schemaOptions);

UserSchema.pre('save', (next) => {
    const user = this;
    if (!user.isModified('password')) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (error, hash) => {
            user.password = hash;
            return next();
        });
    });
    return true;
});

UserSchema.methods.comparePassword = (password, callback) => {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        callback(err, isMatch);
    });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
