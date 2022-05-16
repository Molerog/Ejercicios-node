const Logger = require('logplease');

const options = {
    useColors: true,     // Enable colors
    color: Logger.Colors.White, // Set the color of the logger
    showTimestamp: true, // Display timestamp in the log message
    useLocalTime: false, // Display timestamp in local timezone
    showLevel: true,     // Display log level in the log message
    filename: null,      // Set file path to log to a file
    appendFile: true,    // Append logfile instead of overwriting
  };

const logger = Logger.create('', options);



const esPar = n => {
    if (n % 2){
        logger.error(`Hola soy ${n} y soy un impar`);
    }
    else {
        logger.info(`Hola soy ${n} y soy par`);
    }
}

const sum = (a, b) => {
    return a + b;
  };
  
module.exports = {
    esPar,
    sum
}