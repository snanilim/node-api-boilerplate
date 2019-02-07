require('dotenv').config();
const path = require('path');
const config = require('config');
const log = require('debug')(`log: ${path.basename(__filename)}`);
const http = require('http');
const mongo = require('./settings/db');
const winston = require('./settings/winston')(__filename);

mongo.connect();

const app = require('./settings/app');

const NS_PER_SEC = 1e9;
const time = process.hrtime();
// [ 1800216, 25 ]
console.log(time);

setTimeout(() => {
  const diff = process.hrtime(time);
  // [ 1, 552 ]

  console.log(diff);

  console.log(`Benchmark took ${diff[0] + diff[1]} nanoseconds`);
  // benchmark took 1000000552 nanoseconds
}, 1000);

http.createServer(app).listen(config.get('port'), () => {
    log('Server start on port %o', `${config.get('port')}`);
    winston.info(`Server start on port ${config.get('port')}`);
});
