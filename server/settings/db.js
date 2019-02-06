const mongoose = require('mongoose');
const config = require('config');
const logger = require('../settings/winston')(__filename);

mongoose.connection.on('open', (ref) => {
    logger.info('Mongodb Connected Succesfully');
});

mongoose.connection.on('error', (err) => {
    logger.error(`MongoDB Connection was faield: ${err.message}`);
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
