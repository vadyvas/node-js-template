import express from 'express';
import apiRouter from './api';
import internalRouter from './internal';
import publicRouter from './public';

const router = express.Router();

router.use('/api', apiRouter);
router.use('/internal', internalRouter);
router.use('/public', publicRouter);

export default router;
