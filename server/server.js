const http = require('http');
const app   = require('./config/app');
const mongo   = require('./config/db');
const {env }  = require('./config/env');


mongo.connect();



http.createServer(app).listen(env.port,()=>{
    console.log(`Server start on port ${env.port}`);
});

