const User = require('./userModel');

exports.createNew = async (data) => {
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


exports.updateOne = async (userID, data) => {
    try {
        const resUpdate = await User.update(userID, data);
        const userInfo = resUpdate.userInfo();
        return userInfo;
    } catch (error) {
        throw User.checkDuplicateEmail(error);
    }
};

exports.getAll = async (query) => {
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
        const resGetOne = await User.getOne(id);
        const userInfo = resGetOne.userInfo();
        return userInfo;
    } catch (error) {
        throw error;
    }
};

exports.removeOne = async (id) => {
    try {
        await User.delete(id);
        return true;
    } catch (error) {
        throw error;
    }
};
