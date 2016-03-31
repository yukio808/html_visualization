import { Router } from 'express';
import { parseHtml } from '../methods/parser.js';
const router = Router();
const APP_DIR = __dirname;
const practiceFile = '/../../tests/test.html';
const pathToFile = APP_DIR + practiceFile;

router.get('/', (req, res) => {
  const getHtml = (data) => {
    res.send(data);
  };
  parseHtml(pathToFile, 'utf8', getHtml); // set callback in function to run when finished
});

export default router;
