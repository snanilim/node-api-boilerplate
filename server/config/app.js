const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const route = require('../routes/routes');
const { env } = require('../config/env');
const signature = require('../middleware/signature');
const error = require('../helper/error');
const winston = require('./winston');


const app = express();

// app.use(winston.info);
app.use(morgan('combined', { stream: winston.end }));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Added all Route here */
app.use(`/${env.version}`, signature, route);

app.use(error.notFound);

app.use(error.errorHandler);

module.exports = app;
