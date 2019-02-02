const appRoot = require('app-root-path');
const fs = require('fs');
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const logDir = 'logs';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-info.log`,
  frequency: '5m',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const options = {
    file: {
        level: 'info',
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
        format: format.simple(),
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        // json: true,
        colorize: true,
        format: format.combine(
          format.colorize(),
          format.printf(
            info => `${info.timestamp} ${info.level}: ${info.message}`
          )
        )
   
    },
};


const logger = createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.json(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
      new transports.Console(options.console),
      dailyRotateFileTransport,
    ],
    exitOnError: false, // do not exit on handled exceptions
});


module.exports = logger;
