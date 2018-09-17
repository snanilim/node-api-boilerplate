const config = require('config');
const log = require('debug')('http');
const http = require('http');
const app = require('./settings/app');
const mongo = require('./settings/db');

mongo.connect();


http.createServer(app).listen(config.get('port'), () => {
    log(`Server start on port ${config.get('port')}`);
});
