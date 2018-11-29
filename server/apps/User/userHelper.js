const User = require('./userModel');

exports.addNewUser = async (data) => {
    try {
        const user = new User({
            name: data.name,
            email: data.email,
            address: data.address,
            role: data.role,
            password: data.password,
            status: data.status,
        });
        const resSaveUser = await user.save();
        const userInfo = resSaveUser.userInfo();
        return userInfo;
    } catch (error) {
        throw User.checkDuplicateEmail(error);
    }
};

exports.updateOneUser = async (userID, data) => {
    try {
        const resSaveUser = await User.update(userID, data);
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

exports.deleteUser = async (id) => {
    try {
        await User.delete(id);
        return true;
    } catch (error) {
        throw error;
    }
};
