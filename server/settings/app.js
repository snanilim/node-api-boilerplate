const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('config');
const log = require('debug')('log:app');

const route = require('../routes/routes');
const signature = require('../middleware/signature');
const resError = require('../helper/resError');
const winston = require('./winston');

const app = express();

log(config.get('app_key'));

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
