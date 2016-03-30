const fs = require('fs');
const file = '/../.babelrc';
const absolutePath = __dirname + file;
const babelConfig = JSON.parse(fs.readFileSync(absolutePath));
require('babel-core/register')(babelConfig);
require('./server/');
