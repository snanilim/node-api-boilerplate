const express = require('express');
const route   = require('../routes/routes');
const env     = require('../config/env');
const signature = require();

const app = express();



/** Added all Route here */
app.use(`/${env.verssion}`, signature, route);

module.exports = app;