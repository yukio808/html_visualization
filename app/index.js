const fs = require('fs');
const parser = require('htmlparser2');
const dir = __dirname;
const testPath = '/../tests/test.html';
const pathToFile = dir + testPath;
const testHtmlFile = fs.readFile(pathToFile, 'utf8', logger);

// console.log('parser',parser);

// callback for fs and start of app
function logger(err, data) {
  if (data !== undefined) {
    console.log('data',data);
    return data;
  } else {
    console.error(err);
  }
}
