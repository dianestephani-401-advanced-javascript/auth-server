'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server');



server.start(process.env.PORT);