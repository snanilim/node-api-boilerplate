const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  };


const userSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
}, schemaOptions);

userSchema.pre('save', async function save(next) {
    try {
        if (!this.isModified('password')) { return next(); }
        bcrypt.genSalt(10, (err, salt) => {
            const hash = bcrypt.hash(this.password, salt);
            this.password = hash;
        });
        return next();
    } catch (error) {
        return next(error);
    }
});

userSchema.methods.comparePassword = (password, callback) => {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        callback(err, isMatch);
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
