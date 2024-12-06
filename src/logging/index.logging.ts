/**
 * Logging module
 * 
 * TODO: Conditionally set logging level based on current environment setting.
 * TODO: Possibly make the destination of the logger configurable.
 * 
 */
 const { info } = require('winston');
 const winston = require('winston')

 const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console()
    ]
});

module.exports = logger;
