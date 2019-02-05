const appRoot = require('app-root-path');
const fs = require('fs');
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const logDir = 'logs';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}


const dailyCustomErrorTransport = new transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-error.log`,
  frequency: '30m',
  datePattern: 'YYYY-MM-DD-HH-mm',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  level: 'error',
});

const dailyCustomCombineTransport = new transports.DailyRotateFile({
    filename: `${logDir}/%DATE%-combine.log`,
    frequency: '30m',
    datePattern: 'YYYY-MM-DD-HH-mm',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level: 'custom',
    handleExceptions: true,
    humanReadableUnhandledException: true,
  });

const options = {
    console: {
        level: 'debug',
        handleExceptions: true,
        // json: true,
        colorize: true,
        format: format.combine(
          format.colorize(),
          format.printf(
            info => `${info.timestamp} ${info.level}: ${info.message}`,
          ),
        ),
    },
    levels: {
        error: 0,
        debug: 1,
        warn: 2,
        data: 3,
        info: 4,
        success: 5,
        silly: 6,
        start: 7,
        end: 8,
        streem: 9,
        custom: 10,
    },
};

const logger = createLogger({
    levels: options.levels,
    level: 'custom',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.json(info => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [
      new transports.Console(options.console),
      dailyCustomErrorTransport,
      dailyCustomCombineTransport,
    ],
    exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.streem(message);
  },
};

module.exports = logger;
