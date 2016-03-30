'use strict';

let html;
let htmlDomObject;
const fs = require('fs');
const htmlParser = require('htmlparser2');
const dir = __dirname;
const testPath = '/../tests/test.html';
const pathToFile = dir + testPath;
const configParser = new htmlParser.DomHandler(function (error, dom) {
  if (error) {
    throw error;
  } else {
    htmlDomObject = dom;
  }
});
const parser = new htmlParser.Parser(configParser);

fs.readFile(pathToFile, 'utf8', callBack);

// callback for fs and start of app
function callBack(err, data) {
  if (data !== undefined) {
    //console.log('data',data);
    html = data;
  } else {
    const errArr = ["ERROR"];
    errArr.push(err);
    html = errArr;
  }
  parser.write(html);
  parser.end();
}
