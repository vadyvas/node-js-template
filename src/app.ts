import express from 'express';
import bodyParser from 'body-parser'
import compression from 'compression';
import errorHandler from "errorhandler";
import {session} from './libs';

const app = express();

// Express configuration
// ...


// Gzip responses when appropriate
app.use(compression());

// Include request parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use(session);

if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}



export default app;
