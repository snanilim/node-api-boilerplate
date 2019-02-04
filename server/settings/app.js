const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('config');
const log = require('debug')('log:app');

const route = require('../routes/routes');
const signature = require('../middleware/signature');
const resError = require('../helper/resError');
const { resStart, resEnd } = require('../helper/util');
const winston = require('./winston');

const app = express();
app.use(resStart);

// app.use(winston.info);
app.use(helmet());
app.use(morgan('combined', winston.log));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Added all Route here */
app.use(`/${config.get('version')}`, signature, route);

app.use(resError.notFound);
app.use(resError.errorHandler);
app.use(resEnd);

module.exports = app;
