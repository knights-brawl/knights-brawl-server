import * as log4js from 'log4js';

const logger = log4js.getLogger();
logger.level = process.env.LOGGER_LVL || 'INFO';

export default logger;
