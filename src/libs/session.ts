import session from 'express-session';
import * as config from '../config';

session({
  secret: config.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: false,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: 'none',
    secure: true,
  },
  store: new session.MemoryStore(),
});

export default session;
