const { MongoClient } = require('mongodb');
const config = require('config');
const logger = require('../settings/winston');

const mongodbConnectioonURI = config.get('mongo_uri');
const dbName = config.get('dbName');

const RECONNECT_INTERVAL = 10000;
const CONNECT_OPTIONS = {
    reconnectTries: 3600,
    reconnectInterval: RECONNECT_INTERVAL,
    useNewUrlParser: true,
};

const onClose = () => {
    logger.info('MongoDB connection was closed');
};

const onReconnect = () => {
    logger.info('MongoDB reconnected');
};
let db = null;


const connectWithRetry = () => {
    MongoClient.connect(
        mongodbConnectioonURI,
        CONNECT_OPTIONS,
        (err, client) => {
            if (err) {
                logger.error(
                    `MongoDB Connection was faield: ${err.message}`,
                    err.message,
                );
                setTimeout(connectWithRetry, RECONNECT_INTERVAL);
            } else {
                db = client.db(dbName);
                db.on('close', onClose);
                db.on('reconnect', onReconnect);
                console.log('-----------db---------------', db);
                logger.info('Mongodb Connected Succesfully');
            }
        },
    );
};
// connectWithRetry();

exports.connect = connectWithRetry;
console.log('db---------------', db);
exports.db = db;

// mongoose.connection.on('error', (err) => {
//     console.log(`Mongo Error: ${err}`);
//     process.exit(-1);
// });

// if (config.util.getEnv('NODE_ENV') === 'development') {
//     mongoose.set('debug', true);
// }

// exports.connect = () => {
//     mongoose.connect(config.get('mongo_uri'), {
//         keepAlive: 1,
//         useNewUrlParser: true,
//     });
//     return mongoose.connection;
// };
