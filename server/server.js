const config = require('config');
const http = require('http');
const app = require('./settings/app');
const mongo = require('./settings/db');

mongo.connect();


http.createServer(app).listen(config.get('port'), () => {
    console.log(`Server start on port ${config.get('port')}`);
});
