/* eslint strict: 0,
  new-cap: 0 */
'use strict';
import { Router } from 'express';
import { parseHtml } from '../methods/parser.js';
import CircularJSON from 'circular-json';
const router = Router();
const APP_DIR = __dirname;
const practiceFile = '/../../tests/test.html';
const pathToFile = APP_DIR + practiceFile;

router.get('/htmlData', (req, res) => {
  const getHtml = (data) => {
    const serialized = CircularJSON.stringify(data);
    res.json({ serialized });
  };
  parseHtml(pathToFile, 'utf8', getHtml); // set callback in function to run when finished
});

export default router;
