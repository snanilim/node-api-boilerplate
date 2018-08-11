const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


var schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  };


const UserSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String
}, schemaOptions);

UserSchema.pre('save', function(next){
    let user = this;
    if(!user.isModified('password')){return next()}
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(user.password, salt, function(err, hash){
            user.password = hash;
            next();
        })
    })
});

UserSchema.methods.comparePassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, isMatch){
        callback(err, isMatch);
    })
}

var User = mongoose.model('User', UserSchema);

module.exports = User;
