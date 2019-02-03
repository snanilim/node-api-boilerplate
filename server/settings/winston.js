const appRoot = require('app-root-path');
const config = require('config');
const fs = require('fs');
const path = require('path');
const { createLogger, format, transports, addColors } = require('winston');
require('winston-daily-rotate-file');

const env = config.util.getEnv('NODE_ENV') || 'development';
const filename = `${appRoot}/logs/app.log`;
const logDir = 'logs';
const {
    combine,
    timestamp,
    label,
    printf,
    colorize,
} = format;

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const dailyRotateFileTransPort = new transports.DailyRotateFile({
    filename: `${logDir}/%DATE%-results.log`,
    datePattern: 'YYYY-MM-DD',
});

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });

// Ignore log messages if they have { private: true }
const ignorePrivate = format((info, opts) => {
    if (info.private) { return false; }
    return info;
  });


//
// Logging levels
//
const customConfig = {
    levels: {
      error: 0,
      debug: 1,
      warn: 2,
      data: 3,
      info: 4,
      verbose: 5,
      silly: 6,
      custom: 7
    },
    colors: {
      error: 'red',
      debug: 'blue',
      warn: 'yellow',
      data: 'grey',
      info: 'red',
      verbose: 'cyan',
      silly: 'magenta',
      custom: 'yellow',
    },
  };

addColors(customConfig.colors);

const logger = (caller) => {
  return createLogger({
    levels: customConfig.levels,
    format: combine(
        label({ label: path.basename(caller) }),
        // label({ label: caller }),
        timestamp({
            format: 'YYYY-MD-DD HH:mm:ss',
        }),
        // json(),
        // json(info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`),
        ignorePrivate(),
        myFormat,
    ),
    transports: [
        new transports.Console({
            level: 'info',
            format: combine(
                colorize({ all: true }),
                // json(info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`),
                ignorePrivate(),
                myFormat,
            ),
        }),
        // new transports.File({ filename }),
        dailyRotateFileTransPort,
    ],
    level: 'custom',
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
