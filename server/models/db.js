'use strict';

const mongoose = require('mongoose');
// for local
// module.exports = mongoose.connect('mongodb://localhost/find-a-hobby', console.log('mongoose connected'));

//for heroku
module.exports = mongoose.connect('mongodb://localhost/find-a-hobby' || process.env.MONGODB_URI, console.log('mongoose connected'));
