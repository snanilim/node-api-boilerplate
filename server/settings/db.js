const mongoose = require('mongoose');
const config = require('config');

mongoose.connection.on('error', (err) => {
    console.log(`Mongo Error: ${err}`);
    process.exit(-1);
});

if (config.util.getEnv('NODE_ENV') === 'development') {
    mongoose.set('debug', true);
}

exports.connect = () => {
    mongoose.connect(config.get('mongo_uri'), {
        keepAlive: 1,
        useNewUrlParser: true,
    });
    return mongoose.connection;
};
