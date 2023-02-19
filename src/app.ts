import express from 'express';
import bodyParser from 'body-parser'
import compression from 'compression';
import errorHandler from "errorhandler";

const app = express();

// Gzip responses when appropriate
app.use(compression());

// Include request parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}

export default app;
