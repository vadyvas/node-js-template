import express from 'express';
import { catchWrap } from '../../utils';

const router = express.Router();

router.get('/', catchWrap((req, res, next) => {
  res.send({ message: 'ok' });
}));

export default router;
