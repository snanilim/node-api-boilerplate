require('dotenv').config();
const config = require('config');
const log = require('debug')('log:http');
const http = require('http');
const mysql = require('mysql');
const db = require('./settings/db');

// connect to database
db.connect();
global.db = db.db;

const app = require('./settings/app');

http.createServer(app).listen(config.get('port'), () => {
    log(`Server start on port ${config.get('port')}`);
});
