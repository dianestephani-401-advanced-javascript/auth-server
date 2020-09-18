'use strict';


const express = require('express');
const bcrypt = require('bcrypt');

const app = express();





function start(port) {
  app.listen(port, () => {
    console.log('Server works!');
  })
}

module.exports = {start, app} 