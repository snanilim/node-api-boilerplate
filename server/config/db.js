const mongoose = require('mongoose');
const {environment, env} = require('./env');

mongoose.connection.on('error', (err)=>{
    console.log(`Mongo Error: ${err}`);
    process.exit(-1);
})

if(environment === 'development'){
    mongoose.set('debug', true);
}

exports.connect = () => {
    mongoose.connect(env.mongo, {
        keepAlive: 1,
        useNewUrlParser: true
    })
    return mongoose.connection;
}