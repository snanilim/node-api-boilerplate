const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();
const config = require('config');
const log = require('debug')('log:app');

const route = require('../routes/routes');
const signature = require('../middleware/signature');
const resError = require('../helper/resError');
const winston = require('./winston');

const app = express();

log(`node env: ${process.env.NODE_ENV}`);
log(`apps: ${app.get('env')}`);
log(config.util.getEnv('NODE_ENV'));
log(config.util.getEnv('NODE_CONFIG'));

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
