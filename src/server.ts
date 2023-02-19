import os from 'os';
import * as config from './config';
import app from './app';
import { logger } from './libs';

app.listen(config.PORT, () => {
  logger.debug(`App server running at http://${os.hostname()}:${config.PORT}`);
});

process.on('uncaughtException', (err) => {
  logger.error(err);
  process.exit(); // exit the process to avoid unknown state
});
