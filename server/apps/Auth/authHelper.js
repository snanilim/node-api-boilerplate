const moment = require('moment');
const config = require('config');

const User = require('./authModel');

exports.checkUser = async (userData) => {
    const store_id = 1;
    const 
    try {
        let query = "SELECT 1 FROM `users` where store_id = ? AND user_name = ?"; // query database to get all the players
    
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                console.Console.log(err);
            }
            console.log(result);
            res.status(200).send({ message: result });
        });
        return { token, user: userInfo };
    } catch (error) {
        throw error;
    }
};

exports.checkUserRole = async (userData) => {
    try {
        return { token, user: userInfo };
    } catch (error) {
        throw error;
    }
};

exports.checkRoleWisePermission = async (userData) => {
    try {
        return { token, user: userInfo };
    } catch (error) {
        throw error;
    }
};
