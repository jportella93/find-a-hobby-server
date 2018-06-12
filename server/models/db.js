'use strict';

const mongoose = require('mongoose');
module.exports = mongoose.connect(process.env.MONGODB_URI, console.log('mongoose connected'));
