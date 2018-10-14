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
var db = null;
var Wrapper = function(){
    this.foo = null;
    this.init();
  };
  

  Wrapper.prototype.init = function(){
    var wrapper = this; 

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
                wrapper.foo = db;
                logger.info('Mongodb Connected Succesfully');
            }
        },
    );
};
// connectWithRetry();

module.exports = new Wrapper();
