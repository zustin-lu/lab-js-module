exports.config = {};

exports.logConfig = function(from) {
  console.log(`Logging config from ${from}`, exports.config);
}

console.log('core has been initialized successfully');
