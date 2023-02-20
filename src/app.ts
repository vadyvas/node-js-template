import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import compression from 'compression';
import errorHandler from 'errorhandler';
import nocache from 'nocache';
import morgan from 'morgan';
import { helmet } from './libs';
import { isDev } from './config';
import routes from './routes';
import * as config from './config';

const app = express();

// Express configuration
// ...

app.use(session({
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
}));
app.use(morgan(isDev ? 'dev' : 'tiny'));

// Gzip responses when appropriate
app.use(compression());

// Include request parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Security policy requirements
app.use(helmet.hsts);
app.use(helmet.referrer);
app.use(nocache());

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}

// endpoints connection
app.use(routes);

export default app;
