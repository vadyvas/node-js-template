import express from 'express';

export default (fn: express.RequestHandler) => (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    return fn(req, res, next);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).send({ error: e.message });
    } else {
      res.status(500).send({ error: 'Internal server error' });
    }
  }
};
