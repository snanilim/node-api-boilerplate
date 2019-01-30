const appRoot = require('app-root-path');
const config = require('config');
const fs = require('fs');
const path = require('path');
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const env = config.util.getEnv('NODE_ENV') || 'development';
const filename = `${appRoot}/logs/app.log`;
const logDir = 'logs';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const dailyRotateFileTransPort = new transports.DailyRotateFile({
    filename: `${logDir}/%DATE%-results.log`,
    datePattern: 'YYYY-MM-DD',
});

const logger = (caller) => {
  return createLogger({
    level: env === 'development' ? 'debug' : 'info',
    format: format.combine(
        // format.label({ label: path.basename(caller) }),
        format.label({ label: caller }),
        format.timestamp({
            format: 'YYYY-MD-DD HH:mm:ss',
        }),
        // format.json(),
        format.json(info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`),
    ),
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.colorize(),
                format.json(info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`),
            ),
        }),
        // new transports.File({ filename }),
        dailyRotateFileTransPort,
    ],
  });
};

module.exports = logger;

// const options = {
//     file: {
//         level: 'info',
//         filename: `${appRoot}/logs/app.log`,
//         handleExceptions: true,
//         json: true,
//         maxsize: 5242880, // 5MB
//         maxFiles: 5,
//         colorize: true,
//         format: winston.format.json(),
//     },
//     console: {
//         level: 'debug',
//         handleExceptions: true,
//         json: true,
//         colorize: true,
//         format: winston.format.combine(
//             winston.format.colorize(),
//             winston.format.simple(),
//         ),
//     },
// };


// const logger = winston.createLogger({
//     transports: [
//       new winston.transports.File(options.file),
//       new winston.transports.Console(options.console),
//     ],
//     exitOnError: false, // do not exit on handled exceptions
// });

// logger.end = {
//     write: (message, encoding) => {
//         logger.info({ end: message });
//     },
// };

// logger.resp = {
//     write: (message, encoding) => {
//         logger.info({ message: 'Hello distributed log filessssn!' });
//     },
// };
