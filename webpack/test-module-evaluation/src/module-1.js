import { config } from './core';

console.log('Config check from module 1', JSON.stringify(config));

config.user = 'Justin';

console.log('Module 1 updated config', JSON.stringify(config));
