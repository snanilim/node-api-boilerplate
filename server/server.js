const http = require('http');
const app  = require('./app/app');

app.listen(3000, function(){
    console.log("app start");
});