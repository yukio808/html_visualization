'use strict';
const fs = require('fs');
const htmlParser = require('htmlparser2');
const dir = __dirname;
const testPath = '/../tests/test.html';
const pathToFile = dir + testPath;
let html;
const parser = new htmlParser.Parser({
  onopentag: (name, attr) => {
    console.log('onopentag', name, attr);
  },
  onattribute: (name, attr) => {
    // console.log('atrributes of tags', name, attr);
  },
  onclosetag: (name) => {
    console.log('closeTag', name);
  }
});

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
