import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  console.log('Home Page Reached');
  res.send('Hello World');
});

export default router;
