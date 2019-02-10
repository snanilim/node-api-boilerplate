require('dotenv').config();
const path = require('path');
const config = require('config');
const log = require('debug')(`log: ${path.basename(__filename)}`);
const http = require('http');
const mongo = require('./settings/db');
const winston = require('./settings/winston')(__filename);

mongo.connect();

const app = require('./settings/app');

http.createServer(app).listen(config.get('port'), () => {
    log('Server start on port %o', `${config.get('port')}`);
    winston.info(`Server start on port ${config.get('port')}`);
});
