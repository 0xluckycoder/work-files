'use strict'

const express = require('express');
const app = express();
const session = require('express-session');
const logger = require('morgan');

app.use(express.json());
app.use(logger('dev'));

const corsOptions = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Access-Control-Allow-Headers": "X-Requested-With,content-type",
  "Access-Control-Allow-Credentials": true
};

app.get('/api/sensitive-data', async (req, res) => {
  res.writeHead(200, corsOptions);
  res.end(JSON.stringify({ message: "sensitive data end point" }));
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});