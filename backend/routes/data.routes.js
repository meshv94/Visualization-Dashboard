const express = require('express');
const { getData } = require('../controller/data');

const route = express.Router();

route.get('/data', getData);

module.exports = route;