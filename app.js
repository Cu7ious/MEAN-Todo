var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan  = require('morgan')
var router = require('./router');
var app = express();

// connect to MongoDB
mongoose.connect('mongodb://localhost/angularTODO');

app.use(express.static('public'));
app.use(morgan());
app.use(bodyParser.json());

app.use('/api/todos', router);

app.listen(8080);

console.log("App listening on port 8080");

