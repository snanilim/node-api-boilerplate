const appRoot = require('app-root-path');
const winston = require('winston');

const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
        format: winston.format.json(),
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: true,
        colorize: true,
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
        ),
    },
};


const logger = winston.createLogger({
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console),
    ],
    exitOnError: false, // do not exit on handled exceptions
});

logger.end = {
    write: (message, encoding) => {
        logger.info({ end: message });
    },
};

logger.resp = {
    write: (message, encoding) => {
        logger.info({ message: 'Hello distributed log filessssn!' });
    },
};

module.exports = logger;
