const functions = require('firebase-functions');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const routes = require('./routes');

const app = express();

app.use( bodyParser.json() );
app.use(
  cors({ origin: true })
);

app.use('/v1', routes);

exports.api = functions.https.onRequest((request, response) => {
  if (!request.path) {
    resquest.url = `/${request.url}`;
  }

  return app(request, response);
})
