import express from 'express';
import bodyParser from 'body-parser'
import compression from 'compression';
import errorHandler from "errorhandler";
import session from "express-session";
import * as config from './config'

const app = express();

// Express configuration
// ...


// Gzip responses when appropriate
app.use(compression());

// Include request parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: config.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: "none",
        secure: true
    },
    store: new session.MemoryStore()
}));

if (process.env.NODE_ENV === "development") {
    app.use(errorHandler());
}



export default app;
