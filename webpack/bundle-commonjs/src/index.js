const { config, logConfig } = require('./scripts/core');
require('./scripts/module-1');

console.log('--- Main Module---');
config.feature_1 = 'Feature 1 config';
console.log('Config it self', config);
logConfig('Feature 1');
