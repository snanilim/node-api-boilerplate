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
    async comparePassword(password) {
        return bcrypt.compare(password, this.password);
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
