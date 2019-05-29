const {transports, createLogger, format} = require('winston');

    const logger = createLogger({
        format: format.combine(
            format.timestamp(),
            format.json()
        ),
        transports: [
            new transports.Console(),
            new transports.File({filename: './log/exception.log', level: 'error'}),
            new transports.File({filename:  './log/debug.log', level:'info'})
        ]
    });
    
module.exports = logger;