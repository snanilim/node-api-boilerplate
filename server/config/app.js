const express = require('express');
const morgan  = require('morgan');
const bodyParser = require("body-parser");

const route   = require('../routes/routes');
const {env }    = require('../config/env');
const signature = require('../helper/signature');


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



/** Added all Route here */
app.use(`/${env.version}`, signature, route);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    res.send({error:"notfound"});
    // next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });
  

module.exports = app;