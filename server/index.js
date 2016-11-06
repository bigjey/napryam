const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cors')());
app.use(require('method-override')());

const dbSettings = require('./db');
const db = mongoose.connect(`mongodb://${dbSettings.user}:${dbSettings.password}@ds029675.mlab.com:29675/napryam`);

mongoose.Promise = Promise;

const api = require('./api');
app.use('/api', api);

module.exports = app;
