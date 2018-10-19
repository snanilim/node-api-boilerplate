const User = require('./userModel');

exports.listAllUsers = async (query) => {
    try {
        const resUserList = await User.getAllUser(query);
        const userInfo = resUserList.map(user => user.userInfo());
        return userInfo;
    } catch (error) {
        throw error;
    }
};
