const mysql = require('mysql');
const config = require('config');
const logger = require('../settings/winston');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'admin@123',
    database: 'test_schema'
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
