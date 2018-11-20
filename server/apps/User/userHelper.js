const User = require('./userModel');

exports.addNewUser = async (data) => {
    try {
        const user = new User({
            email: data.email,
            password: data.password,
        });
        const resSaveUser = await user.save();
        const userInfo = resSaveUser.userInfo();
        return userInfo;
    } catch (error) {
        throw User.checkDuplicateEmail(error);
    }
};

exports.listAllUsers = async (query) => {
    try {
        const resUserList = await User.getAllUser(query);
        const userInfo = resUserList.map(user => user.userInfo());
        return userInfo;
    } catch (error) {
        throw error;
    }
};

exports.oneUser = async (id) => {
    try {
        const resUserList = await User.getOneUser(id);
        const userInfo = resUserList.userInfo();
        return userInfo;
    } catch (error) {
        throw error;
    }
};
