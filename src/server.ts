import express from 'express';
import bodyParser from 'body-parser'
import compression from 'compression';
import errorHandler from "errorhandler";

import * as config from './config'

const app = express();

// Gzip responses when appropriate
app.use(compression());

// Include request parsers
app.use(bodyParser.json())

if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});

process.on("uncaughtException", function(err) {
    console.error(err);
    process.exit(); // exit the process to avoid unknown state
});
