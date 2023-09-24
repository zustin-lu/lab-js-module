import { config, logConfig } from './scripts/core';
import './scripts/module-1';

console.log('--- Main Module---');
config.feature_1 = 'Feature 1 config';
console.log('Config it self', config);
logConfig('Feature 1');
