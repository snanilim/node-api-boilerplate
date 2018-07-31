const http = require('http');
const app  = require('./config/app');
const env  = require('./config/env');



http.createServer(app).listen(8000,function(req, res){
    var aaa = env.env;
    console.log(development.port);
});
