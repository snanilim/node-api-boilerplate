const User = require('./authSchema');
const ThrowError = require('../../helper/throwError');

exports.saveNewUser = async (data) => {
    try {
        const user = new User({
            email: data.email,
            password: data.password,
        });
        const resSaveUser = await user.save();
        const userInfo = resSaveUser.userInfo();
        const token = generateToken(resSaveUser, resSaveUser.token);
        return userInfo;
    } catch (error) {
        throw error;
    }
};

exports.checkUser = async (data) => {
    try {
        const user = await User.findOne({ email: data.email });
        if (!user) {
            const msg = `The email address ${data.email} is not associated with any account. Double-check your email address and try again.`;
            throw new ThrowError({ message: msg, status: 404 });
        }
        const isMatch = await user.comparePassword(data.password);
        if (!isMatch) {
            const msg = 'Invalid email or password';
            throw new ThrowError({
                message: msg,
                status: 404,
            });
        }
        return user;
    } catch (error) {
        throw error;
    }
};

exports.updateUser = async (userId, data) => {
    try {
       const updateUser = await User.findByIdAndUpdate(userId, { $set: data });
       return updateUser;
    } catch (error) {
        throw error;
    }
};
