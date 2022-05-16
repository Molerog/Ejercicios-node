let http = require("http");
const Logger = require('logplease');

const options = {
    useColors: true,     // Enable colors
    color:Logger.Colors.Yellow, // Set the color of the logger
    showTimestamp: false, // Display timestamp in the log message
    useLocalTime: false, // Display timestamp in local timezone
    showLevel: true,     // Display log level in the log message
    filename: null,      // Set file path to log to a file
    appendFile: true,    // Append logfile instead of overwriting
  };


const logger = Logger.create('',options);

logger.debug(`Hola mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);

http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Aprendiendo en The Bridge!");
  })
  .listen(8080);