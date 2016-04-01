/* eslint strict: 0*/
'use strict';
import fs from 'fs';
import htmlParser from 'htmlparser2';

export function parseHtml(path, encoding = 'utf8', callback) {
  fs.readFile(path, encoding, (err, data) => {
    let htmlData;
    const configParser = new htmlParser.DomHandler((error, dom) => {
      if (error) {
        throw error;
      } else {
        htmlData = dom;
      }
    });
    const parser = new htmlParser.Parser(configParser);
    if (data !== undefined) {
      htmlData = data;
    } else {
      const errArr = ['ERROR'];
      errArr.push(err);
      htmlData = errArr;
    }
    parser.write(htmlData);
    parser.end();
    console.log(' htmlData', htmlData);
    callback(htmlData);
  });
}
