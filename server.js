const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
'mongodb://localhost:27017/node_course',
{useNewUrlParser: true, useUnifiedTopology: true},
);

requireDir('./src/models');



 app.use('/api', require('./src/routes'));

const server = app.listen(3001);

module.exports = server;

console.log(`Worker started on port 3001.`);
