const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('config');
const log = require('debug')('log:app');

const route = require('../routes/routes');
const signature = require('../middleware/signature');
const resError = require('../helper/resError');
const winston = require('./winston')(__filename);

const app = express();

winston.debug('Debugging info');
winston.verbose('Verbose info');
winston.log({
    private: true,
    level: 'info',
    message: 'What time is the testing at?',
    query: 'its a test info',
});
winston.warn('Warning message');
winston.error('Error info');
winston.custom('hello');

log(config.util.getEnv('NODE_ENV'));

// app.use(winston.info);
app.use(helmet());
app.use(morgan('combined', { stream: winston.end }));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Added all Route here */
app.use(`/${config.get('version')}`, signature, route);

app.use(resError.notFound);
app.use(resError.errorHandler);

module.exports = app;
