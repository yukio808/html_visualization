const fs = require('fs');
const dir = __dirname;
const testPath = '/../tests/test.html';
const pathToFile = dir + testPath;
const testHtml = fs.readFile(pathToFile, 'utf8', logger);

function logger(err, data) {
  console.log('err',err);
  console.log('data',data);// data is returned
}
