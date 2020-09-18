'use strict';


const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const jwt = require('jsonwebtoken');

const app = express();





function start(port) {
  app.listen(port, () => {
    console.log('Server works!');
  })
}

module.exports = {start, app} 