// Transpile all code with babel and use '@babel/preset-env' (aka ES6) preset.
require('@babel/register')({
  presets: ['@babel/preset-env'],
});

module.exports = require('./index');
