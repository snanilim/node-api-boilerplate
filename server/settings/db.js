const mysql = require('mysql');
const config = require('config');
const logger = require('../settings/winston');

const db = mysql.createConnection ({
    host: '192.168.3.33',
    user: 'nilim',
    password: 'nilim@321',
    database: 'RestaurantPos_Central'
});

exports.connect = () => {
    db.connect((err) => {
        if (err) {
            throw err;
        }
        console.log('Connected to database');
    });
    // return db;
};

exports.db = db;
