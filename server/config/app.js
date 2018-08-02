const express = require('express');
const route   = require('../routes/routes');
const {env }    = require('../config/env');
const signature = require('../helper/signature');


const app = express();



/** Added all Route here */
app.use(`/${env.version}`, signature, route);

module.exports = app;