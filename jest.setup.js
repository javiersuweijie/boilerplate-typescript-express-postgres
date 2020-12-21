jest.mock('request-promise-native')
jest.setTimeout(10000);
require('events').EventEmitter.prototype._maxListeners = 100;