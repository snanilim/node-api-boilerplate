const User = require('./userModel');

exports.listAllUsers = async (query) => {
    try {
        const resUserList = await User.getAllUser(query);
        return { resUserList };
    } catch (error) {
        throw error;
    }
};
