import winston from 'winston';
import { isDev } from '../config';

const logger = winston.createLogger({
    level: isDev ? 'debug' : 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [],
});

if (isDev) {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export default logger;
