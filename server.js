'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require("./routes");
const db = require('./db');
const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();

// DB connection
(async () => {
    try {
        const result = await db.sync({ force: true });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();

app.use(cors({
    origin: '*'
}));

//enables cors
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));
app.use(bodyParser.json())
app.use('/', routes)

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));

console.log(`Running on http://${HOST}:${PORT}`);