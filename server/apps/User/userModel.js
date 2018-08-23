const User = require('./userSchema');

exports.saveNewUser = async (data) => {
    try {
        const user = new User({
            userName: data.userName,
            email: data.email,
            password: data.password,
        });
        const resSave = await user.save();
        return resSave;
    } catch (error) {
        throw error;
    }
};

exports.checkUser = async (data) => {
    try {
        const user = await User.findOne({ email: data.email });
        if (!user) {
            return { msg: `The email address ${data.email} is not associated with any account. Double-check your email address and try again.` };
        }
        user.comparePassword(data.password, (err, isMatch) => {
            if (!isMatch) {
                return { msg: 'Invalid email or password' };
            }
            return user;
        });
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
