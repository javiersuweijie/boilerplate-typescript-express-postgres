import { setup } from './app';
import logger = require('./utils/logger');
import config = require('./config');

const app = setup()
app.listen(config.port, function () {
    logger.info(`Server listening on port: ${config.port}`);
});