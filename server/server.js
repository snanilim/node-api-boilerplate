const http = require('http');
const app   = require('./config/app');
const {env }  = require('./config/env');




http.createServer(app).listen(env.port,()=>{
    console.log(Object.isFrozen(env));
    console.log(`Server start on port ${env.port}`);
});

