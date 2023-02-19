import express from 'express';
import bodyParser from 'body-parser'
import compression from 'compression';
import errorHandler from "errorhandler";
import nocache from 'nocache';
import {
    session,
    helmet,
} from './libs';

const app = express();

// Express configuration
// ...

app.use(session);

// Gzip responses when appropriate
app.use(compression());

// Include request parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Security policy requirements
app.use(helmet.hsts);
app.use(helmet.referrer);
app.use(nocache())

if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}



export default app;
